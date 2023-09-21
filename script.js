//! nav open

// JavaScript for the mobile menu toggle
const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
        bar.style.transform = navbarLinks.classList.contains("active") ? `rotate(45deg)` : `rotate(0)`;
        bar.style.top = navbarLinks.classList.contains("active") && index === 0 ? "8px" : "0";
        bar.style.bottom = navbarLinks.classList.contains("active") && index === 2 ? "8px" : "0";
    });
});


//! nav close