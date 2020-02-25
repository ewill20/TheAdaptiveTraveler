const passport = require ('../config/passport/passport.js');

var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/traveler1', authController.traveler1);

app.get('/about', authController.about);

app.get('/contact', authController.contact);

app.get('/signup', authController.signup);

app.get('/berlin', authController.berlin);

app.get('/kyoto', authController.kyoto);

app.get('/hangzhou', authController.hangzhou);

app.get('/paris', authController.paris);

app.get('/popDestinations', authController.popDestinations);

app.get('/SouthAmerica', authController.SouthAmerica);

app.get('/Africa', authController.Africa);

app.get('/Asia', authController.Asia);

app.get('/Australia', authController.Australia);

app.get('/Europe', authController.Europe);

app.get('/NorthAmerica', authController.NorthAmerica);

app.get('/photoLocations', authController.photoLocations);

app.get('/languageSelector', authController.languageSelector);

app.get('/aussieLanding', authController.aussieLanding);

app.get('/chinaLanding', authController.chinaLanding);

app.get('/dutchLanding', authController.dutchLanding);

app.get('/frenchLanding', authController.frenchLanding);

app.get('/germanLanding', authController.germanLanding);

app.get('/irishLanding', authController.irishLanding);

app.get('/japaneseLanding', authController.japaneseLanding);

app.get('/kiwiLanding', authController.kiwiLanding);

app.get('/koreanLanding', authController.koreanLanding);

app.get('/signupAussie', authController.signupAussie);

app.get('/signupChinese', authController.signupChinese);

app.get('/signupDutch', authController.signupDutch);

app.get('/signupFrench', authController.signupFrench);

app.get('/signupGerman', authController.signupGerman);

app.get('/signupIrish', authController.signupIrish);

app.get('/signupJapan', authController.signupJapan);

app.get('/signupKiwi', authController.signupKiwi);

app.get('/signupKorean', authController.signupKorean);

app.post('/traveler1', function(req, res, next) {
    console.log("whatever");
    passport.authenticate('local-signup');
    
});


app.get('/profile',isLoggedIn, authController.profile);


// app.get('/logout',authController.logout);


// app.post('/signin', passport.authenticate('local'),
//     function(req, res) {
//    res.redirect('/profile' + req.user.handle)
// });

    


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}