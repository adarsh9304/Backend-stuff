interface inter2 {
    name: string;
    hobby: string[];
}

function fun(a: string, b: number): inter2 {
    return { name: a, hobby: ["1", "2"] };
}

const a1=fun("person",2)
console.log(a1)