console.log("start");
console.time("timer");

setTimeout(() => {
  console.log("timer 2");
  console.timeLog("timer");
}, 2000);

setTimeout(() => {
  console.log("timer 5");
  console.timeLog("timer");
  setTimeout(() => {
    console.log("timer 3");
    console.timeLog("timer");
  }, 3000);
}, 5000);

console.log("end");

/*
start
end
timer 2 :2s
timer 3 :3s
timer 5  :5s
total time: 5s


*/
