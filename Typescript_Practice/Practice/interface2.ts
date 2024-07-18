interface inter{
    name:string,
    hobby:string[],
    date1:Date 
}

const person1 : inter={
   name :"hello",
    hobby:["1","2"],
     date1:new Date()
}
console.log(typeof(person1.date1))

// Date => date object
// new Date() => date object
// Date() => string

function greet2(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  