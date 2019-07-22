var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query; // ?뒤에 있는 queryString
  var pathname = url.parse(_url, true).pathname; // /뒤에 있는 path 주소


  if (pathname === '/') {
    if (queryData.id === undefined) { // ?뒤에 아무것도 없을 때 구현
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        var title = 'Welcome';
        var description = ' Hellow 메인 페이지 입니다. '
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
          <p>${description}</p>
        </body>
        </html>
        `;
        response.writeHead(200); // 200 : 파일을 성공적으로 찾음
        response.end(template);
      });
    }
    else{
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        var title = queryData.id;
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
            <p>${description}</p>
          </body>
          </html>
          `;
        response.writeHead(200); // 200 : 파일을 성공적으로 찾음
        response.end(template);
      });
    }
  }
  else {
    response.writeHead(404); // 404 : 파일을 찾지 못함
    response.end('Not found!!!!!!!!!!!!!!!!!');
  }



});
app.listen(3000);
