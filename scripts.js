document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", function () {
        if(navLinks.classList.contains("open")) {
            navLinks.classList.remove("open");
            navLinks.classList.add("close");
        }else{
            navLinks.classList.remove("close");
            navLinks.classList.add("open");
        }});
});
