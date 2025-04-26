const activeNodes = ['nodeA', 'nodeB', 'nodeC'];


const container = document.getElementById("nodeList");

console.log(container);


activeNodes.forEach(item => {
    let newLi = document.createElement("li");
    newLi.style.listStyle = "none";
    newLi.textContent = item;
    container.appendChild(newLi);
})