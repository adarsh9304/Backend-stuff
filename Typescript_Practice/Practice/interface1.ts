interface Colour {
    red: number;
    green: number;
    blue: number;
}

const example: {[key:string]:Colour}[]  = [
    {
        abc: {
            red: 1,
            green: 2,
            blue: 3
        }
    },
    {
        xyz: {
            red: 1,
            green: 1,
            blue: 1
        }
    }
];
