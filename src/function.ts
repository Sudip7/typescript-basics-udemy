    
function addHandle(n1: number, n2: number, 
    cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
    }
    // cb is a callback function
    // that takes one argument and returns nothing
    
    // call above function 
    addHandle(10, 20, (result) => { 
    console.log(result);
    });
   
    // just like java/javascript callback function

// function overloading
    type Universal2 = string | number; 

// adding overloaded function for add(...)
function add(a: string, b: string) : string;
function add(a: number, b: number) : number;
function add(a: string, b: number) : string;
function add(a: number, b: string) : string;
function add(a: Universal2, b: Universal2) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b; 
}

const result1 = add(5,2);
const result2 = add(7, 'c');
    