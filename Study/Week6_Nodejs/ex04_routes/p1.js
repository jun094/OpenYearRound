// main에서 준 app을 인자로 받음
module.exports = function(app){
  var express=require('express');
  var route = express.Router();
  route.get('/r1',function(req,res){
    res.send('hello /p1/r1');
  });
  route.get('/r2',function(req,res){
    res.send('hello /p1/r2');
  });

  //이렇게 하면 app객체를 여기서도 사용이 가능!
  app.get('/p3/r1',function(req,res){
    res.send('hello /p3/r1');
  });
  return route;
};
