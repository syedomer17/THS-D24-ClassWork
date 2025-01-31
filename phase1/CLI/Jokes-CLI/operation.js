
const readlineSync = require("readline-sync");
const jokesData = require("./jokesData.json");

const CATEGORY = ["Programming", "Spooky", "Pun"];

function getJokeByCategory() {
  CATEGORY.forEach((c, index) => console.log(`${index + 1}. ${c}`));
  const selectCatIndex =
    readlineSync.questionInt("Select any one category? : ") - 1;

  if (selectCatIndex < 0 || selectCatIndex > CATEGORY.length - 1) {
    console.log(chalk.red("Invalid Option"));
    return;
  }

  const selectedCategory = CATEGORY[selectCatIndex];

  const filteredJokes = jokesData.filter(
    (joke) => joke.category == selectedCategory
  );

  const randomIndex = randomRange(0, filteredJokes.length);

  const joke = filteredJokes[randomIndex];

  if (joke.type == "twopart") {
    console.log(joke.setup);
    console.log(joke.delivery);
  } else if (joke.type == "single") {
    console.log(joke.joke);
  }
}

function getRandomJoke() {
  const randomIndex = randomRange(0, jokesData.length);

  const joke = jokesData[randomIndex];

  if (joke.type == "twopart") {
    console.log(joke.setup);
    console.log(joke.delivery);
  } else if (joke.type == "single") {
    console.log(joke.joke);
  }
}
getRandomJoke();

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports =
 { getJokeByCategory, getRandomJoke };
