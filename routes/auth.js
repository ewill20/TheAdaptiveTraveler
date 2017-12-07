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

app.post('/landing', passport.authenticate(function(req, res) {
    try {
        res.redirect('/profile');
    }
    catch (err) {
        console.log(err)
        res.redirect('/signup')
    }
}));


app.get('/profile',isLoggedIn, authController.profile);


// app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('local'),
    function(req, res) {
   res.redirect('/profile' + req.user.handle)
});

    


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}