//packages required
const inquirer = require("inquirer");
const fs = require("fs");

//questions for the prompt held in an array
const questions = [
          {
            type: "input",
            name: "title",
            message: "What would you like to name your application?",
            default: "Title"
          },
          {
            type: "input",
            name: "description",
            message: "Describe this project: ",
            default: "No description."
          },
          {
            type: "input",
            name: "howToInstall",
            message: "What do I need to know about installation?",
            default: "No installation information needed."
          },
          {
            type: "input",
            name: "howToUse",
            message: "What do I need to know about using your app?",
            default: "No instructions needed to use."
          },
          {
            type: "checkbox",
            name: "license",
            message: "Check the license(s) required.",
            choices: ["MIT","GPL","Apache","GPL","BSD","LGPL","Ms-PI","BSD"]
          },
          {
            type: "input",
            name: "contribution",
            message: "How can users contribute to your project?",
            default: "No instructions."
          },
          {
              type: "input",
              name: "test",
              message: "How can your app be tested?",
              default: "Run npm test."
          },
          {
              type: "input", 
              name: "gitUser",
              message: "What is your GitHub username?",
              default: "GitHub Username"
          }, 
          { 
              type: "input", 
              name: "name", 
              message: "What is your name?",
              default: "No name given."
          }, 
          {
              type: "input", 
              name: "email", 
              message: "What is your email address?",
              default: "No email given."
          }
        ]

//prompt the user with the above questions
function promptQuestions() {
    inquirer.prompt(questions).then((answers) => {
    writeToFile;
    })
 }

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}