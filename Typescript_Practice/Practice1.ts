
export interface User  {
    name:String;
    age:Number;
    occupation:String;
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);


interface Colour {
    red: number;
    green: number;
    blue: number;
}

const example: { [key: string]: Colour }[] = [
    {
        abc : {
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
