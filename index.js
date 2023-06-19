const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes");

const questions = [
    { type: "input", name: "logoText", message: "What 3 characters would you like for your logo?" },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color keyword (OR a hexadecimal number) for your logo text."
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
        message: "Please enter a color keyword (OR a hexadecimal number) for your logo shape."
    }
];

function init() {
    inquirer.prompt(questions).then((response) => {
        let newShape;
        if (response.logoShape === "Circle") {
            newShape = new Circle(response.shapeColor, response.textColor, response.logoText)
        } else if (response.logoShape === "Square") {
            newShape = new Square(response.shapeColor, response.textColor, response.logoText)
        } else {
            newShape = new Triangle(response.shapeColor, response.textColor, response.logoText)
        }
        fs.writeFile("square.svg", newShape.generate(response), (error) => {
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