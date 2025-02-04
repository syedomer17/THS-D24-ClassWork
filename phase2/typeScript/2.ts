/*
Interfaces
type
*/

// let user = {
//   age: 21,
//   bootcamp: "THS D24",
// };

// function getAge(user: { age: number, bootcamp: string }): number {
//     return user.age
// }

// getAge(user)

//----------------------------------------------

// interface User {
//     age: number;
//     bootcamp: string;
// }

type User = {
  age: number;
  bootcamp: string;
};

function getAge(user: User): number {
  return user.age;
}

function getBootcamp(user: User): string {
  return user.bootcamp;
}

// AVOID
// function getUser(user) {
//     return user;
// }
// getUser("hello")

//----------------------------------------------

let fruits: string[] = ["apple", "orange", "kiwi", "mango"];

let fruits2: Array<string> = ["apple", "orange", "kiwi", "mango"];

/*

*/

function getFruit(fruits: string[]) {
  return fruits[0];
}

