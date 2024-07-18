function sum2(...args: number[]): number {
    return args.reduce((acc, val) => acc + val, 0);
}

const numbers = [1, 2, 3];
console.log(sum2(...numbers)); 