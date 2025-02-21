document.addEventListener("DOMContentLoaded", function(){
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response=>{
      const list = response.data  
      const tableBody = document.getElementById("table-body");
      list.forEach(element => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.completed ? "Done" : " Pending "}</td>
        `;
        tableBody.appendChild(row)
      });
    })
    .catch((error)=>{
        console.log(error);
    })
});