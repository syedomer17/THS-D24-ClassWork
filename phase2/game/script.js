const tbody = document.querySelector("tbody");

function main() {
  let cells = 10;
  let count = 1;

  for (let i = 1; i <= cells; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= cells; j++) {
        
      let td = document.createElement("td");
      
      td.addEventListener("click", userHandleClick); 
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function userHandleClick(e) {
  const numberClicked = Number((e.target.textContent));

  if(numberClicked == 1){
    alert("You have win the game ")
  }
}

main();
