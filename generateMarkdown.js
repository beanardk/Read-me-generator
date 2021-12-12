// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
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
  
  ## Test Instructions
  ${data.test}
  
  ## Questions
  [Github page](http://github.com/${data.username})
  
  Email: ${data.email}
  
  ${data.additional}`;
}

module.exports = generateMarkdown;
