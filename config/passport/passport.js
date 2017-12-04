
  //load bcrypt
  var bCrypt = require('bcrypt-nodejs');

  module.exports = function(passport,user){

  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function(user, done) {
          done(null, user.id);
      });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user) {
        if(user){
          done(null, user.get());
        }
        else{
          done(user.errors,null);
        }
      });

  });


  passport.use('local-signup', new LocalStrategy(

    {           
      usernameField : 'handle',
      passwordField : 'psw',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, handle, psw, done){
       

      var generateHash = function(psw) {
      return bCrypt.hashSync(psw, bCrypt.genSaltSync(8), null);
      };

       User.findOne({where: {handle:handle}}).then(function(user){

      if(user)
      {
        return done(null, false, {message : 'That handle is already taken'} );
      }

      else
      {
        var userPassword = generateHash(psw);
        var data =
        { handle:handle,
        password:userPassword,
        firstname: req.body.name
        
        };


        User.create(data).then(function(newUser,created){
          if(!newUser){
            return done(null,false);
          }

          if(newUser){
            return done(null,newUser);
            
          }


        });
      }


    }); 



  }



  ));
    
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    
  {

  // by default, local strategy uses username and password, we will override with email
  usernameField : 'handle',
  passwordField : 'psw',
  passReqToCallback : true // allows us to pass back the entire request to the callback
  },

  function(req, handle, psw, done) {

    var User = user;

    var isValidPassword = function(userpass,psw){
      return bCrypt.compareSync(psw, userpass);
    }

    User.findOne({ where : { handle:handle}}).then(function (user) {

      if (!user) {
        return done(null, false, { message: 'Handle does not exist' });
      }

      if (!isValidPassword(user.psw,psw)) {

        return done(null, false, { message: 'Incorrect password.' });

      }

      var userinfo = user.get();

      return done(null,userinfo);

    }).catch(function(err){

      console.log("Error:",err);

      return done(null, false, { message: 'Something went wrong with your Signin' });


    });

  }
  ));

  }

