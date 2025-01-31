const fs = require("fs/promises")
const readline = require('readline-sync');

const userInput = readline.question('Enter your Name: ');

const update = `Hello ${userInput.toString()},How are you?`

const output = fs.writeFile("user.txt", update);

const read = fs.readFile('user.txt');

output
    .then(() => {
        console.log("sucessfully added");

        read.then((data) => {
            console.log(data.toString());
        })
            .catch((error) => {
                console.log(error);
            })
    })
    .catch((error) => {
        console.log(error);
    })