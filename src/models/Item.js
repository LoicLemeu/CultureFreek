const ItemMongo = require('./ItemMongoDB');

module.exports = class Item {
    add(type, title, year, link, details){
        return ItemMongo.create({
            type,
            title,
            year,
            link,
            details
        })
    }

    baseQuery(){
        return new Promise((resolve, reject) => {
            ItemMongo.find((err, docs) => {
                if(!err){
                    resolve(docs);
                }
                reject(err)
            })
        })
    }

    textQuery(text){
        return new Promise((resolve, reject) => {
            ItemMongo.find({$text: {$search: text}}).exec((err, docs) => {
                if(!err){
                    resolve(docs);
                }
                reject(err);
            })
        })
    }
}