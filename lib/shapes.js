class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Square extends Shape {
    generate() {
        if (this.text.length === 3) {

            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <rect x="50" height="200" width="200" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`;
        } else {
            console.log("You may only enter up to 3 characters for your logo text, please try again")
        }
    }
}

class Triangle extends Shape {
    generate() {
        if (this.text.length === 3) {

            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`;
        } else {
            console.log("You may only enter up to 3 characters for your logo text, please try again")
        }
    }
}

class Circle extends Shape {
    generate() {
        if (this.text.length === 3) {

            return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`;
        } else {
            console.log("You may only enter up to 3 characters for your logo text, please try again")
        }
    }
}

module.exports = { Square, Triangle, Circle };