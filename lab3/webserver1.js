var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    console.log('Request Received!');
    res.writeHead(200, {'Content-Type' : 'image/jpeg'});
    var image = fs.readFileSync(__dirname + '/north_middle.png');
    res.end(image);

}).listen(9090, '127.0.0.1');

