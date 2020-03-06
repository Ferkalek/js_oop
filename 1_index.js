// Fuctory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw')
        }
    }
}

const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}

Circle.prototype.shafle = function() {
    console.log('New method - shafle');
}

const circle2 = new Circle(1);