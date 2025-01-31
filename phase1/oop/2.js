class bootcamp {

    constructor(initiallValue){
        this.count = initiallValue;
    }
    inc(){
        this.count++;
    }
    dec(){
        this.count--;
    }
}
const student = new bootcamp(10);
console.log(student);
console.log(student.inc());
console.log(student);
console.log(student.dec());
console.log(student);