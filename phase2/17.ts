/*

typeof

*/

let student = {
    gender: "male",
    bootcamp: "thsd25"
}

type Student = typeof student

/*
keyof
*/

type StudentKeys = keyof Student