"use strict";
const e2 = {
    name: "Sudip",
    priviledges1: ["start-server"],
    startDate: new Date(),
};
function printEmpInfo(emp) {
    console.log("Name: " + emp.name); // name type is avaiable in both Admin and Employee, so no problem
    // below we check whether priviledges property is present
    // in emp object before accessing it
    if ("priviledges1" in emp) {
        console.log("Priviledges1: " + emp.priviledges1);
    }
    if ("startDate" in emp) {
        console.log("Start date is: " + emp.startDate);
    }
}
printEmpInfo(e2);
printEmpInfo({ name: "mama", startDate: new Date() });
// working with class
class Car {
    drive() {
        console.log("Driving a car");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck");
    }
    loadCargo(weight) {
        console.log("loading cargo size " + weight);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 5 });
const usrInput = document.getElementById('user-input');
// ! symbol tell the compiler that usrInput can't be null/empty. this will be 
//ensured by the developer
//typecasting with <> option
const usrInput1 = document.getElementById('user-input');
//typecasting with as keyword
const usrInput2 = document.getElementById('user-input');
usrInput1.value = 'typecasting with <> operator ';
usrInput2.value = 'typecasting with as keyword ';
// function overloading
//# sourceMappingURL=advanced%20types.js.map