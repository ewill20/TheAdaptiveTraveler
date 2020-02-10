
var exports = module.exports = {}

exports.main = function (req,res) {

  res.render('main');  
}
exports.traveler1 = function(req,res){

	res.render('traveler1'); 
}
// exports.landing = function(req,res){

// 	res.render('landing'); 
// }
exports.about = function(req,res) {

  res.render('about');
}
exports.berlin = function(req,res) {

  res.render('berlin');
}
exports.popDestinations = function(req, res) {

  res.render('popDestinations');  
}
exports.kyoto = function(req, res) {

  res.render('kyoto');
}
exports.paris = function(req, res) {

  res.render('paris');
}
exports.hangzhou = function(req, res) {
  
  res.render('hangzhou');
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
exports.SouthAmerica = function(req,res){

	res.render('SouthAmerica'); 
}
exports.Africa = function(req,res){

	res.render('Africa'); 
}
exports.Asia = function(req,res){

	res.render('Asia'); 
}
exports.Europe = function(req,res){

	res.render('Europe'); 
}
exports.NorthAmerica = function(req,res){

	res.render('NorthAmerica'); 
}
exports.photoLocations = function(req,res){

	res.render('photoLocations'); 
}
exports.Australia = function(req,res){

	res.render('Australia'); 
}
exports.languageSelector = function(req,res){

	res.render('languageSelector'); 
}
exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/traveler1');
  });

}