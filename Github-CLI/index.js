const readline = require("readline-sync");
const axios = require('axios');

const UserName = readline.question("Enter Your Github UseName: ");

const url = `https://api.github.com/users/${UserName}`;

async function main() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
main();