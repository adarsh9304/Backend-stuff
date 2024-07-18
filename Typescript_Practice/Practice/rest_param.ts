function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }

//   const multi_result=multiply(5,8,9,10);
//   console.log(multi_result)

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3));          // Output: 6
console.log(sum(1, 2, 3, 4, 5));    // Output: 15
