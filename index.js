var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var pug = require('pug');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var session = require('express-session');

var user = require('./models/User');
var gab = require('./models/Gabs');

var app = express();

var db = mongoose.connect('mongodb://localhost:27017/gabble', { useMongoClient: true });

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret', saveUninitialized: true, resave: true }));
