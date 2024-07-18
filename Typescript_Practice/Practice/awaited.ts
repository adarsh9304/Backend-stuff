
async function fetchData(): Promise<string> {
    return "Hello, world!";
}
async function fun1(): Promise<string>{
    type Data = Awaited<ReturnType<typeof fetchData>>;
    
    const data: Data = await fetchData();
    console.log('from inside fun1',data);

    return data;
}

console.log('outside', fun1())