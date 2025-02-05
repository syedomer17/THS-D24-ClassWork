/*
Default Parameter in function
*/


// javascript
// function sum(a, b = 5) {
//     console.log(a + b)
// }

// sum(1, 2)
// sum(6)


//typescript
function sum(a: number, b: number = 5) {
    console.log(a + b)
}

sum(1, 2)
sum(6)