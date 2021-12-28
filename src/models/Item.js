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
}