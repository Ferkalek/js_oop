const _stack = new WeakMap();

class MyStack {
    constructor() {
        _stack.set(this, []);
    }

    get count() {
        return _stack.get(this).length;
    }

    pop() {
        const stack = _stack.get(this);

        if (stack.length !== 0) {
            // my working variant 
            // stack.pop();
            // _stack.set(this, stack);
            _stack.get(this).pop();
        } else {
            console.log('Stack is empty');
        }
    }

    peek() {
        const stack = _stack.get(this);

        if (stack.length > 0) {
            console.log(stack[stack.length - 1]);
        } else {
            console.log('Stack is empty');
        }
    }

    push(val) {
        // my working variant 
        // const stack = _stack.get(this);
        // stack.push(val);
        // _stack.set(this, stack);
        _stack.get(this).push(val);
    }
}

const s = new MyStack();