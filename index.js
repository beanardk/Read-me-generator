// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./generateMarkdown');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title.',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!')
                return false; 
            }
        }
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Enter your description',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the description for your project!')
                return false; 
            }
        }
    },
    // Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the instructions to install your project')
                return false; 
            }
        }
    },
    // Usage info
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the usage information!')
                return false; 
            }
        }
    },
    // Contribution guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines!',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines!')
                return false; 
            }
        }
    },
    // Test instructions
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the test instructions!')
                return false; 
            }
        }
    },
    // Licenses
    {
        type: 'list',
        name: 'licenses',
        message: 'Chooses licenses used for this project',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },
    // Additional questions
    {
        type: 'input',
        name: 'additional',
        message: 'Enter the instructions for additional questions',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the the instruction to add additional questions!')
                return false; 
            }
        }
    },
    // Github username
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!')
                return false; 
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
                return false; 
            }
        }
    }
]
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) => {
        const completedReadMe = generateMarkdown(responses);
        console.log('Compiling ReadME');
        console.log('Completed ReadME');
        fs.writeFileSync('README.md', completedReadMe);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
