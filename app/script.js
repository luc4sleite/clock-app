const quotesBox = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle__button");
const btnText = document.getElementById("btn-text");
const btnIcon = document.getElementById("btn-icon");
const dropdownMenu = document.querySelector(".menu");


toggleBtn.addEventListener("click", () => {
    if (quotesBox.classList.contains("active")){
        quotesBox.classList.remove("active");
        quotesBox.style.display = "none";
        dropdownMenu.style.display = "flex";
        btnText.innerHTML = "Less";
        btnIcon.classList.remove("fa-angle-up");
        btnIcon.classList.add("fa-angle-down");
    } else {
        quotesBox.classList.add("active");
        quotesBox.style.display = "flex";
        dropdownMenu.style.display = "none";
        btnText.innerHTML = "More";
        btnIcon.classList.add("fa-angle-up");
        btnIcon.classList.remove("fa-angle-down");
    }
    
})
