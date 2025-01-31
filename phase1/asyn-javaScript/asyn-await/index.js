const fs = require("fs/promises");

async function main() {
    try {
        let data = await fs.readFile("user.txt")
        const newData = `hello ${data},How are you?`;
        await fs.writeFile("user.txt",newData);
        console.log("successfully added the data");
    } catch (error) {
        console.log(error);
    }
}
main()