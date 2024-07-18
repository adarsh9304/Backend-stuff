interface inter1 {
    name: string;
    hobby: string[];
}

function fun2(a: string, b?: number): inter1 {
    return { name: a, hobby: ["1", "2"] };
}

const a=fun2("person")
console.log(a)