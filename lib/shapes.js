class Shape {
    constructor(fcolor, scolor) {
    this.fcolor = fcolor;
    this.scolor = scolor;
    }
    
}

class Circle extends Shape {
    constructor(shape, fcolor, scolor) {
        super(fcolor, scolor);
        this.shape = shape;
    }
}

class Triangle extends Shape {
    constructor(shape, fcolor, scolor) {
        super(fcolor, scolor);
        this.shape = shape;
    }
}

class Square extends Shape {
    constructor(shape, fcolor, scolor) {
        super(fcolor, scolor);
        this.shape = shape;
    }
}

module.exports = {
    Shape, Circle, Triangle, Square
};