// const fs = require("fs/promises");
const { error } = require("console")
const fs = require("fs")

// function  practice(data) {
//     return new Promise((resolve, reject) => {
//        if(data){
//         resolve("data is there")
//        }else{
//         reject("data is not there")
//        }
//     })
// }

// async function main() {
//     try {
//         let data = await fs.readFile("simple.txt");
//         let check = await practice(data);
//         console.log(check);
//         console.log(data.toString());
//     } catch (error) {
//         console.log(error);
//     }
// }
// main()

// function readFilePromises(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath,(error,data)=>{
//             if(error){
//                reject(error)
//             }else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }
// readFilePromises("simple.txt")
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// writefile

function writeFilePromises(path,data){
    return new Promise((resolve, reject) => {
        fs.writeFile(path,data,(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
}

async function main() {
    try {
        await writeFilePromises("simple.txt","Hi,I'm Omer");
        console.log("it is done");
    } catch (error) {
        console.log(error);
    }
}
main()