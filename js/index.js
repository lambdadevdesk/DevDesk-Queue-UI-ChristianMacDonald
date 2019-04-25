const hamburger_button = document.querySelector(".hamburger-button");
console.log(hamburger_button);
const nav_links = document.querySelectorAll(".mobile-main-nav a");
hamburger_button.addEventListener("click", event => {
    nav_links.forEach(element => {
        element.classList.toggle("hidden");
    });
});