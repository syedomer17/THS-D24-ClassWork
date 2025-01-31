function Age(a){
    const p = new Promise((resolve, reject) => {
        if(a>=18){
            resolve("allowed")
        }else{
            reject("Not allowed")
        }
    })
    return p;
}
async function main() {
    try {
        let data = await Age(19);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
main();

Age(18)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})