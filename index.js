const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    { type: "input", name: "logoText", message: "What 3 characters would you like for your logo?" },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like for your logo text?"
    },
    {
        type: "list",
        name: "logoShape",
        message: "Please select a shape for your logo from the options below",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like for your shape?"
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter your email address"
    }
];

function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile(".svg", generateMarkdown(response), (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("SVG file succesfully generated!");
            }
        });
    });
}

// Function call to initialize app
init();