const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program and prompt questions for users
function init() {
    inquirer
    .prompt([
      {
        name: "Title",
        message: "What is the title of the project? ",
      },
      {
        name: "Description",
        message: "What is the description of the project? ",
      },
      {
        name: "Installation",
        message: "What is the installation of the project? ",
      },
      {
        name: "Usage",
        message: "What is the usage information of the project? ",
      },
      {
        name: "Contributing",
        message: "What is the contribution guildlines? ",
      },
      {
        name: "Tests",
        message: "Please provide testing instructions? ",
      },
      {
        type: "checkbox",
        name: "License",
        message: "What type of License does the project has? ",
        choices: [
            'Apache License 2.0', 'MIT', 'GPL-3.0', 'BSD-2-Clause',
          ],
      },
    ])
    .then((answers) => {
      console.info("Answer:", answers.Title);
      console.info("Answer:", answers.Description);
      console.info("Answer:", answers.Installation);

      console.log(generateMarkdown(answers));  // This is consologing to see how it's display according to the md tempplate 
    });

}

// function call to initialize program
init();
