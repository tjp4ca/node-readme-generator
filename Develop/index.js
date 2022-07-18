const inquirer = require('inquirer');
// const generatePage = require('./utils/generateMarkdown');

// inquirer
//   .prompt([

// ])

const question = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase()
        }
    },
]

async function runQuery(){
    return inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        return answers
    }).catch((error) =>{
        console.log(error)
    })
}
runQuery()



// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
