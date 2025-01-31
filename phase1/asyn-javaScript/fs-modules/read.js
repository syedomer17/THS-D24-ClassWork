const { errorMonitor } = require("events");
const fs = require("fs");

fs.readFile("simple.txt",(error,data)=>{
    if(error){
        console.log(error);
        return
    }else{
        console.log(data.toString());
    }
})
// write a program that will ask  the user to enter his name and then write the name to a file name as user.txt