// Exercise using typescript write a small javascript program that will have the following functionality

/*
    1. Create an array that will contain objects of type Student ( create interface with properties by your choice)
    2. Create function for creating, printing, updating or deleting (filter not equals za deleting) students ( add type safety to all of them )
    3. Whenever possible use typescript to help you catch errors before they happen
*/
interface Student {
  firstName: string;
  lastName: string;
  age: number;

  //If void is used, you can return anything but you should NOT DO IT
  printInfo: () => void;
}

const studentOne: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 27,

  printInfo() {
    console.log(`${this.firstName} : ${this.lastName}: ${this.age}`);
  },
};
const studentTwo: Student = {
  firstName: "Adam",
  lastName: "Jones",
  age: 21,
  printInfo() {
    console.log(`${this.firstName} : ${this.lastName}: ${this.age}`);
  },
};
const studentThree: Student = {
  firstName: "Paul",
  lastName: "Brown",
  age: 25,
  printInfo() {
    console.log(`${this.firstName} : ${this.lastName}: ${this.age}`);
  },
};

const studentsArray: Student[] = [studentOne, studentTwo, studentThree];

studentOne.printInfo();
studentTwo.printInfo();
