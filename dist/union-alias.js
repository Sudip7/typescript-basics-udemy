"use strict";
function combine(input1, input2, resultConversion) {
    // here resultConversion is a literal type which accepts only two values
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combined = combine(20, 53, 'as-text');
const combined1 = combine('10', '34', 'as-number');
const combined2 = combine('hello', ' world', 'as-text');
console.log(combined);
console.log(combined1);
console.log(combined2);
//# sourceMappingURL=union-alias.js.map