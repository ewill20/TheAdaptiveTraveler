var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/landing', authcontroller.landing);

app.get('/about', authcontroller.about);

app.get('/contact', authcontroller.contact);

app.get('/signup', authController.signup);

app.get('/signin', authController.signin);

app.post('/signup', passport.authenticate(function(req, res) {
    try {
        res.redirect('/profile');
    }
    catch (err) {
        console.log(err)
        res.redirect('/signup')
    }
}));


app.get('/profile',isLoggedIn, authController.profile);


app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate(function(req, res) { 
    try {
        res.redirect('/profile')
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