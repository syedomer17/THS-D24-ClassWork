/*

function greetings(name, cb) {
    cb(name)
}

function print(name) {
    console.log(name)
}

greetings('john', print)
*/

function greetings(name:string, cb:(name:string)=>void):void {
  cb(name);
}

function print(name:string):void {
  console.log(name);
}

greetings("Syed Omer Ali", print);