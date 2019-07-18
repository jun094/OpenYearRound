var http = require('http');
var fs = require('fs');
var url = require('url'); // 쿼리스트링을 가져오기 위해 url모듈 사용

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // querystring을 가져옴!

  console.log(queryData);
  console.log(queryData.id);

  if(_url=='/'){
    _url = '/index.html';
  }
  if(_url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  //response.end(fs.readFileSync(__dirname+_url));
  response.end(queryData.id);
});

app.listen(3000);
