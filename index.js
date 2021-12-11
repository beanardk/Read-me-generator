// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title.'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your description'
    },
    // Licenses
    {
        type: 'list',
        name: 'licenses',
        message: 'Chooses licenses used for this project',
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },
    // Github username
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username'
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    },
    // Table of contents
    {
        type: 'input',
        name: 'contents',
        message:'Please put your table of contents'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
