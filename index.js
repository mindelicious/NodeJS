var http = require('http'),
    fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    if(request.url === '/' && request.method === 'GET') {
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    } else {
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});
server.listen(8050);