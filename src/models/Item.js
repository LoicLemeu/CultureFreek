const ItemMongo = require('./ItemMongoDB');

module.exports = class Item {
    add(type, title, year, link){
        return ItemMongo.create({
            type,
            title,
            year,
            link
        })
    }
}