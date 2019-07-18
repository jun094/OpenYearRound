var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

var products = { // 객체 만들기 --> 원래는 이 부분이 DB가 들어가야 함
  1: {title : '상품 A'},
  2: {title : '상품 B'}
};

// product 페이지
app.get('/products',function(req,res){
  var output = '';

  for(var name in products){

    output += `
      <li>
        <a href="/cart/${name}">${products[name].title}</a>
      </li>`;
  }
  res.send(`
    <h1>쇼핑몰</h1>
    <ul>${output}</ul>
    <a href="/cart">Cart로 이동</a>`); // html 내용
});

// cart 페이지 (id값을 파라미터로 받고싶을때 : 사용)
/*
  cart = {
      제품명 : 갯수
  }
*/
app.get('/cart/:id', function(req,res){
  var id = req.params.id; // 파라미터 받아서 출력하기

  if(req.cookies.cart){ // req.cookies.cart가 true일때 = 값이 세팅되어 있다면
    var cart = req.cookies.cart;
  }
  else { // 값이 없다면 = 최초 실행됬을떄
    var cart = {};
  }

  if(!cart[id]) // cart[id] 값이 존재하지 않는다면
  {
    cart[id] = 0;
  }
  cart[id] = parseInt(cart[id])+1;

  res.cookie('cart',cart);
  //res.send(cart);
  res.redirect('/cart')
});
app.get('/cart',function(req,res){
  var cart = req.cookies.cart;
  if(!cart){
    res.send('empty!');
  }
  else{
    var output = '';
    for(var id in cart){
      output += `<li>${products[id].title} (${cart[id]})</li>`;
    }
  }
  res.send(`
            <h1>Cart</h1>
            <ul>${output}</ul>
            <a href="/products">product list</a>`);
});

app.get('/count', function(req,res){

  if(req.cookies.count) // req.cookies.count 값이 있다면
  {
    var count = parseInt(req.cookies.count);
  }
  else // 값이 없다면 = 최초 실행됬을떄
  {
    var count = 0;
  }
  count = count+1;
  res.cookie('count', count);
  res.send('count : ' + count);
});
app.listen(3003,function(){
  console.log('connected!');
});
