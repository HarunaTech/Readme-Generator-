// function to generate markdown for README 
// # indicate Heading 1 style according to readme markdown and Title is relative to index.js prompt
function generateMarkdown(data) {
  return `# ${data.Title}
  https://img.shields.io/badge/license-${data.License}-blue


## Description
${data.Description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Contributing
${data.Contributing}

## Tests
${data.Tests}

## License
${data.License}

## Questions
For further enquiries, please contact me by email ${data.EmailQuestion}
Kindly have a look at the my Github repo for more info https://github.com/${data.GithubQuestion}


`;
}

module.exports = generateMarkdown;
