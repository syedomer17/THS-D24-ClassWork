/*
Generics

*/

function add<T>(a: T, b: T): T {
    return a
}

add<number>(1, 2)
add<string>("a", "b")


// ------------------------------------------------------------

function getArrElement<T>(arr: T[]): T {
    return arr[0]
}

getArrElement<number>([1, 2, 3])
getArrElement<string>(['a', 'b', 'c'])


// ------------------------------------------------------------

interface Box<T> {
    value: T
}

let box: Box<number> = {
    value: 2
}

let box2: Box<string> = {
    value: "abc"
}