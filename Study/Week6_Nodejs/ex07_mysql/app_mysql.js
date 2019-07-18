var express = require('express');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret: '1234DSFs@adf1234!@#$asd',
  resave: false,
  saveUninitialized: true,
  store:new MySQLStore({
    host:'localhost',
    port:3306,
    user:'root',
    password:'0000',
    database:'mydb'
  })
}));

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'mydb'
});
db.connect();


//로그 아웃 페이지 구현
app.get('/auth/logout', function(req,res){
  delete req.session.displayName;
  req.session.save(function(){
    res.redirect('/welcome');
  });
});

//welcom 페이지 구현
app.get('/welcome', function(req,res){
  if(req.session.displayName){
    res.send(`<h1>로그인 성공, ${req.session.displayName} 님</h1>
               <a href="/auth/logout">logout페이지로 이동</a>`);
  }
  else{ // 로그인이 안되어있는 사용자
    res.send(`<h1>welcome</h1>
              <a href="/auth/login">login페이지로 이동</a>`);
  }
});

//form태그 구현
app.post('/auth/login', function(req,res){
  db.query(`INSERT INTO login VALUES (id,pw)`, function(error,topics`);
  var uname = req.body.username;
  var pwd = req.body.password;

  if(uname===user.username && pwd === user.password){ // 아이디랑 비밀번호 일치했을때
      //res.send('로그인 성공 ! [' + uname + "," + pwd +']');
      req.session.displayName = user.displayName;
      req.session.save(function(){
        res.redirect('/welcome'); // 여기에 instagram 다음페이지를 넣어주면 됨
      });
  }
  else{
    res.send('로그인 실패 ! <a href="/auth/login">login페이지로 이동</a>');
  }
})

app.get('/auth/login',function(req,res){
  var output = `<form action="/auth/login" method="post">
                  <div id="input-css">
                    <input id="userid" type="text" placeholder="  사용자 아이디" /><br>
                  </div>
                  <div id="input-css">
                    <input id="pw" name="password" type="password" placeholder="  비밀번호" /><br>
                  </div>

                  <input  id="login-button" type="submit" value="가입" onclick="login()"> </input>
               </form>`;
  res.send(output);
})
app.listen(3003,function(){
  console.log('connected!');
});
