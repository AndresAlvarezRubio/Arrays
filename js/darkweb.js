const SWITCH = document.getElementById("switch");
let body = document.querySelector("body");
let imageChange = document.querySelector(".container-video");
let imageContainer = document.querySelector("figure");



SWITCH.addEventListener("click", e => {

    body.classList.toggle("active");

})

imageContainer.addEventListener("click", e => {

    imageChange.innerHTML ='<iframe src="https://www.youtube.com/embed/7j8ySSs_yww" title="Chase Status - Weed Rum (ft. Masicka)" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>';

})
