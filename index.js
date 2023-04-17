const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const maxLengthInput = require('inquirer-maxlength-input-prompt')
const shapes = require('./lib/shapes');



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
    const logo = generateLogo(data)
    fs.writeFile(fileName, logo, (err) => err ? console.error(err) : console.log("logo generated"))
}

function generateLogo(data) {
    if (data.shape === 'circle') {
        let drawShape = new circle(data.text, data.textcolor, data.shape, data.shapecolor)
        drawShape = drawShape.render()
        
    } else if (data.shape === 'triangle') {
        let drawShape = new triangle(data.text, data.textcolor, data.shape, data.shapecolor)
        drawShape = drawShape.render()
    } else if (data.shape === 'square') {
        let drawShape = new square(data.text, data.textcolor, data.shape, data.shapecolor)
        drawShape = drawShape.render()
    }
    return drawShape;
}