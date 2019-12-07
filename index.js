var Koa = require('koa');


var app = new Koa();
const cors = require('@koa/cors');
const passport = require('koa-passport');

//import all the routes
var admin = require('./routes/admin.js');
var users = require('./routes/users.js');
var login = require('./routes/login.js');
var main = require('./routes/main.js');
var comments = require('./routes/comments.js');

//apply the routes as a middleware
app.use(cors());
app.use(admin.routes());
app.use(users.routes());
app.use(login.routes());
app.use(main.routes());
app.use(comments.routes());

//this import will run the code in the auth.js
require('./auth');
app.use(passport.initialize());


var port = process.env.PORT || 3000;
app.listen(port);
