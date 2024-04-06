"use strict";
// Exercise using typescript write a small javascript program that will have the following functionality
const studentOne = {
    firstName: "John",
    lastName: "Smith",
    age: 27,
    printInfo() {
        console.log(`${this.firstName} : ${this.lastName}: ${this.age}`);
    },
};
const studentTwo = {
    firstName: "Adam",
    lastName: "Jones",
    age: 21,
    printInfo() {
        console.log(`${this.firstName} : ${this.lastName}: ${this.age}`);
    },
};
const studentThree = {
    firstName: "Paul",
    lastName: "Brown",
    age: 25,
    printInfo() {
        console.log(`${this.firstName} : ${this.lastName}: ${this.age}`);
    },
};
const studentsArray = [studentOne, studentTwo, studentThree];
studentOne.printInfo();
studentTwo.printInfo();
