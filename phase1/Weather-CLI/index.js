require('dotenv').config();
const axios = require('axios');
const readline = require('readline-sync')


const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

const cityName = readline.question("Enter The city Name: ").toLocaleLowerCase().trim()


const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPENWEATHER_API_KEY}&units=metric`;

axios.get(url)
.then((respose)=>{
    console.log(respose.data);
})
.catch((error)=>{
    console.log(error);
})

