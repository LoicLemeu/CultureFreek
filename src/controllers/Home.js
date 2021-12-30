const { all } = require('express/lib/application');
const Item = require('../models/Item');

module.exports = class Home {
    print(req, res){
        this.loadFirstItems(req, res);
    }

    process(req, res){
        let item = new Item();
        if(req.body.searchByType == '' && req.body.siteSearch == ''){
            this.loadFirstItems(req, res);
        }
        else {
            if(req.body.siteSearch !== ''){
                item.textQuery(req.body.siteSearch)
                    .then(result => {
                        let allItems = this.transformData(result)
                        if(req.body.searchByType !== ''){
                            let filteredItems = allItems.filter(x => x.type == req.body.searchByType);
                            return this.separateData(req, filteredItems);
                        }
                        return this.separateData(req, allItems);
                    })
                    .then(() => {
                        res.render('home', {
                            books: req.books,
                            movies: req.movies,
                            songs: req.songs,
                            siteSearch: req.body.siteSearch
                        })
                    })
            }
            else {
                item.baseQuery()
                    .then(result => {
                        let allItems = this.transformData(result).filter(x => x.type == req.body.searchByType);
                        this.separateData(req, allItems);
                    })
                    .then(() => {
                        res.render('home', {
                            books: req.books,
                            movies: req.movies,
                            songs: req.songs,
                        })
                    })
            }
            
        }
        
    }

    loadFirstItems(req, res){
        let item = new Item();
        item.baseQuery()
            .then(result => {
                let allItems = this.transformData(result);
                this.separateData(req, allItems);
            })
            .then(() => {
                res.render('home', {
                    books: req.books,
                    movies: req.movies,
                    songs: req.songs
                })
            })
    }

    transformData(data){
        let resultTable = [];
        for(let item of data){
            let details = Object.fromEntries(item.details);
            resultTable.push({type: item.type, title: item.title, year: item.year, details, link: item.link});
        }
        return resultTable;
    }

    separateData(req, data){
        let [books, movies, songs] = [[], [], []];
        data.forEach(x => {
            switch (x.type){
                case 'book':
                    books.push(x);
                    break;
                case 'movie':
                    movies.push(x);
                    break;
                case 'song':
                    songs.push(x);
                    break;
                }
        });
        return [req.books, req.movies, req.songs] = [books, movies, songs];
    }
};