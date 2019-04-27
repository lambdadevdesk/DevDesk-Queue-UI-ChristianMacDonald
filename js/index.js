class HamburgerButton {
    constructor(element) {
        this.element = element;
        this.nav_links = document.querySelectorAll(".mobile-main-nav a");
        this.element.addEventListener("click", event => {
            this.toggleHidden();
        });
    }

    toggleHidden() {
        this.nav_links.forEach(element => {
            element.classList.toggle("hidden");
        });
    }
}

const hamburger_button = new HamburgerButton(document.querySelector(".hamburger-button"));