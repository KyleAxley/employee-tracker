//import for cfonts
const cfonts = require('cfonts');
// alternative fotns console, block, simpleBlock, simple, 3d, simple3d, chrome(using), huge, shade, slick, grid, pallet, tiny
cfonts.say('Employee|Tracker', {
    font: 'chrome',
    align: 'center',
    colors: ['red', 'white', 'blue'],
    background: 'transparent',
    letterSpacing: 5,
    letterHeight: 20,
    space: true,
    maxLength: '10',
    gradient: false,
    independetGradient: false,
    transitionGradient: false,
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

