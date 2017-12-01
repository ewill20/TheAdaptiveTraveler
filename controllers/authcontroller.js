
var exports = module.exports = {}

exports.main = function (req,res) {

  res.render('main');
  
}
exports.landing = function(req,res){

	res.render('landing'); 

}
exports.about = function(req,res) {

  res.render('about');

}
exports.contact = function(req,res) {

  res.render('contact');

}
exports.signup = function(req,res){
  
    res.render('signup'); 
  
}
exports.signin = function(req,res){

	res.render('signin'); 

}

exports.profile = function(req,res){

	res.render('profile'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/landing');
  });

}