

var db = require('../models');

module.exports = function(app) {

    app.get('/api/user/:id', function(req,res) {
        var query = {};
        if (req.query.id) {
            query.UserId = req.query.id;
        }

        db.User.findOne({
            where: {
                id: req.params.id
            },
                include: [db.User]
            }).then(function(dbUser) {
            res.json(dbUser)
        })
    })
}