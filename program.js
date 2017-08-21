process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case 'process.env':
                console.log('Name: ' + process.env.LOGNAME);
                console.log('Node v: ' + process.version);
                if (process.platform == 'darwin') {
                    console.log('This is OS platform');
                } else if (process.platform == 'linux') {
                    console.log('This is Linux platform');
                } else if (process.platform == 'win32' || process.platform == 'win64') {
                    console.log('This is Windows bro');
                }
                break;
            default:
            process.stderr.write('Wrong instruction bro!');
        };
    }
});
