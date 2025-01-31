const readline = require("readline-sync");
const axios = require("axios");

const url = `https://appserver-w05c.onrender.com/add`;

async function main() {
    try {
        const n1 =  readline.questionInt('Enter the value of n1: ');
        const n2 =  readline.questionInt('Enter the value of n2: ');

        const response = await axios.get(`${url}/${n1}/${n2}`);
        const sum1 = response.data;
        console.log("The sum of n1 and n2 is", sum1);

        const n3 = readline.questionInt('Enter the value of n3: ');
        
        const response2 = await axios.get(`${url}/${sum1}/${n3}`);
        const sum2 = response2.data;
        console.log("The sum of n3 and sum1 is", sum2);

        const n4 = readline.questionInt('Enter the value of n4: ');

        const response3 = await axios.get(`${url}/${sum2}/${n4}`);
        const sum3 = response3.data;
        console.log("The sum of n4 and sum3 is ",sum3);
    } catch (error) {
        console.log(error);
    }
}
main()