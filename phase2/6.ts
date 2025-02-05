/*
    Extend Interfaces
*/

interface Person {
    name: string
    age: number
}

interface Employee extends Person {
    company: string
}