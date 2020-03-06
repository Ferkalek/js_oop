const renderMethod = {
    render: function() {
        if (this.items) {
            let element = '<select>';
            for (let i = 0; i < this.items.length; i++) {
                element += `<option>${this.items[i]}</option>`;
            }
            element += '</select>'
            console.log(element);
        } else {
            const imgElement = `<img src="${this.src}" />`;
            console.log(imgElement);
        }
    }
}

function extend(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

function mixin(target, ...source) {
    Object.assign(target, ...source);
}

// -------------------------

function HtmlElement() {
    this.click = function click() {
        console.log('click');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focus');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(val) {
        this.items.push(val);
    }
    this.removeItem = function(val) {
        const idx = this.items.indexOf(val);
        this.items.splice(idx, 1);
    }
}

extend(HtmlSelectElement, HtmlElement);
mixin(HtmlSelectElement.prototype, renderMethod);

function HtmlImageElement(source) {
    this.src = source;
}

extend(HtmlImageElement, HtmlElement);
mixin(HtmlImageElement.prototype, renderMethod);

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('https://i.us')
];

for(let element of elements) {
    console.log(element.render());
}