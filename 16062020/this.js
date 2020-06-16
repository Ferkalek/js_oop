function hello() {
    console.log('Hello', this) // windows
}

const person = {
    name: 'Ted',
    age: 25,
    sayHello: hello, // Object person
    sayHelloWindow: hello.bind(window), // can reassigne to windows
    logInfo: function(job, tel) {
        console.group(`${this.name} info`);
        console.log(`Name ${this.name}`);
        console.log(`Age ${this.age}`);
        console.log(`Job ${job}`);
        console.log(`Tel ${tel}`);
        console.groupEnd();
    }
};

const lena = {
    name: 'Lena',
    age: 30
};

/*
* bind (2 variant) - create a new function
*/
// 1 variant
// const personInfo = person.logInfo.bind(lena);
// personInfo('PM', '555-2345-4352');

// 2 variant
// person.logInfo.bind(lena, 'PM', '555-2345-4352')();


/*
* call - difference beatween bind that's call create a new function and invok it
*/
// person.logInfo.call(lena, 'PM', '555-2345-1111');

/*
* apply - difference beatween bind that's apply create a new function and invok it
*/
person.logInfo.apply(lena, ['PM', '555-2345-2222']);