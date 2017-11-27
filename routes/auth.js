var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/signup', authController.signup);


app.get('/signin', authController.signin);


app.post('/signup', passport.authenticate(function(req, res) {
    try {
        res.redirect('/dashboard');
    }
    catch (err) {
        console.log(err)
        res.redirect('/signup')
    }
}));


app.get('/dashboard',isLoggedIn, authController.dashboard);


app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate(function(req, res) { 
    try {
        res.redirect('/dashboard')
    }
    catch (err) {
        console.log(err);
        res.redirect('/signin');
    }
}));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}