// declaring a decorator factory function
function Logger(logString: string) {
    console.log('Logger factory');  
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// another decorator function factory, changig the html dom
function WithTemplate(template: string, hookId: string) {
    console.log('Template factory');
    return function(constructor: any) {
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name;
      }
    }
  }

// applying decorator to a class
@Logger('Loging Person')
@WithTemplate('<h1> My Person object </h1>', 'app')
class Person {
  name = "Sudip";

  constructor() {
    console.log("Creating person object");
  }
}

// here target is anything
// propertyName can be of any type
function Log(target: any, propertyName : string | Symbol) {
    console.log('Property decorators');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor : PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);

}

function Log3(target: any, name: string | Symbol, descriptor : PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// here position is the position of method parameter
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);

}

class Product {

    // attaching @Log decorator to title
    @Log
    title: string;
    private _price: number;

    // accessor decorator
    @Log2
    set price(val : number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw Error('Invaid price, price should be positive');
        } 
    }

    // method and parameter decorator
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }

    constructor(title: string, price : number) {
        this._price = price;
        this.title = title;
    }
}

// returning class from decorator function
type Consturctor = { new (...args: any[]): any };

function toString<T extends Consturctor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return JSON.stringify(this);
    }
  };
}

@toString
class C {
  public foo = "foo";
  public num = 24;
}

console.log(new C().toString())

// creating autobind decorator
// here _ and _2 are optional argument 
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    // accessing original method through property descriptor
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
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
    message = 'This works!';
  
    @Autobind
    showMessage() {
      console.log(this.message);
    }
  }
  
  const p = new Printer();
  p.showMessage();
  
  const button1 = document.querySelector('button')!;
  button1.addEventListener('click', p.showMessage);
