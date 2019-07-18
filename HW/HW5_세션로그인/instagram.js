var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret: '123asdlkvji$9213408',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname+'/public'));

app.listen(3003,function(){
  console.log('connected!');
});
