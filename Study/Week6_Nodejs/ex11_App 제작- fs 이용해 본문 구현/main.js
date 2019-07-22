var http = require('http');
var fs = require('fs');
var url = require('url'); // 쿼리스트링을 가져오기 위해 url모듈 사용

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // querystring을 가져옴!
  var title = queryData.id;

  if(_url=='/'){
    title = 'Welcome';
  }
  if(_url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);

   // 파일을 읽어줌 !!
  fs.readFile(`data/${queryData.id}`,'utf8',function(err,desc){

    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${desc}</p>
    </body>
    </html>
    `;
    response.end(template);
  })
});

app.listen(3000);
