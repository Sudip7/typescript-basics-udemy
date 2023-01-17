class Department {
   // name: string;
    //id: string;
   
    constructor(public name: string, private id: string) {
       // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): (${this.name})`);
    }
    
}


// creating department object
const accounting = new Department('Accounting','d1');
console.log(accounting);
accounting.describe();

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super('sudip', id ); // calling the super class constructor

    }
}
// creating ITDepartment object
const it = new ITDepartment('d2', ['Admin']); // creating child class object
it.describe(); // calling parent class method using child class object

class AccountingDept extends Department {
    private lastReport: string;
    private static instance: AccountingDept;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found..')
    }

    set mostRecentReport(value: string) {
        this.addReport(value); // calling the addReport() from setter
    }

   private constructor(id: string, private reports: string[]) {
        super('Accounting', id);
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        return new AccountingDept('d4', []);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}

const accountingDept = AccountingDept.getInstance();
accountingDept.addReport('Somethings went wrong');

// Note: here getter and setter methods are called
// just like regular variables
console.log(accountingDept.mostRecentReport); // calling getter method
accountingDept.mostRecentReport = 'Report is ready'; // setting the setter method
console.log(accountingDept.mostRecentReport);

abstract class Vehicle {
    constructor(protected type:string) {

    }
    abstract getVehicleType(): void;
}

class Bus extends Vehicle {

    constructor(type: string) {
        super(type);
    }
    getVehicleType() {
        console.log('Vehicle type is '+ this.type);
    }
}

const bus1 = new Bus('four wheeler');
bus1.getVehicleType();