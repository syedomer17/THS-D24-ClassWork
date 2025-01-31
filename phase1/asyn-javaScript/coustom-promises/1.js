function pro(num){
    const p = new Promise((resolve, reject) => {
        if(num === 1){
            resolve("success")
        }else{
            reject("failed")
        }
    })
    return p;
}
// pro(1)
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

async function main() {
    try {
        let data = await pro(1);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
main()