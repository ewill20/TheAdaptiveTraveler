const passport = require ('../config/passport/passport.js');

var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/landing', authController.landing);

app.get('/about', authController.about);

app.get('/contact', authController.contact);

app.get('/signup', authController.signup);

app.get('/signin', authController.signin);

app.get('/berlin', authController.berlin);

app.get('/kyoto', authController.kyoto);

app.get('/hangzhou', authController.hangzhou);

app.get('/paris', authController.paris);

app.get('/popDestinations', authController.popDestinations);


app.post('/landing', function(req, res, next) {
    console.log("whatever");
    passport.authenticate('local-signup');
});


app.get('/profile',isLoggedIn, authController.profile);
 

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}