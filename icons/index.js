const glob = require('glob');
const path = require('path');
const webfontsGenerator = require('webfonts-generator');

const iconArr = glob.sync(__dirname + '/svg/*.svg');
const destDir = path.join(__dirname, 'dist');

webfontsGenerator({
    files: iconArr,
    html: true,
    types: ['ttf', 'eot', 'woff'],
    dest: destDir,
    css: true,
    cssDest: path.resolve(__dirname, '../src/styles/icon.scss'),
    cssTemplate: path.join(__dirname, 'template.hbs'),
    cssFontsUrl: '../../icons/dist',
    startCodepoint: 0xE000,
    templateOptions: {
        classPrefix: 'i-'
    }
}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Done!');
    }
});