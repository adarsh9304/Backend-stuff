/*

function fn(y:string):void 
function fn(x:string,y:number): void
function fn(a:string,b?:number):void{
    console.log(a,b)
}


fn("jayho",5)

function fail(msg: string): never {
    throw new Error(msg);
  }

function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }

  */


  /*

  class Person {
  name: string;
  age: number;

  // Constructor signatures
  constructor(name: string, age: number);
  constructor(name: string);
  constructor(age: number);
  
  // Single implementation of the constructor
  constructor(param1: string | number, param2?: number) {
    if (typeof param1 === "string") {
      this.name = param1;
      this.age = param2 ?? 0; // Default age to 0 if not provided
    } else if (typeof param1 === "number") {
      this.name = "Unknown";
      this.age = param1;
    } else {
      this.name = "Unknown";
      this.age = 0;
    }
  }
}

const person1 = new Person('Alice', 30); // Uses the first signature
const person2 = new Person("Bob");       // Uses the second signature
const person3 = new Person(25);          // Uses the third signature

console.log(person1); // Person { name: 'Alice', age: 30 }
console.log(person2); // Person { name: 'Bob', age: 0 }
console.log(person3); // Person { name: 'Unknown', age: 25 }


  */