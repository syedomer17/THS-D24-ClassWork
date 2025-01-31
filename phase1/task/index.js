/*
https://appserver-w05c.onrender.com/add/10/20

create a program where you ask the user to to enter n1 and n2 
1.make a request to get the sum1 = n1+n2 and then ask the user to enter n3 
2.make  a request to get the sum2 = n1+sum1 and then as the user for enter n4
3.make a  request to get the sum3=sum2+n4 and print it 

use nested .then .catch 

readline-sync

axios

*/

const readline = require("readline-sync");
const axios = require("axios");

const url = `https://appserver-w05c.onrender.com/add`;

function getsum(a, b) {
  return axios.get(`${url}/${a}/${b}`);
}

const n1 = readline.questionInt("Enter the value of n1: ");
const n2 = readline.questionInt("Enter the value of n2: ");

getsum(n1, n2)
  .then((response) => {
    const sum1 = response.data;
    console.log("The sum of n1 and n2:", sum1);

    const n3 = readline.questionInt("Enter the value of n3: ");
    getsum(sum1, n3)
      .then((response) => {
        const sum2 = response.data;
        console.log("The sum of sum1 and n3:", sum2);

        const n4 = readline.questionInt("Enter the value of n4: ");
        getsum(sum2, n4)
          .then((response) => {
            const sum3 = response.data;
            console.log("The sum of sum2 and n4:", sum3);
          })
          .catch((error) => {
            console.error("Error in sum3 request:", error);
          });
      })
      .catch((error) => {
        console.error("Error in sum2 request:", error);
      });
  })
  .catch((error) => {
    console.error("Error in sum1 request:", error);
  });
