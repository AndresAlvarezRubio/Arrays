const SWITCH = document.getElementById("switch");
let body = document.querySelector("body");

SWITCH.addEventListener("click", e => {

    body.classList.toggle("active");

})
