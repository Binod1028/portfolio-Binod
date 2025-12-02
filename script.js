const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const expanded = navLinks.classList.contains("open");
    menuButton.setAttribute("aria-expanded", expanded);
    menuButton.textContent = expanded ? "✕" : "☰";
});

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill out all required fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you! Your message has been sent.";
        formMessage.style.color = "lightgreen";
        contactForm.reset();
    }
});
