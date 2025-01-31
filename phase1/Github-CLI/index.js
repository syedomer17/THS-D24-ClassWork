const readline = require("readline-sync");
const axios = require("axios");

async function main() {
  try {
    const UserName = readline.question("Enter Your Github UseName: ");

    const url = `https://api.github.com/users/${UserName}`;

    const response = await axios.get(url);
    console.log(response.data);
    console.log("Public repos numbers:", response.data.public_repos);

    const repoUrl = `https://api.github.com/users/${UserName}/repos?per_page=100&sort=stars`;

    const repo = await axios.get(repoUrl);
    const user = repo.data;

    const topRepos = user.sort((a, b) => b - a).slice(0, 10);

    topRepos.forEach((repo, index) => {
      console.log(`${index + 1}.${repo.name}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
