const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    type: { type: String, match: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁ ÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/ },
    title: { type: String },
    year : {  type: String },
    link : { type: String },
    details: { type: Map, of: String}
});

/* const BookSchema = mongoose.Schema({
    author: { type: String },
    synopsis: { type: String },
    genre: { type: String},
})

const MovieSchema = mongoose.Schema({
    director: { type: String},
    actors: { type: String },
    synopsis: { type: String },
    genre: { type: String }
})

const SongSchema = mongoose.Schema({
    artist: { type: String },
    genre: { type: String }
}) */
module.exports = mongoose.model('Item', ItemSchema);/* 
module.exports = mongoose.model('Book', BookSchema);
module.exports = mongoose.model('Movie', MovieSchema);
module.exports = mongoose.model('Song', SongSchema); */