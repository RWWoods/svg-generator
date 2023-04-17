class Shape {
    constructor(text, textcolor, shape, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }

}

class circle extends Shape {
    constructor(text, textcolor, shape, shapecolor) {
        super(text, textcolor, shape, shapecolor);

    }
    render() {
        return '<circle cx="25" cy="75" r="20" stroke="red" fill="transparent"/>'
    }
}



class triangle extends Shape {
    constructor(text, textcolor, shape, shapecolor) {
        super(text, textcolor, shape, shapecolor);
        
    }
    
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    }
    
}

class square extends Shape {
    constructor(text, textcolor, shape, shapecolor) {
        super(text, textcolor, shape, shapecolor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"<rect width="200" height="200" fill="${this.shapecolor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${data.text}</text> </svg>`
    }
}


// function init() {

// }

module.exports = {
    Shape, circle, triangle, square
};
