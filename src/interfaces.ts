type Admin = {
    name: string;
    priviledge: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Sudip',
    priviledge: ['start-server'],
    startDate: new Date(),
};

// union types vs intersection type
type Combinables = string | number ;
type Numeric = number | boolean;

// here the type of Universal is 
// intersection of Combinable and Numeric
// which is number
type Universal = Combinables & Numeric;

function addNumber(a: Combinables, b: Combinables) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b; 
}

// below Universal1 type can be of number or string or boolean
type Universal1 = Combinables | Numeric;

