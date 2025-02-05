/*
Array
*/

let fruits: string[] = ['apple', 'orange', 'kiwi', 'mango']

let fruits2: Array<string> = ['apple', 'orange', 'kiwi', 'mango']


function getFruit(fruits: string[]) {
    return fruits[0]
}


/*
Array of Objects
*/

type BootcampUser = {
    age: number;
    username: string;
}

let users: BootcampUser[] = [
    {
        age: 21,
        username: "john"
    },
    {
        age: 24,
        username: "doe"
    },
]