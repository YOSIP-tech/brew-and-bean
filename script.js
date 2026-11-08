
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});
const yearElement = document.querySelector("#current-year");

const currenYear = new Date().getFullYear();
yearElement.textContent = currenYear;
const backToTopButton = document.querySelector("#back-to-top");

backToTopButton.addEventListener("click", () => {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
          
});
function updateBackToTopVisibility() {
    if (window.scrollY > 300){
        backToTopButton.classList.add("is-visible");
    }else {
        backToTopButton.classList.remove("is-visible");
    }
}
window.addEventListener("scroll", updateBackToTopVisibility);
updateBackToTopVisibility();
const filterButtons = document.querySelectorAll(".coffee-filters button");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => {
            item.classList.remove("is-active");
            item.setAttribute("aria-pressed", "false");
        });
            button.classList.add("is-active");
            button.setAttribute("aria-pressed", "true");                    
        coffeeCards.forEach((card) => {
        if(button.dataset.filter === "all" ||
           button.dataset.filter === card.dataset.category) {
            card.classList.remove("is-hidden")
        }else {
            card.classList.add("is-hidden")
        };
});
    });
});
const coffeeCards = document.querySelectorAll(".coffee-card")

