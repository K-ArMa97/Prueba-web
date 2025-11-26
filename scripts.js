document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");
    const menuLogo = document.querySelector(".menu-logo");
    menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open")
            menuLogo.classList.toggle("menu-active");
});
});
