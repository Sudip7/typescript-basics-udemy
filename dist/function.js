"use strict";
function addHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// cb is a callback function
// that takes one argument and returns nothing
// call above function 
addHandle(10, 20, (result) => {
    console.log(result);
});
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result1 = add(5, 2);
const result2 = add(7, 'c');
//# sourceMappingURL=function.js.map