document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const menuList = document.getElementById("menuList");

    // Initialize menu as closed
    menuList.style.display = "none";
    menuIcon.style.backgroundColor = "transparent";

    menuIcon.addEventListener("click", () => {
        if (menuList.style.display === "none") {
            menuList.style.display = "flex";
            menuIcon.style.backgroundColor = "rgba(89, 85, 84, 0.1)";
        } else {
            menuList.style.display = "none";
            menuIcon.style.backgroundColor = "transparent";
        }
    });

    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
            menuList.style.display = "none";
            menuIcon.style.backgroundColor = "transparent";
        }
    });

    const menuLinks = menuList.querySelectorAll("a");
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuList.style.display = "none";
            menuIcon.style.backgroundColor = "transparent";
        });
    });

    function submitForm(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form inputs
        var name = document.querySelector("#contact-form input[name='Name']").value.trim();
        var email = document.querySelector("#contact-form input[name='Email']").value.trim();
        var message = document.querySelector("#contact-form textarea[name='Message']").value.trim();

        // Validate data
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Clear form data
        document.querySelector("#contact-form").reset();

        // Alert the user for successful submission
        alert("Form submitted successfully !");
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", submitForm);
    }
});