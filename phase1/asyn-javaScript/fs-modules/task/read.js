const fs = require("fs");

fs.readFile("user.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const update = `Hello ${data.toString()}, how are you?`;

  fs.writeFile("user.txt", update, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Successful added");
  });
});
