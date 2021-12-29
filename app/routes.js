const UserRegister = require('../src/controllers/UserRegister');
const Authentification = require('../src/controllers/Authentification');
const AdminItem = require('../src/controllers/AdminItem')

module.exports = (app) => {
    app.get('/', (req, res) => {
        let Home = require('../src/controllers/Home');
        let Controller = new Home();
        Controller.print(req, res);
    });
    app.get('/inscription', (req, res) => {
        let Controller = new UserRegister();
        Controller.print(req, res);
    })
    app.post('/inscription', (req, res) => {
        let Controller = new UserRegister();
        Controller.process(req, res);
    });
    app.get('/connexion', (req, res) => {
        let Controller = new Authentification();
        Controller.print(req, res);
    })
    app.post('/connexion', (req, res) => {
        let Controller = new Authentification();
        Controller.process(req, res);
    })
    app.get('/deconnexion', (req, res) => {
        let Controller = new Authentification();
        Controller.disconnect(req, res);
    })
    app.get('/admin/add', (req, res) => {
        let Controller = new AdminItem();
        Controller.print(req, res);
    })
    app.post('/admin/add', (req, res) => {
        let Controller = new AdminItem();
        Controller.process(req, res);
    })
};