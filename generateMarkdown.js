// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Description
  ${data.description}

  ## Table of contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usase](#usage)
  -[Licesnse](#license)
  -[Contribution](#contribution)
  -[Test Instructions](#test)
  -[Questions](#questions)
  
  ## Installation Instructions
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  
  This application used ${data.licenses} license
  
  ## Contribution
  ${data.contribution}
  
  ##Test Instructions
  ${data.test}
  
  ## Questions
  [Github page](http://github.com/${data.username})
  
  Email: ${data.email}
  
  ${data.additional}`;
}

module.exports = generateMarkdown;
