class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Square extends Shape {
    generate() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <rect x="50" height="200" width="200" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`;
    }
}

class Triangle extends Shape {
    generate() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`;
        }
    }

class Circle extends Shape {
    generate() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`;
        }
    }

module.exports = { Square, Triangle, Circle };