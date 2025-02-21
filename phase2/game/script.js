const tbody = document.querySelector("tbody");

function main() {
  let cells = 10;
  let arr = [];
  let count = 1;
  for(let i = 1 ; i<=cells * cells; i++)
    arr.push(i);

  arr.sort(()=> Math.random() - 0.5)

  for (let i = 1; i <= cells; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= cells; j++) {
      let td = document.createElement("td");
      td.setAttribute("data-value", arr[count++]); 
      td.textContent = "";

      td.addEventListener("click", userHandleClick);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function userHandleClick(e) {
  const cell = e.target;
  const numberClicked = Number(cell.getAttribute("data-value")); 

  
  cell.textContent = numberClicked;

  if (numberClicked === 1) {
    alert("You have won the game!");
  }

  cell.classList.add("disabled");
}

main();
