
function Shape(color) {
    this.color = color;
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate -- Shape');
}

extend(Circle, Shape);

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw -- Circle');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);


const s = new Shape('red');
const c = new Circle(2, 'gray');