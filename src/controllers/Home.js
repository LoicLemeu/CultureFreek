const Item = require('../models/Item');

module.exports = class Home {
    print(req, res){
        let item = new Item();
        item.baseQuery()
            .then(result => {
                req.items = this.transformData(result);
            })
            .then(() => {
                res.render('home', {
                    items: req.items
                })
            })
    }

    process(req, res){
        let item = new Item();
        item.textQuery(req.body.siteSearch)
            .then(result => {
                req.items = this.transformData(result);
            })
            .then(() => {
                res.render('home', {
                    items: req.items
                })
            })
    }

    transformData(data){
        let resultTable = [];
            for(let item of data){
                let details = Object.fromEntries(item.details);
                resultTable.push({title: item.title, year: item.year, details, link: item.link});
            }
            return resultTable;
    }
};