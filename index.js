// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter the name of your project (required)',
        validate: projectNameInput => {
            if(projectNameInput) {
                return true;
            } else {
                console.log('You must enter a name for your project!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a description of this project (required)',
        validate: projectDescriptionInput => {
            if(projectDescriptionInput){
                return true;
            } else{
                console.log('Come on, tell us what the project is about!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please provide installation instructions (required)',
        validate: projectInstallationInput => {
            if(projectInstallationInput){
                return true;
            } else{
                console.log('If we can\'t install it, we can\'t use it. Help us out here.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please provide usage guidelines', 
        default: ''
    },
    {
        type: 'input',
        name: 'projectContributions',
        message: 'Please provide contribution guidelines', 
        default: 'The Contributor Covenant'
    },
    {
        type: 'input',
        name: 'projectTests',
        message: 'Please provide contribution guidelines', 
        default: 'There are currently no tests available for this project.'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Select the appropriate license for this project. See https://choosealicense.com/ for information about selecting a license',
        choices: ['Apache License 2.0','GNU GPLv3 License','ISC License','MIT License'],
        default: 'MIT License'
    },
    {
        type: 'input',
        name: 'projectUsername',
        message: 'What\'s your GitHub username? (required)',
        validate: projectUsernameInput => {
            if (projectUsernameInput){
                return true;
            } else {
                console.log('Come on, don\'t be shy! We want to know who made this awesome project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'Enter your email address (required)',
        validate: projectEmailInput => {
            if (projectEmailInput) {
                return true;
            } else {
                console.log('Just put in an email address. We promise not to sell it to anyone.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    const userInput = inquirer.prompt(questions);
    return userInput;
}   

// Function call to initialize app
init()
.then(userInput => {
    console.log(userInput);
})
