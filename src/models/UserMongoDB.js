const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    email : {  type: String },
    password : { type: String },
    isAdmin: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema); 