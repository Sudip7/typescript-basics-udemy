type Admin1 = {
  name: string;
  priviledges1: string[];
};

type Employee1 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee1 = Admin1 & Employee1;

const e2: ElevatedEmployee1 = {
  name: "Sudip",
  priviledges1: ["start-server"],
  startDate: new Date(),
};

type UnknownEmployee = Admin1 | Employee1;

function printEmpInfo(emp: UnknownEmployee) {
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
  loadCargo(weight: number) {
    console.log("loading cargo size " + weight);
  }
}

type Vehicles = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicles) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

interface Bird {
  type: "bird"; // literal types giving unique identity to the interface type
  // this unique property describes our object
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed '+ speed);
}
moveAnimal({type: 'bird', flyingSpeed: 5});

const usrInput = document.getElementById('user-input')!; 

// ! symbol tell the compiler that usrInput can't be null/empty. this will be 
//ensured by the developer

//typecasting with <> option
const usrInput1 = <HTMLInputElement>document.getElementById('user-input')!;

//typecasting with as keyword
const usrInput2 = document.getElementById('user-input')! as HTMLInputElement;

usrInput1.value = 'typecasting with <> operator ';
usrInput2.value = 'typecasting with as keyword ';

// function overloading

