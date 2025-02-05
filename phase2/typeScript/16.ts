/*
Utility Methods 

ReadOnly
Partials
Pick
Omit

*/

type User = {
    id: string,
    name: string;
    age: number;
}

/*
 Readonly Utility
*/

// let u1: Readonly<User> = {
//     name: "john",
//     age: 34
// }
// u1.name = 'something'


/*
 Partials Utility
*/

let u1: Partial<User> = {
    name: "john",
}


/*
 Pick Utility
*/

let u2: Pick<User, 'name' | 'age'> = {
    name: "john",
    age: 45
}

/*
 Omit Utility
*/

type UserOnlyNameAndAge = Omit<User, 'id'>

let u3: UserOnlyNameAndAge = {
    name: 'john',
    age: 88
}