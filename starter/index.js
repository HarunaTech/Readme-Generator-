const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project? ",
  },
  {
    type: "input",
    name: "Description",
    message: "What is the description of the project? ",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the installation of the project? ",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the usage information of the project? ",
  },
  {
    type: "input",
    name: "Contributing",
    message: "What is the contribution guildlines? ",
  },
  {
    type: "input",
    name: "Tests",
    message: "Please provide testing instructions? ",
  },
  {
    type: "list",
    name: "License",
    message: "What type of License does the project has? ",
    choices: [
        "Apache License 2.0", "MIT", "GPL-3.0", "BSD-2-Clause",
      ],
  },
  {
    type: "input",
    name: "EmailQuestion",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "GithubQuestion",
    message: "What is your github user name?",
  },

];

// function to write README file
function writeToFile(fileName, data) {        
  fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!')
);
}

// function to initialize program and prompt questions for users
function init() {
  inquirer.prompt(questions)
  .then(answers =>{
    console.log(answers)
    writeToFile("Readme.md", generateMarkdown(answers))
})
}

// function call to initialize program
init();