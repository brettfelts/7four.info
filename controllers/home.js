const middleware = require('../middleware');
const passport = require('passport');
const User = require('../models/User');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

module.exports = function(app) {
  
  // GET Index page
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Home'
    });
  });
  
  // GET register form
  app.get('/register', csrfProtection, function(req, res) {
    res.render('register', {
      title: 'Register',
      csrfToken: req.csrfToken()
    });
  });
  
  // POST register form
  app.post('/register', csrfProtection, function(req, res) {
    const user = new User({
      username: req.body.username,
      email: req.body.email
    });
    
    User.register(user, req.body.password, function(err, user) {
      if(err) {
        console.log(err);
        return res.render('register');
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      })
    });
  });
  
  // GET login form
  app.get('/login', csrfProtection, function(req, res) {
    res.render('login', {
      title: 'Login',
      csrfToken: req.csrfToken()
    });
  });
  
  // POST login form
  app.post('/login', csrfProtection, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), function(req, res) {
  });
  
  // Logout
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  
 };
