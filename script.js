
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
            document.querySelectorAll(".coffee-card").forEach((card) => {
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
const faqButton = document.querySelectorAll(".faq-question");
console.log(faqButton);
faqButton.forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling
        faqButton.forEach((otherButton) => {
    if (otherButton !== button) {
        const otherAnswer = otherButton.nextElementSibling;

        otherAnswer.hidden = true;
        otherButton.setAttribute("aria-expanded", "false");
    }
});
        answer.hidden = !answer.hidden
        button.setAttribute("aria-expanded", String(!answer.hidden));
        console.log(answer);
    });
});
const revealSections = document.querySelectorAll(
    ".menu-section, .about-section, .contact-section, .faq-section"
);

console.log(revealSections);
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});
revealSections.forEach((section) => {
    section.classList.add("reveal-ready");
    revealObserver.observe(section);
});
const coffeeMenu = [
    {
        name: "Espresso",
        price: 3.50,
        category: "hot",
        description: "Rich and aromatic classic coffee.",
        image: "assets/espresso.png"
    },
    {
        name: "Cappuccino",
        price: 4.50,
        category: "hot",
        description: "Smooth espresso with creamy milk foam.",
        image: "assets/cappucino.png"
    },
    {
        name: "Iced Latte",
        price: 5.00,
        category: "cold",
        description: "Chilled espresso with silky milk and ice.",
        image: "assets/iced latte.png"
    }
];
const coffeeGrid = document.querySelector(".coffee-grid");

// Прибираємо старі картки зі сторінки
coffeeGrid.replaceChildren();

coffeeMenu.forEach((coffee) => {
    const card = document.createElement("div");
    card.classList.add("coffee-card");
    card.dataset.category = coffee.category;

    const image = document.createElement("img");
    image.src = coffee.image;
    image.alt = coffee.name;

    const title = document.createElement("h3");
    title.textContent = coffee.name;

    const description = document.createElement("p");
    description.textContent = coffee.description;

    const priceBox = document.createElement("div");
    priceBox.classList.add("coffee-price");

    const price = document.createElement("p");
    price.textContent = `$${coffee.price.toFixed(2)}`;

    priceBox.appendChild(price);
    card.append(image, title, description, priceBox);

    coffeeGrid.appendChild(card);
});



