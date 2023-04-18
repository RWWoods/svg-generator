const Shape = require('../shapes');

describe('Shape', () => {
    test('should fail if shape is not blue', () => {
      const testShape = new triangle
      testShape.setColor("blue")
      expect(testShape.render).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="70,180 150,20 230,180" fill="blue" /> <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> </svg>`);
    });
  });


// const test = new Triangle();
// test.setColor("blue");
// expect(test.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');