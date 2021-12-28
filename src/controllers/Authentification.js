const UserModel = require('../models/User');

module.exports = class Authentification {
    print(request, response){
        response.render('user/form_auth');
    }
    process(request, response){
        let User = new UserModel();
        User.connect(request.body.email, request.body.password).then(result => {
            if(result == false){
                response.render('user/form_auth', {
                    error: `L'identification a échouée`,
                    email: request.body.email
                })
            }
            else {
                request.session.user = {
                    connected: true,
                    id: result._id,
                    email: result.email,
                    isAdmin: result.isAdmin,
                    lastname: result.lastname,
                    firstname: result.firstname
                }
                request.flash('notify', 'Vous êtes maintenant connecté.');
                response.redirect('/');
            }
        })
    }
    disconnect(request, response){
        delete request.session.user;
        request.flash('notify', 'Vous êtes maintenant déconnecté.');
        response.redirect('/');
    }
}