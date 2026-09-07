// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// =========================
// CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    try {
        const response = await fetch("/contact", {
            method: "POST",
            body: formData
        });

        if (response.ok) {

            alert("Message sent successfully! ✅");

            contactForm.reset();

        } else {

            alert("Message could not be sent. ❌");

        }

    } catch (error) {

        alert("Something went wrong. Please try again. ❌");

    }

});