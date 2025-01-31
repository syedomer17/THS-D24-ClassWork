const fs = require("fs");
const readline = require("readline");

const userInput = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

userInput.question("please Enter Your name:",(name)=>{
    fs.writeFile('user.txt',name,(error)=>{
        if(error){
            console.log(error);
        }else{
            console.log("Your name is secussfully added to the file");
        }
        userInput.close()
    })
})