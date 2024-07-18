// function fun_obj({ a, b }: { a: string, b: number }) {
//     console.log("a " + a);
//     console.log("b "+b)
// }

function fun_obj(pt:{a:string,b:number}){
    console.log("a "+ pt.a)
 }
 
 fun_obj({a:"person",b:5})

// fun_obj({ a: "person", b: 5 });

// const obj = { counter: 0 };
//Another way of saying this is that obj.counter must have the type number, not 0, because types are used to determine both reading and writing behavior.
//   obj.counter = 1;
// console.log(obj)