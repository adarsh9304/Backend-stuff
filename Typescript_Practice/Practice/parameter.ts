const greet1 = (name: string, age: number) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};

type Params = Parameters<typeof greet1>;
// Params is inferred as [string, number]

const params: Params = ["Alice", 30];
greet1(...params); // Output: Hello, Alice! You are 30 years old.
