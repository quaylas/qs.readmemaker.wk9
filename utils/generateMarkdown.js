// function to return a license badge based on which license is passed in
const renderLicenseBadge = license => {
  // If there is no license, return an empty string
  if(!license){
    return '';
  } else if (license === 'Apache License 2.0'){
    return '[![License: Apache2.0](https://img.shields.io/badge/license-Apache%202.0-0d0042)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD 3-Clause "New" or "Revised" license') {
    return '[![License: BSD 3-Clause Revised](https://img.shields.io/badge/license-BSD%203-Clause%20Revised-0d0042)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'GNU GPLv3 License'){
    return '[![License: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-0d0042)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'ISC License') {
    return '[![License: ISC](https://img.shields.io/badge/license-ISC-0d0042)](https://opensource.org/licenses/ISC)'
  } else if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/license-MIT-0d0042)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: Mozilla Public 2.0](https://img.shields.io/badge/license-Mozilla%20Public%202.0-0d0042)](https://opensource.org/licenses/MPL-2.0)'
  }
};

//function that returns the license hyperlink
const renderLicenseLink = license => {
  // If there is no license, return an empty string
  if(!license){
    return '';
  } else if (license === 'Apache License 2.0'){
    return '[${license}](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD 3-Clause "New" or "Revised" license') {
    return '[${license}](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'GNU GPLv3 License'){
    return '[${license}](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'ISC License') {
    return '[${license}](https://opensource.org/licenses/ISC)'
  } else if (license === 'MIT License') {
    return '[${license}](https://opensource.org/licenses/MIT)'
  }
};

// function that returns the license section of README if appropriate
const renderLicenseSection = license => {
  // If there is no license, return an empty string
  if (!license) {
    return '';
  }
  return `## License

    This project is licensed under the ${renderLicenseLink(license)}.
  `
};

// function to handle default contribution section
const renderContributions = contributions => {
  // if the default contributions are in place, render appropriate text/hyperlinks
  if(contributions === 'The Contributor Covenant'){
    return `Contributions to this application are governed by [The Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)`;
  }
  else {
    return contributions;
  }
};

// function to generate file name and markdown from user inputs
const generateMarkdown = data => {
  let fileName = data.projectFileName.split(' ').join('') + '.md';

  let generatedMarkdown = `# ${data.projectName}

  ## Description

  ${renderLicenseBadge(data.projectLicense)}

  ${data.projectDescription}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.projectInstallation}

  ## Usage

  ${data.projectUsage}

  ## Contributions

  ${renderContributions(data.projectContributions)}

  ## Tests

  ${data.projectTests}

  ## Questions

  This project was developed by [${data.projectUsername}](https://github.com/${data.projectUsername}). 
  Questions may be directed to [${data.projectEmail}](mailto:${data.projectEmail}).

  ${renderLicenseSection(data.projectLicense)}

`;
return {fileName, generatedMarkdown}
}

module.exports = generateMarkdown;
