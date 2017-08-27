var fs = require('fs');

var fs = require('fs');

fs.readdir('./text', function(err, data) {
    fs.writeFileSync('./text/writeText.txt', data.join(', '));
}); 