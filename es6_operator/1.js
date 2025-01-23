/*
rest operator and spret operators

*/

// let arr = [a , b , c ]

// function test(...arr){
//     console.log(arr);
// }
// test(1,2,3,4,5)

// function sum(...numbers){
//     let sumResult =0;
//     for(i = 0 ; i< numbers )
// }

// spread operatore
let a1 = [0,1,2,3]
let a2 = [4,5,6]

// let sum = a1.concat(a2) // instent of this 

let sum = [...a1,...a2,7,8,9] // this is known as sperade operator 
console.log(sum);
// this we can also use for objects
let obj1 = {a:"syed"};
let obj2 = {b:"omer"};
let obj3 = {...obj1,...obj2};
console.log(obj3);

// object destructuring and array destructuring 

//array destructuring

let fruits = [
    "apple",
    "orange",
    'mango',
    "kivi"
]
// console.log(fruits[0]);
// it will take as order
// let [f1,f2,f3] =  fruits;
// console.log(f1,f2,f3);
// in this you can use rest operatore

let [f1,f2,f3,...remaining] = fruits;
console.log(f1,f2,f3,remaining);
//f1 and f2 is string and remaining is the array 

// object destructuring 

let obj = {
    name : "syed omer ali",
    age:18,
    gender : "male"
}
let {name,age,gender} = obj;
console.log(name,age,gender);

let {...destru}= obj
console.log(destru);

// if you want to custom variable then you an use this object 
// This is known as object destructuring 
let {age:personAge}= obj;
console.log(personAge);

function print(omer){
    console.log(obj);
    console.log(obj.name);
}
print({name:"syed omer",age:18})

// also there we can use destructuring 
function par(me){
    let {name} = me;
    console.log(name);
}
par({name:'ali',age:18})

// another methode 
function para({name}){
    console.log(name);
}
para({name:"syed ali",age:18})

console.log("**************");

// array of objects 

const users = [
    {
        name : "syed",
        age:17
    },
    {
        name : "ali",
        age:18
    },
    {
        name : "omer",
        age:11
    },{
        name:"syed omer",
        age:19
    }
]
users.forEach((ele)=>{console.log(ele.name);});
users.forEach(({name,age})=>{console.log(name,age);});

console.log("*****************");

const object = {
    name : "syed omer ali",
    subobj1 :{
        name:"anyone"
    }
}
const {subobj1} = object;
console.log(subobj1);

console.log("*****************");

// what if you want only name then you can use 
// const {subobj1: {name} } = object;

const example = [
  {
    name: "syed",
    age: 17,
    address: {
      city: "hyderabad",
    },
  },
  {
    name: "ali",
    age: 18,
    address: {
      city: "2hyderabad",
    },
  },
  {
    name: "omer",
    age: 11,
    address: {
      city: "3hyderabad",
    },
  },
  {
    name: "syed omer",
    age: 19,address:{
        city:"hyderabad"
    }
  },
  
];
example.forEach((ele)=>{console.log(ele.address.city);})


console.log("****************");

//Default parameters

function prints(name =  "omer"){
    console.log(name);
}
prints("ali")

console.log("******************");

let myage = 22;

let newAge = myage||18

console.log(newAge);

let a = 12;
let b = 10;

if(b<a){
    console.log("yes");
}else{
    console.log(NaN);
}
console.log(a<b ? "yes":"no");

console.log("                ");

function test(){
    return a>b && "yes"
}
console.log(test());