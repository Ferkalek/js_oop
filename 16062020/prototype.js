const person = {
    name: 'Ted',
    age: 25,
    sayHello: function() {
        console.log(`Hello ${this.name}!`);
    }
}

Object.prototype.greet = function() {
    console.log('Greet!');
}

const lena = Object.create(person);
lena.name = 'Lena';

Object.prototype.noGreet = function() {
    console.log('No Greet!');
}