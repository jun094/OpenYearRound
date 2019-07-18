var fs = require('fs'); // file system 호출
fs.readFile('sample.txt','utf8',function(err,data){
  console.log(data);
});
