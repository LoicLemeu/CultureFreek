const UserMongo = require('./UserMongoDB');
const bcrypt = require('bcryptjs');

module.exports = class User {
    add(email, password){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, function(err, hash){
                return UserMongo.create({
                    email, 
                    password: hash
                });
            })
        })
        
    };
    async emailExists(email){
        return await UserMongo.findOne({email}) ? true : false;
    }
    async connect(email, password){
        let user = await UserMongo.findOne({email});
        if(user !== null){
            if(bcrypt.compareSync(password, user.password)){
                return user;
            }
        }
        return false;
    }
};