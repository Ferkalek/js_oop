class Container {
    constructor(selector) {
        this.elem = document.querySelector(selector); 
    }

    hide() {
        this.elem.style.display = 'none';
    }

    show() {
        this.elem.style.display = 'block';
    }
}

class Box extends Container {
    constructor(options) {
        super(options.selector)

        this.elem.style.width = options.size + 'px';
        this.elem.style.height = options.size + 'px';
        this.elem.style.backgroundColor = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
});

const box2 = new Box({
    selector: '#box2',
    size: 180,
    color: 'blue'
});

class Circle extends Box {
    constructor(options) {
        super(options);
        this.elem.style.borderRadius = '50%';
    }
}

const circle = new Circle({
    selector: '#circle',
    size: 145,
    color: 'green'
});