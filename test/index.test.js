const {Square, Triangle, Circle} = require("../lib/shapes");

describe('Square', () => {
    describe('new Square', () => {
      it('should dynamically create a new square', () => {
        const shape = new Square();
        this.text.length === 3;
        expect(shape.generate("blue","white","AMC")).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <rect x="50" height="200" width="200" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
            ${this.text}
        </text> </svg>`);
      });
    });
  });

  describe('Circle', () => {
    describe('new Circle', () => {
      it('should dynamically create a new circle', () => {
        const shape = new Circle();
        expect(shape.generate()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue" />');
      });
    });
  });

  describe('Triangle', () => {
    describe('new Triangle', () => {
      it('should dynamically create a new triangle', () => {
        const shape = new Triangle();
        expect(shape.generate()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue" />');
      });
    });
  });