/*

function greetings(name, cb) {
    cb(name)
}

function print(name) {
    console.log(name)
}

greetings('john', print)
*/
function greetings(name, cb) {
    cb(name);
}
function print(name) {
    console.log(name);
}
greetings("Syed Omer Ali", print);
