// Load dotenv
require('dotenv').config();


// Module Dependencies
// ===========================
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const logger = require('morgan');
const flash = require('express-flash');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const favicon = require('serve-favicon');
const connectAssets = require('connect-assets');
const methodOverride = require('method-override');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const csrf = require('csurf');


// Controllers
// ===========================
const homeController = require('./controllers/home');

// Models
// ===========================
const User = require('./models/User');

// Create Express App
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/database');
mongoose.connection.on('error', function() {
  console.error('MongoDB connection error. Please make sure MongoDB is running.');
});

// Express Config / Middleware
// ===========================
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(connectAssets({
  paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')]
}));
app.use(logger('dev'));
// Uncomment once you add Favicon 
// app.use(favicon(path.join(__dirname, 'public/favicon.png'))); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SECRET
}));
app.use(flash());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));

// Passport Config
// ===========================
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Passport middleware for sending user to templates/views
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// Call App routes
// ===========================
homeController(app);


// Error Handler
app.use(errorHandler());

// Start Express Server
app.listen(3000, function() {
  console.log('Server is running on port 3000!');
});

module.exports = app;