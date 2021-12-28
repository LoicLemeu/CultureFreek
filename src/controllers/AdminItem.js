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
        Item.add(
            request.body.type,
            request.body.title,
            request.body.year,
            request.body.downloadLink
        )
        request.flash('notify', 'Oeuvre ajouté avec succès !');
        response.redirect('/admin/add')
    }
}