

var db = require('../models');

module.exports = function(app) {
// Get individual user
    app.get('/api/user/:id', function(req,res, next) {
        var userRet = findById(req.params.id);
            res.render("/profile", {User: User, name: User.name});
        });

        db.User.findOne({
            where: {
                id: req.params.id
            },
                include: [db.User]
            }).then(function(dbUser) {
            res.json(dbUser)
        });
    };
    
    app.post("/api/user", function(req, res) {
        db.User.create(req.body).then(function(dbUser){
            res.json(dbUser);
        });
    });

