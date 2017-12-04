

var db = require('../models');

module.exports = function(app) {

    app.get('/api/user/:handle', function(req,res) {
        var query = {};
        if (req.query.User_id) {
            query.UserId = req.query.User_handle;
        }

        db.User.findOne({
            where: {
                handle: req.params.handle
            },
                include: [db.User]
            }).then(function(dbUser) {
            res.json(dbUser)
        })
    })
}