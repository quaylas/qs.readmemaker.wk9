// initialize packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { time } = require('console');

// initialize questions array for user input
const questions = [
    {
        type: 'input',
        name: 'appName',
        message: 'Enter the name of your application (required)',
        validate: appNameInput => {
            if(appNameInput) {
                return true;
            } else {
                console.log('You must enter a name for your application!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'appDescription',
        message: 'Enter a description of your application (required)',
        validate: appDescriptionInput => {
            if(appDescriptionInput){
                return true;
            } else{
                console.log('Come on, tell us what the application is for!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'appLive',
        message: 'Is the application deployed via GitHub Pages? If yes, you will be required to provide a link to the application.',
        default: true
    },
    {
        type: 'input',
        name: 'appLink',
        message: 'Please provide the link to the deployed application (required)',
        when: ({appLive}) => {
            if (appLive){
                return true;
            } else {
                return false;
            }
        },
        validate: appLink => {
            if (appLink) {
                return true;
            } else {
                console.log('Seriously, if you don\'t give us the link we will just go pull it from your profile and we will be mad the WHOLE time');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'appInstallation',
        message: 'Please provide installation instructions (required)',
        validate: appInstallationInput => {
            if(appInstallationInput){
                return true;
            } else{
                console.log('If we can\'t install it, we can\'t use it. Help us out here.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'appUsage',
        message: 'Please provide usage guidelines', 
        default: ''
    },
    {
        type: 'input',
        name: 'appContributions',
        message: 'Please provide contribution guidelines', 
        default: 'The Contributor Covenant'
    },
    {
        type: 'input',
        name: 'appTests',
        message: 'Please enter any recommmended application tests', 
        default: 'There are currently no tests available for this application.'
    },
    {
        type: 'list',
        name: 'appLicense',
        message: 'Select the appropriate license for this application. See https://choosealicense.com/ for information about selecting a license',
        choices: ['Apache License 2.0','BSD 3-Clause "New" or "Revised" license','GNU GPLv3 License','ISC License','MIT License','Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'appUsername',
        message: 'What\'s your GitHub username? (required)',
        validate: appUsernameInput => {
            if (appUsernameInput){
                return true;
            } else {
                console.log('Come on, don\'t be shy! We want to know who made this awesome app!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'appEmail',
        message: 'Enter your email address (required)',
        validate: appEmailInput => {
            if (appEmailInput) {
                return true;
            } else {
                console.log('Just put in an email address. We promise not to sell it to anyone.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'appFileName',
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
