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


// ! email js

const fillStarOne = document.getElementById('fillStarOne');
const fillStarTwo = document.getElementById('fillStarTwo');
const fillStarThree = document.getElementById('fillStarThree');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const popfca = document.querySelector('.popfca');
const popEmail = document.querySelector('.popEmail');

function checkEmptyFields() {
    // Check if name, email, and message are filled out
    if (nameInput.value.trim() === "") {
        fillStarOne.innerHTML = "*";
    } else {
        fillStarOne.innerHTML = "";
    }

    if (emailInput.value.trim() === "") {
        fillStarTwo.innerHTML = "*";
    } else {
        fillStarTwo.innerHTML = "";
    }

    if (messageInput.value.trim() === "") {
        fillStarThree.innerHTML = "*";
    } else {
        fillStarThree.innerHTML = "";
    }
}

function sendMail() {
    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;

    // Check if name, email, and message are filled out
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        fillStarOne.innerHTML = name.trim() === "" ? "*" : "";
        fillStarTwo.innerHTML = email.trim() === "" ? "*" : "";
        fillStarThree.innerHTML = message.trim() === "" ? "*" : "";
        popfca.style.display = "block";
        setInterval(() => {
            popfca.style.display = "none";
        }, 5000);

        return; // Stop execution if any field is empty
    }

    // Check if the email contains '@'
    if (!email.includes('@')) {
        fillStarTwo.innerHTML = "*"; 
        popEmail.style.display = "block";
        setInterval(() => {
            popEmail.style.display = "none";
        }, 3000);
        return; // Stop execution if email is invalid
    }

    // Sending email
    var params = {
        name: name,
        email: email,
        message: message,
    };

    const serviceID = "service_0s3capu";
    const templateID = "template_dbdwm4z";
    emailjs.send(serviceID, templateID, params)
        .then(res => {
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            console.log(res);
            alert("Your message sent successfully! We'll contact you soon!");
        })
        .catch(err => console.log(err));
}

// Event listeners to check for empty fields
nameInput.addEventListener('input', checkEmptyFields);
emailInput.addEventListener('input', checkEmptyFields);
messageInput.addEventListener('input', checkEmptyFields);
