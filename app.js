//httpモジュールをインポート
var http = require('http');
 
//Webサーバーの設定
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(4000);
 
console.log('Server running at http://localhost:4000/');