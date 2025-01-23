console.log("start");
console.time("timer");

setTimeout(() => {
  console.log("This is Timer 1");
  console.timeLog("timer");
}, 2000);

setTimeout(() => {
  console.log("This is Timer 2");
  console.timeLog("timer");

  console.timeEnd("timer");
}, 1000);

console.log("end");
