function clock(input) {
    var h = Math.floor(input / 3600);
    var m = Math.floor(input % 3600 / 60);
    var s = Math.floor(input % 3600 % 60);

    return h + ' godziny ' + m + ' minuty ' + s + ' sekundy';
}
exports.print = clock;