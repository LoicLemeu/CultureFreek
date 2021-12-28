const express = require('express');
const app = express();
const path = require('path');
const config = require('./app/config');

// Middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({encoded: false}));

const session = require('express-session');
app.use(session({
    secret: config.appKey, resave: false, saveUninitialized: false,
    cookie: {maxAge: 3600000}
}))
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

const flash = require('express-flash-messages');
app.use(flash());

// Moteur de template
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

// Répertoire Static
app.use(express.static(path.join(__dirname, 'public')));

// Routes
require('./app/routes')(app);

// Ecoute du serveur
app.listen(config.port, () => {
    console.log(`Le serveur est up ! http://localhost:${config.port}`);
})

// Connexion à la DB
const mongoose = require('mongoose');
mongoose.connect(
    config.mongodb,
    {connectTimeoutMS : 3000, socketTimeoutMS : 20000, useNewUrlParser : true, useUnifiedTopology : true}
)
mongoose.connection.once('open', () => {
    console.log('Connexion au serveur MongoDB OK')
})