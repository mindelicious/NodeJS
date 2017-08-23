process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input <= 60 && input == 0) {
        console.log('Czas: ' + input + ' sek.');
    } else if (input >= 60){
        console.log('Czas: ' + input / 60 + ' min. ');
    } else if (input >= 3600) {
        console.log
    } else {
        console.log('Wpisz liczbe wieksza od 0');
    }
});