class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.elog('move');
        };
    }

    draw() {
        console.elog('draw');
    }
}

const c = new Circle(1);