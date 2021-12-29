const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    type: { type: String, match: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁ ÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/ },
    title: { type: String },
    year : {  type: String },
    link : { type: String },
    details: { type: Map, of: String}
});
ItemSchema.index({'$**': 'text'});

module.exports = mongoose.model('Item', ItemSchema);