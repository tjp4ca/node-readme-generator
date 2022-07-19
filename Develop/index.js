const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');



// console.log('file working');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions? (Press enter to skip)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage? (Press enter to skip)'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info? (Press enter to skip)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your project GitHub link!');
              return false;
            }
          }
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.writeFile('README.md', data, err =>
    err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(answers => {
        return generateMarkdown(answers)})
    .then((answers) => {
        // console.log(answers)
        // return answers
        writeToFile('README.md', answers)
    })
    .catch((error) => {
        console.log(error)
    })
}

// Function call to initialize app
init();