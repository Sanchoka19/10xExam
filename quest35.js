const breakArr = document.querySelectorAll(".breach-target");


breakArr.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("highlight");
    })
    
})