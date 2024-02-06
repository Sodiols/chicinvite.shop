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


// * for prodcuts 

const allFilteritems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    })
});

function showFilteredContent(btn) {
    allFilteritems.forEach((item) => {
        if (item.classList.contains(btn.id)) {
            resetActiveBtn()
            btn.classList.add('active-btn');
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

function resetActiveBtn() {
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    })
}


// ! for email
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_0s3capu";
    const templateID = "template_dbdwm4z";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully! We'll contact you soon!")

        })
        .catch(err => console.log(err));

}
