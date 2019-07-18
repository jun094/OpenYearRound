var express=require('express');
var app = express();

app.get('/p1/r1',function(req,res){
  res.send('hello /p1/r1');
});
app.get('/p1/r2',function(req,res){
  res.send('hello /p1/r2');
});

app.get('/p2/r1',function(req,res){
  res.send('hello /p2/r1');
});
app.get('/p2/r2',function(req,res){
  res.send('hello /p2/r2');
});

app.listen(3003,function(){
  console.log('conneted!');;
});
