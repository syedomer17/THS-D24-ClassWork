/*
Union and Intersection

    & : Intersection
    |  : Union

*/

type Person2 = {
    name: string
    age: number
}

type Employee2 = {
    company: string
    salary: number
} & Person2


// type all = Person2 & Employee2

// -----------------------------------------------

type UserData = {
    address: string,
    user: Person2
}

let obj: UserData = {
    user: {
        name: "john",
        age: 23
    },
    address: "some address"
}

// ------------------------------
// Union

let some: string | number;

function isPrime(): boolean {
    return true
}

function getDirection(): "left" | "right" | "up" | "down" {

    return "up"
}