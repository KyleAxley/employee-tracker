//import for cfonts
const cfonts = require('cfonts');
// alternative fotns console, block, simpleBlock, simple, 3d, simple3d, chrome(using), huge, shade, slick, grid, pallet, tiny
cfonts.say('Employee|Tracker', {
    font: 'chrome',
    align: 'center',
    colors: ['red', 'blue'],
    background: 'black',
    letterSpacing: 6,
    letterHeight: 1,
    space: false,
    maxLength: '0',
    gradient: false,
    independetGradient: true,
    transitionGradient: true,
    env: 'node'
});

module.exports = cfonts;


//import for figlet... *alternative text font: 'ANSI Shadow', 'CyberLarge'(using), 'Slant'
// const figlet = require('figlet');


// figlet.text('Employee Tracker', {
//     font: 'Cyberlarge',
//     horizontalLayout: 'fitted',
//     verticalLayout: 'fitted',
//     width: 80,
//     whitespaceBreak: true
// }, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

// figlet('Employee Tracker', function(err, data) {
//     if(err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });
// module.exports = figlet;

