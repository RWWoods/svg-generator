const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const maxLengthInput = require('inquirer-maxlength-input-prompt')



const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What three letters would you like to use?',
            maxLength: 3,
        },
        {
            type: 'input',
            message: 'What text color would you like?',
            name: 'txtcolor',
        },
        {
            type: 'input',
            message: 'What color is your shape?',
            name: 'shapecolor',
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'shape',
            choices: ['circle', 'square', 'triangle'],
        },
        
    ])
    .then((response) => {


        generateSvg("logo.svg", response) 

    });

function generateSvg(fileName, data) {
    const logo = generateLogo(data)
    fs.writeFile(fileName, logo, (err) => err ? console.error(err) : console.log("logo generated"))
}

function generateLogo(data) {
    return `${data.text} ${data.shape} ${data.txtcolor} ${data.shape}`
    
}