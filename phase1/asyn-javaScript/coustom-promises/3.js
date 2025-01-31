function prom(age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           if(age >= 18){
            resolve("allowed")
           }else{
            reject("not allowed")
           }
        }, 2000);
    })
}
async function main() {
    try {
       let data = await prom(18)
    console.log(data); 
    } catch (error) {
        console.log(error);
    }  
}
main()