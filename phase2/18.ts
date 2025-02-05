
function promisePrint(): Promise<string> {
    return new Promise((resolve) => {
        resolve('allowed')
    })
}

promisePrint()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
