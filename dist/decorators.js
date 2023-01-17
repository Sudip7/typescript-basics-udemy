"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// declaring a decorator factory function
function Logger(logString) {
    console.log('Logger factory');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// another decorator function factory, changig the html dom
function WithTemplate(template, hookId) {
    console.log('Template factory');
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
// applying decorator to a class
let Person = class Person {
    constructor() {
        this.name = "Sudip";
        console.log("Creating person object");
    }
};
Person = __decorate([
    Logger('Loging Person'),
    WithTemplate('<h1> My Person object </h1>', 'app')
], Person);
// here target is anything
// propertyName can be of any type
function Log(target, propertyName) {
    console.log('Property decorators');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// here position is the position of method parameter
function Log4(target, name, position) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this._price = price;
        this.title = title;
    }
    // accessor decorator
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw Error('Invaid price, price should be positive');
        }
    }
    // method and parameter decorator
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
function toString(BaseClass) {
    return class extends BaseClass {
        toString() {
            return JSON.stringify(this);
        }
    };
}
let C = class C {
    constructor() {
        this.foo = "foo";
        this.num = 24;
    }
};
C = __decorate([
    toString
], C);
console.log(new C().toString());
// creating autobind decorator
// here _ and _2 are optional argument 
function Autobind(_, _2, descriptor) {
    // accessing original method through property descriptor
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // binding the original class method
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
p.showMessage();
const button1 = document.querySelector('button');
button1.addEventListener('click', p.showMessage);
//# sourceMappingURL=decorators.js.map