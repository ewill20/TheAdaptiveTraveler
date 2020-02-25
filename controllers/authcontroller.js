
var exports = module.exports = {}

exports.main = function (req,res) {

  res.render('main');  
}
exports.traveler1 = function(req,res){

	res.render('traveler1'); 
}
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
exports.signup = function(req,res){
  
    res.render('signup'); 
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
exports.aussieLanding = function(req,res){

	res.render('aussieLanding'); 
}
exports.chinaLanding = function(req,res){

	res.render('chinaLanding'); 
}
exports.dutchLanding = function(req,res){

	res.render('dutchLanding'); 
}
exports.frenchLanding = function(req,res){

	res.render('frenchLanding'); 
}
exports.germanLanding = function(req,res){

	res.render('germanLanding'); 
}
exports.irishLanding = function(req,res){

	res.render('irishLanding'); 
}
exports.italyLanding = function(req,res){

	res.render('italyLanding'); 
}
exports.japaneseLanding = function(req,res){

	res.render('japaneseLanding'); 
}
exports.kiwiLanding = function(req,res){

	res.render('kiwiLanding'); 
}
exports.koreanLanding = function(req,res){

	res.render('koreanLanding'); 
}
exports.mexicoLanding = function(req,res){

	res.render('mexicoLanding'); 
}
exports.mongoliaLanding = function(req,res){

	res.render('mongoliaLanding'); 
}
exports.philippinesLanding = function(req,res){

	res.render('philippinesLanding'); 
}
exports.polandLanding = function(req,res){

	res.render('polandLanding'); 
}
exports.russiaLanding = function(req,res){

	res.render('russiaLanding'); 
}
exports.scotlandLanding = function(req,res){

	res.render('scotlandLanding'); 
}
exports.southafricaLanding = function(req,res){

	res.render('southafricaLanding'); 
}
exports.spainLanding = function(req,res){

	res.render('spainLanding'); 
}
exports.swedenLanding = function(req,res){

	res.render('swedenLanding'); 
}
exports.thailandLanding = function(req,res){

	res.render('thailandLanding'); 
}
exports.ukraineLanding = function(req,res){

	res.render('ukraineLanding'); 
}




exports.signupAussie = function(req,res){

	res.render('signupAussie'); 
}
exports.signupChinese = function(req,res){

	res.render('signupChinese'); 
}
exports.signupDutch = function(req,res){

	res.render('signupDutch'); 
}
exports.signupFrench = function(req,res){

	res.render('signupFrench'); 
}
exports.signupGerman = function(req,res){

	res.render('signupGerman'); 
}
exports.signupIrish = function(req,res){

	res.render('signupIrish'); 
}
exports.signupItaly = function(req,res){

	res.render('signupItaly'); 
}
exports.signupJapan = function(req,res){

	res.render('signupJapan'); 
}
exports.signupKiwi = function(req,res){

	res.render('signupKiwi'); 
}
exports.signupKorean = function(req,res){

	res.render('signupKorean'); 
}
exports.signupMexico = function(req,res){

	res.render('signupMexico'); 
}
exports.signupMongolia = function(req,res){

	res.render('signupMongolia'); 
}
exports.signupPhilippines = function(req,res){

	res.render('signupPhilippines'); 
}
exports.signupPoland = function(req,res){

	res.render('signupPoland'); 
}
exports.signupRussia = function(req,res){

	res.render('signupRussia'); 
}
exports.signupScotland = function(req,res){

	res.render('signupScotland'); 
}
exports.signupSAfrica = function(req,res){

	res.render('signupSAfrica'); 
}
exports.signupSpain = function(req,res){

	res.render('signupSpain'); 
}
exports.signupSweden = function(req,res){

	res.render('signupSweden'); 
}
exports.signupThailand = function(req,res){

	res.render('signupThailand'); 
}
exports.signupUkraine = function(req,res){

	res.render('signupUkraine'); 
}



exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/traveler1');
  });

}