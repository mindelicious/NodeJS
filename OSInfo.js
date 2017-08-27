var os = require('os');
var colors = require('colors');
var clock = require('./clock');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.random, type);
    console.log('Release'.america, release);
    console.log('CPU model:'.rainbow, cpu);
    console.log('Uptime: ~'.green, clock.print(uptime));
    console.log('User name:'.gray, userInfo.username);
    console.log('Home dir: '.rainbow, userInfo.homedir);
}
exports.print = getOSinfo;