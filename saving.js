var fs = require('fs');

fs.readdir('/.text/', function() {
    fs.readFile('./text/readText.txt', 'utf-8', function(err, data) {
        if(err) {
            console.log(err);
        }else{
        console.log(data);
    }
    fs.writeFileSync('./text/writeText.txt', data);
    });
}); 