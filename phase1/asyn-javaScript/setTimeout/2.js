console.log("start");

setTimeout(function timer2() {
  console.log("This is Timer 2");
});

setTimeout(function timer1() {
  console.log("This is Timer 1");
});

function normal() {
  console.log("this is normal function");
}

console.log("end");
normal();
