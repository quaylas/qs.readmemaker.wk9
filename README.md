# Challenge 9 : README Maker | QS

[![License: MIT](https://img.shields.io/badge/license-MIT-0d0042)](https://opensource.org/licenses/MIT)

A simple command line application using Node.js to generate a polished README.md file based on user inputs. Users are prompted for appropriate details via the Inquirer module and a markdown file is written to the 'dist' folder.

Table of Contents
* [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
* [Key Features](#key-features)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
* [Visuals](#visuals)

---

## User Story and Acceptance Criteria

### User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

### Acceptance Criteria
```
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
```
```
WHEN I enter my project title
THEN this is displayed as the title of the README
```
```
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
```
```
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
```
```
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
```
```
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
```
```
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

```

---

## Key Features

* Prompts user for critical elements of a professsional README.md file.
* Ensures all crucial data is provided by leveraging validation (and witty prompts).
* Generates markdown file with appropriate headings, badges, and links according to user inputs.

---
## Installation

This application runs on Node.js and uses the Inquirer module. Visit [their website](http://www.nodejs.org/download/) for download and installation instructions. 

Once you've installled Node.js, clone the repository and install its dependencies by running 
```
$ npm install
```
in the command line. 


## Usage

When installation is complete, the application is initialized by the command 
```
$ node index.js
```

Users will be prompted for title, installation, usage, and license information related to their application, and notified when their markdown file has been generated.

## Contributions

Contributions to this application are governed by [The Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## Tests

There are currently no tests available for this project.

## Questions

This project was developed by [quaylas](https://github.com/quaylas). 
Questions may be directed to [quayla@cxadvisors.com](mailto:quayla@cxadvisors.com).

## License

This project is licensed under the [${license}](https://opensource.org/licenses/MIT).

---
## Visuals

You can view a 3-minute demo of this application [here](https://drive.google.com/file/d/1OLw9nNX_KguqJiIvqj6LxUFVJvjWQ7D-/view).