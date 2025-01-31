const axios = require("axios");

async function main() {
  try {
    
    let responser = await axios.get(
      `https://appserver-w05c.onrender.com/add/1/2`
    );
    console.log(responser.data);

    let response2 = await axios.get(
      `https://appserver-w05c.onrender.com/add/3/5`
    );
    console.log(response2.data);
    
  } catch (error) {
    console.log(error);
  }
}
main()