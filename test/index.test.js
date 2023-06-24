const {Square, Triangle, Circle} = require("../lib/shapes");

describe('Square', () => {
    describe('new Square', () => {
      it('should dynamically create a new square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="blue" />');
      });
    });
  });

  describe('Circle', () => {
    describe('new Circle', () => {
      it('should dynamically create a new circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue" />');
      });
    });
  });

  describe('Triangle', () => {
    describe('new Triangle', () => {
      it('should dynamically create a new triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue" />');
      });
    });
  });