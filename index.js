// initialize packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// initialize questions array for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter the name of your application (required)',
        validate: projectNameInput => {
            if(projectNameInput) {
                return true;
            } else {
                console.log('You must enter a name for your application!');
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
                console.log('Come on, tell us what the application is for!');
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
        message: 'Please enter any recommmended application tests', 
        default: 'There are currently no tests available for this project.'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Select the appropriate license for this application. See https://choosealicense.com/ for information about selecting a license',
        choices: ['Apache License 2.0','BSD 3-Clause "New" or "Revised" license','GNU GPLv3 License','ISC License','MIT License','Mozilla Public License 2.0'],
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
    },
    {
        type:'input',
        name: 'projectFileName',
        message: 'What would you like to name your readme file? (".md" will be appended to your entry)',
        default: 'README'
    }
];

// function to write a file using generated file name and  markdown 
const writeToFile = (fileName, generatedMarkdown) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, generatedMarkdown, err => {
            // if there's an  error, reject the promise and send the error to the .catch method
            if (err){
                reject(err);
                return;
            }
            // otherwise, resolve the promise and send the successful data to the .then method
            resolve ({
                ok: true,
                message: 'Your README.md file has been created. Check it out in the "dist" folder.'
            });
        });
    });
};

// function to handle user input using inquirer and predefined questions array
const init = () => {
    const userInput = inquirer.prompt(questions);
    return userInput;
};   

// Function call to initialize app
init()
// generate file name and markdown using user inputs
.then(userInput => {
    return generateMarkdown(userInput);
})
// write markdown to file
.then(generateMarkdownResponse => {
    let fileName = generateMarkdownResponse.fileName;
    let generatedMarkdown = generateMarkdownResponse.generatedMarkdown;
    
    return writeToFile(fileName, generatedMarkdown)
})
// alert user file has been created
.then(writeToFileResponse => {
    console.log(writeToFileResponse.message);
})
