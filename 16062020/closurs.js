function multiply(mul) {
    return function(n) {
        return mul * n;
    }
}

const scale30 = multiply(30);
console.group('multiply');
console.log(scale30(10));
console.groupEnd();

// ------------------------------------

function linkMaker(domen) {
    return function(name) {
        return `hhts://${name}.${domen}`
    }
}

const urlCom = linkMaker('com');
const urlUa = linkMaker('ua');

console.group('linkMaker');
console.log(urlCom('google'));
console.log(urlCom('griddynamics'));
console.log(urlUa('i'));
console.log(urlUa('sinoptic'));
console.groupEnd();

// ------------------------------------

/*
* wrong variant, but it works
*/
// function bind(obj, fn) {
//     const person = {
//         name: obj.name,
//         age: obj.age,
//         job: obj.job,
//         logInfo: fn
//     }
//     person.logInfo();
// }

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Li', age: 18, job: 'DJ'};
const person2 = {name: 'Sam', age: 24, job: 'PM'};

// bind(person1, logPerson);
// bind(person2, logPerson);

console.group('custom bind');
bind(person1, logPerson)();
bind(person2, logPerson)();
console.groupEnd();