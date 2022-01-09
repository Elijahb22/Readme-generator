// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gituser',
            message: 'Please enter your GitHub username',
            validate: gitUserInput => {
                if (gitUserInput) {
                    return true;
                } else {
                    console.log("Please enter a username!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the name of your project (Required):',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log("PLEASE ENTER A PROJECT NAME!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Please provide a brief description about your project:'
        },
        {
            type: 'input',
            name: 'installationInfo',
            message: 'What are the steps required to install your project:'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'contributionInfo',
            message: 'For other developers to contribute it, add guidelines on how to do so:'
        },
        {
            type: 'input',
            name: 'testInfo',
            message: 'Write tests for your application, and provide examples on how to run them:'
        },
        {
            type: 'list',
            name: 'licenseInfo',
            message: 'What license are you using for this project?',
            choices: ['Apache 2.0', 'ISC', 'MIT', 'ODbL', 'GNU 3.0' ]
        },
        {
            type: 'confirm',
            name: 'tableContents',
            message: 'Would you like to add a Table of Contents?',
            default: true
        }
    ])
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
