var express = require('express');
var setRoutes = require('./setRoutes');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var cookieParser = require('cookie-parser')

var app = express();

const verifyUser = require('./security');

//this is global variable
secretABCKey = crypto.randomBytes(128).toString('base64');

//localhost
mongoose.connect('mongodb://localhost/testdb');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());

app.use(express.static('static'));

setRoutes(app, __dirname + '/api', true, secretABCKey, verifyUser);
setRoutes(app, __dirname + '/controllers', false, secretABCKey, verifyUser);

//all requests to back-end SPA ==> just return user/index.html
app.all('/user/*', function (req, res, next) {
  //console.log('url: ' + req.url + ' path: ' + req.path);
  res.sendFile('static/user/index.html', { root: __dirname });
});

//all unmatch url must  be redirected to home
app.all('*', function (req, res) {
  res.redirect('/');
});

//capture all err
app.use(function (err, req, res, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.sendStatus(400);
  }
});

// connect to Mongodb
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongodb is connected successfully');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongodb connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongodb connection is disconnected'); 
});

//mongolab
//mongoose.connect('mongodb://thapgan:thepmoi@ds049180.mongolab.com:49180/mgdbtest');

//init admin user
const User = require('./model/user');
const Frontend = require('./model/frontend');
const Role = require('./model/role');
User.findOne({ 'username': 'appAdmin' }, function (err, user) {
  if (!user) {
    var f_ids = []
    Frontend({
      title: 'Frontend Management',
      url: 'hub.frontends',
      description: 'Manage list of front-end funcs',
      activated: true,
      author: 'Hoang Nguyen'
    }).save(function (err, f) {
      f_ids.push(f._id);
      Frontend({
        title: 'Backend Management',
        url: 'hub.backends',
        description: 'Manage list of back-end funcs',
        activated: true,
        author: 'Hoang Nguyen'
      }).save(function (err, f) {
        f_ids.push(f._id);
        Frontend({
          title: 'Role Management',
          url: 'hub.roles',
          description: 'Manage list of role',
          activated: true,
          author: 'Hoang Nguyen'
        }).save(function (err, f) {
          f_ids.push(f._id);
          Frontend({
            title: 'User Management',
            url: 'hub.users',
            description: 'Manage list of user',
            activated: true,
            author: 'Hoang Nguyen'
          }).save(function (err, f) {
            f_ids.push(f._id);
            Role({ title: 'Administrator', description: 'Quản trị hệ thống', activated: true, frontends: f_ids }).save(function (err, r) {
              const salt = crypto.randomBytes(128).toString('base64');
              const hashedPassword = crypto.createHmac('sha256', salt).update('admin123').digest('hex');
              var admin = {
                username: 'appAdmin',
                hashedPass: hashedPassword,
                fullname: 'Hoang Nguyen',
                salt: salt,
                active: true
              }
              admin.roles = [];
              admin.roles.push(r._id);
              User(admin).save(function (err, user) {
                console.log(user);
                console.log('admin is created.');
              });
            });
          });
        });
      });
    });
  }
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});