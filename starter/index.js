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
    ])
    .then((answers) => {
      console.info("Answer:", answers.Title);
      console.log(generateMarkdown(answers));
    });

}

// function call to initialize program
init();
