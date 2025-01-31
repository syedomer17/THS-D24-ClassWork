const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/users";

// axios.get(url)
// .then((response)=>{
//     console.log(response.data);
// })
// .catch((error)=>{
//     console.log(error);
// })

async function main() {
    try {
       let response = axios.get(url);
       console.log((await response).data); 
    } catch (error) {
      console.log(error);  
    }
}