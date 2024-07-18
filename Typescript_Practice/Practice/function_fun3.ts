// function addNumber_function3(first:number,second:number):number{
//     return first+second;
// }

// function function3_1(a:number,b:(param1:number,b:number)=>number):void{
//     let res=a+b(15,17)
//      console.log(res)
// } 

// function3_1(5,addNumber_function3)


function addNumber_function3(first: number, second: number): number {
    return first + second;
}

function function3_1(a: number, b: () => number): void {
    let res = a + b(); 
    console.log(res);
}

function3_1(5, () => addNumber_function3(15, 17)); 


// function addNumber_function3(first: number, second: number): number {
//         return first + second;
//     }

// function function3_1(a: number, b:Function): void {
//     let res = a + b(); 
//     console.log(res);
// }

// function3_1(5, () => addNumber_function3(15, 17)); 
