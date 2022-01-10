// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'gitHub',
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
            name: 'email',
            message: 'Please enter your email address (Required):',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
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
                    console.log("Please enter project title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please provide a brief description about your project:'
        },
        {
            type: 'input',
            name: 'installationInformation',
            message: 'What are the steps required to install your project:'
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Provide instructions and examples for use:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'For other developers to contribute it, add guidelines on how to do so:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Write tests for your application, and provide examples on how to run them:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for this project?',
            choices: ['Apache 2.0', 'ISC', 'MIT', 'ODbL', 'GNU 3.0' ]
        }
    ])
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, error => {
            if (error) {
                console.log(error);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    userQuestions()
        .then(data => {
            return generateMarkdown(data);
        })
        .then(pageMD => {
            return writeFile(pageMD);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}


// Function call to initialize app
init();
