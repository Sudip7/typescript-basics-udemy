"use strict";
// built in generic types
const names = []; // same as defining the type as string[]
const names1 = []; // so names and names1 declaration are similar
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done!');
    }, 2000);
});
// custom generic types
function identity(arg) {
    return arg;
}
let outputString = identity('hello type');
console.log(outputString);
let outputNum = identity(20);
console.log(outputNum);
// this function accept two object type parameter as input
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'sudip', hobbies: ['music'] }, { age: 34 });
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//loggingIdentity(5);
loggingIdentity({ length: 10 });
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
//# sourceMappingURL=generics.js.map