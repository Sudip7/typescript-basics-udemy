"use strict";
class Department {
    // name: string;
    //id: string;
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // this.name = name;
    }
    describe() {
        console.log(`Department (${this.id}): (${this.name})`);
    }
}
// creating department object
const accounting = new Department('Accounting', 'd1');
console.log(accounting);
accounting.describe();
class ITDepartment extends Department {
    constructor(id, admins) {
        super('sudip', id); // calling the super class constructor
        this.admins = admins;
    }
}
// creating ITDepartment object
const it = new ITDepartment('d2', ['Admin']); // creating child class object
it.describe(); // calling parent class method using child class object
class AccountingDept extends Department {
    constructor(id, reports) {
        super('Accounting', id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found..');
    }
    set mostRecentReport(value) {
        this.addReport(value); // calling the addReport() from setter
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new AccountingDept('d4', []);
    }
    addReport(text) {
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
class Vehicle {
    constructor(type) {
        this.type = type;
    }
}
class Bus extends Vehicle {
    constructor(type) {
        super(type);
    }
    getVehicleType() {
        console.log('Vehicle type is ' + this.type);
    }
}
const bus1 = new Bus('four wheeler');
bus1.getVehicleType();
//# sourceMappingURL=classes.js.map