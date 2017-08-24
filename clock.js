function clock() {
    process.stdin.on('readable', function() {
        var input = +process.stdin.read();
        
        var h = Math.floor(input / 3600);
        var m = Math.floor(input % 3600 / 60);
        var s = Math.floor(input % 3600 % 60);

        console.log(h + ' godziny ' + m + ' minuty ' + s + ' sekundy');
    });
}
exports.print = clock;