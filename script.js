// =========================
// MOBILE MENU
// =========================


/* MOBILE MENU */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* EMAILJS SETUP */
emailjs.init({
    publicKey: "8uQ-yg-f3JTWom-at"
});

/* CONTACT FORM */
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "service_ctiublp",
        "template_4zncgki",
        contactForm
    )
    .then(() => {
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Sorry, your message could not be sent. Please try again.");
    })
    .finally(() => {
        button.disabled = false;
        button.textContent = "Send Message";
    });
});
