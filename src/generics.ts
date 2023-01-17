
// built in generic types
const names: Array<string> = [];  // same as defining the type as string[]
const names1 : string[] = []; // so names and names1 declaration are similar

const promise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!');

    }, 2000);

});


// custom generic types
function identity<T>(arg: T): T {
    return arg;
  }

  let outputString = identity('hello type');
  console.log(outputString);

  let outputNum = identity(20);
  console.log(outputNum);

  // this function accept two object type parameter as input
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergeObj = merge({name: 'sudip', hobbies: ['music']}, {age: 34});

  // defining custom type for the function type constraint
  interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

  //loggingIdentity(5);
  loggingIdentity({length:10});

  class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');
  textStorage.removeItem('Max');
  console.log(textStorage.getItems());
  