const readline = require("readline-sync");
const fs = require("fs");

const n1 = readline.questionInt("Enter the value of n1:");
const n2 = readline.questionInt("Enter the value of n2:");

const sum = n1+n2;
fs.writeFile('sum.txt',sum.toString(),(error)=>{
    if(error){
        console.log(error);
        return
    }else{
        console.log(sum);
    }
})