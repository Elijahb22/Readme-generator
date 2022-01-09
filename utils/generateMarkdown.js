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
  if (license === 'CC0') {
    return`[[License: CC0](https://img.shields.io/badge/Label-CC0-blue)]`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
