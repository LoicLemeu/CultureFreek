const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://loiclem:V6CVM1LcJd9ZdOPE@cluster0.yp9qc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {connectTimeoutMS : 3000, socketTimeoutMS : 20000, useNewUrlParser : true, useUnifiedTopology : true}
);
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connexion database OK !')
})