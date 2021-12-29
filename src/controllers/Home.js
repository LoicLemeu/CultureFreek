const Item = require('../models/Item');

module.exports = class Home {
    print(req, res){
        let item = new Item();
        item.baseQuery()
            .then(result => {
                let resultTable = [];
                for(let item of result){
                    let details = Object.fromEntries(item.details);
                    resultTable.push({title: item.title, year: item.year, details, link: item.link});
                }
                req.items = resultTable;
            })
            .then(() => {
                res.render('home', {
                    items: req.items
                })
            })
    }
};