const ItemModel = require('../models/Item');

module.exports = class AdminItem {
    print(request, response){
        if(this.authAdmin(request, response)){
            response.render('admin/items');
        } 
    }
    authAdmin(request, response){
        if(typeof request.session.user == "undefined" || request.session.user.isAdmin !== true){
            response.status(401);
            response.end('HTTP 401 Unauthorized');
            return false;
        }
        return true;
    }
    process(request, response){
        let Item = new ItemModel();
        let details;
        switch (request.body.type) {
            case 'book' :
                console.log('case book')
                details = new Map([
                    ['author', request.body.author],
                    ['synopsis', request.body.bookSynopsis],
                    ['genre', request.body.bookGenre]
                ])
                break;
            case 'movie' :
                console.log('case movie')
                details = new Map([
                    ['director', request.body.director],
                    ['actors', request.body.actors],
                    ['synopsis', request.body.movieSynopsis],
                    ['genre', request.body.movieGenre]
                ]);
                break;
            case 'song' :
                console.log('case song')
                details = new Map([
                    ['artist', request.body.artist],
                    ['genre', request.body.songGenre]
                ]);
                break;
        }
        Item.add(
            request.body.type,
            request.body.title,
            request.body.year,
            request.body.downloadLink,
            details
            
        )
        request.flash('notify', 'Oeuvre ajouté avec succès !');
        response.redirect('/admin/add')
    }
}