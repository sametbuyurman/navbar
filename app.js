const nav = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const hamburgerDivs = document.querySelectorAll(".hamburger div");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        hamburgerDivs.forEach(d => d.style.backgroundColor = "black");
    } else {
        hamburgerDivs.forEach(d => d.style.backgroundColor = "black");
    }
});
