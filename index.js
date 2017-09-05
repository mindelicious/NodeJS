var http = require('http'),
    fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response) {    
    if(request.url === '/' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else {
        fs.readFile('./404.jpeg', function(err, data) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.end(data);
        });        
    }
});
server.listen(8050);