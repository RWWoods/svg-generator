const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const maxLengthInput = require('inquirer-maxlength-input-prompt')
const generateLogo = require('./shapes.js')


function init() {
    const questions = [];
    inquirer.registerPrompt('maxlength-input', maxLengthInput);
    inquirer
        .prompt([
            {
                type: 'maxlength-input',
                name: 'text',
                message: 'What three letters would you like to use?',
                maxLength: 3,
            },
            {
                type: 'input',
                message: 'What text color would you like?',
                name: 'textcolor',
            },
            {
                type: 'list',
                message: 'Which of the following shapes would your like to use?',
                name: 'shape',
                choices: ['circle', 'square', 'triangle'],
            },
            {
                type: 'input',
                message: 'What color is your shape?',
                name: 'shapecolor',
            },


        ])
        .then((response) => {


            generateSvg("logo.svg", response)

        });

    function generateSvg(fileName, data) {
        console.log(data);
        const logo = generateLogo(data);
        fs.writeFile(fileName, logo.render(), (err) => err ? console.error(err) : console.log("logo generated"))
    }
}


init();
