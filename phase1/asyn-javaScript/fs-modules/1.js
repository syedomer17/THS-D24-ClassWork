const fs = require("fs");

console.log("start");

// This work's Asynchronously callBack

fs.writeFile("simple.txt", "Hello,I'm Omer", (error) => {
  if (error) {
    console.log(error);
  }
  console.log("successFully added.");
});

console.log("end");
