// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/Label-Apache__2.0-brightgreen)]`
  }
  if (license === 'ISC') {
    return `[![License: ISC ](https://img.shields.io/badge/Label-ISC-red)]`
  }
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/Label-MIT-yellowgreen)]`
  }
  if (license === 'ODbL') {
    return `[![License: ODbL](https://img.shields.io/badge/Label-ODbL-orange)]`
  }
  if (license === 'GNU 3.0') {
    return`[[License: GNU 3.0](https://img.shields.io/badge/Label-GNU__3.0-blue)]`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license === 'ISC') {
    return "https://opensource.org/licenses/ISC"
  }
  if (license === 'MIT') {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === 'ODbL') {
    return "https://opendatacommons.org/licenses/odbl/";
  }
  if (license === 'GNU 3.0') {
    return "https://opensource.org/licenses/GPL-3.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "none") {
    return `${license}\n${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  You can reach me at ${data.email}.
  You can also view more projects at ${data.github}.
`;
};

module.exports = (generateMarkdown);
