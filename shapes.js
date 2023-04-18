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
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapecolor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> </svg>`
    }
}



class triangle extends Shape {
    constructor(text, textcolor, shape, shapecolor) {
        super(text, textcolor, shape, shapecolor);

    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="70,180 150,20 230,180" fill="${this.shapecolor}" /> <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> </svg>`
    }

}

class square extends Shape {
    constructor(text, textcolor, shape, shapecolor) {
        super(text, textcolor, shape, shapecolor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="0" width="200" height="200" fill="${this.shapecolor}" /> <text x="170" y="115" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text> </svg>`
    }
}
function generateLogo(data) {
    if (data.shape === 'circle') {
        return new circle(data.text, data.textcolor, data.shape, data.shapecolor)

    } else if (data.shape === 'triangle') {
        return new triangle(data.text, data.textcolor, data.shape, data.shapecolor)

    } else if (data.shape === 'square') {
        return new square(data.text, data.textcolor, data.shape, data.shapecolor)
    }

}



module.exports = generateLogo;
