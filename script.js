/* ===== THEME & BACKGROUND SWITCHING ===== */
const themeButton = document.getElementById('themeButton');
const body = document.body;

// I-APPLY ANG NAKA-SAVE NA THEME
function applySavedTheme() {
    const saved = localStorage.getItem('theme');
    
    if (saved === 'light') {
        body.classList.add('light-theme');
        themeButton.textContent = '🌙';
    } else {
        body.classList.remove('light-theme');
        themeButton.textContent = '☀️';
    }
}

applySavedTheme();

// CLICK HANDLER — NAGPAPALIT NG THEME AT BACKGROUND
themeButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        // SWITCH TO DARK MODE
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = '☀️';
    } else {
        // SWITCH TO LIGHT MODE
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        themeButton.textContent = '🌙';
    }
});


/* =========================
   WELCOME MESSAGE
========================= */
const welcomeButton = document.getElementById("welcomeButton");
if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        alert("Welcome to my Pixel Portfolio! 💜");
    });
}


/* =========================
   DATE AND TIME
========================= */
const clock = document.getElementById("clock");
function updateClock() {
    const now = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };
    if (clock) {
        clock.innerHTML = now.toLocaleString("en-PH", options);
    }
}
updateClock();
setInterval(updateClock, 1000);


/* =========================
   BACK TO TOP
========================= */
const topButton = document.getElementById("topButton");
if (topButton) {
    window.addEventListener("scroll", function () {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/* =========================
   CONTACT FORM
========================= */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const name = nameInput ? nameInput.value : "Friend";
        alert("Thank you, " + name + "! Sending your message... 💜");
    });
}

/* =========================
   NAVIGATION ACTIVE
========================= */
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});