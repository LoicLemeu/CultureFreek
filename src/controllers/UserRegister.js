const req = require('express/lib/request');
const UserModel = require('../models/User');

module.exports = class UserRegister {
    print(request, response){
        response.render('user/form_register');
    };
    process(request, response){
        let User = new UserModel();
        User.emailExists(request.body.email).then((result) => {
            if(result === false){
                User.add(
                    request.body.lastname,
                    request.body.firstname,
                    request.body.email,
                    request.body.password
                )
                request.flash('notify', 'Votre compte a bien été créé.');
                response.redirect('/')
            }
            else {
                response.render('user/form_register', {
                    error: 'Cette adresse est déjà utilisée !',
                    lastname :  request.body.lastname,
                    firstname : request.body.firstname,
                    email : request.body.email
                })
            }
        })
        
        
    }
}