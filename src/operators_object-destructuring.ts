let userInput: unknown;
userInput = 5; 
userInput = 'hello';

let userName: string;
//username = userInput; //not ok, error
// to make above statement work we have to first check the type of userInput
if(typeof userInput === 'string') {
userName = userInput;
}


function throwError(message: string, code: number) : never {
    throw {message: message, code: code};
}

const addValue = (a: number, b: number = 4) => {
    return a + b;
}

console.log(addValue(5,2));
console.log(addValue(7));

const button = document.querySelector('button');
if(button) {
    button.addEventListener('click', event => console.log(event));
}

const hobbies = ['sport','music','dance','swim'];
const activities = ['cycling'];

// how to add hobbies array to activities array
activities.push(...hobbies);
// or we can add it during declaration itself
const activities1 = ['swimming', ...hobbies];

const addVarArgs = (...numbers : number[]) => {
    // other operations
};

const addOperations = addVarArgs(5,8,-1, 5.9);
console.log(addOperations);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies);
console.log(remainingHobbies);

const personNew = {
    firstName: 'sudip',
    age: 34
};

const {firstName: userName1, age} = personNew;
console.log(userName1, age);

