const btnCon = document.querySelectorAll(".alert-btn");
console.log(btnCon);

const handleAlert = () => {
    console.log("Alert triggered");
}

btnCon.forEach(item => {
    item.addEventListener("click", () => {
        handleAlert();
    })
})
