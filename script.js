// ===== NAV HAMBURGER =====
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", () => nav.classList.add("active"));
    closeIcon.addEventListener("click", () => nav.classList.remove("active"));
    navLinks.forEach(link => link.addEventListener("click", () => nav.classList.remove("active")));

    // Active nav link highlight on scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");
            const link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach(l => l.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    });
});

// ===== TYPING ANIMATION =====
const texts = ["Developer", "IT Student", "Front/Back end Developer", "Tech Enthusiast"];
let index = 0, charIndex = 0, isDeleting = false;

function type() {
    const span = document.querySelector('.typing-text span');
    if (!span) return;
    const current = texts[index];
    span.textContent = isDeleting ? current.slice(0, --charIndex) : current.slice(0, ++charIndex);
    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }
    setTimeout(type, isDeleting ? 80 : 150);
}
type();

// ===== DARK / LIGHT MODE =====
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        const isLight = body.classList.contains("light-mode");
        toggle.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
});

// ===== SKILL BARS (Intersection Observer) =====
const skillFills = document.querySelectorAll(".skill-fill");
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("data-width") + "%";
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
skillFills.forEach(fill => skillObserver.observe(fill));

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
    ".about-card, .skill-category, .project-card, .timeline-item"
);
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
revealEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    revealObserver.observe(el);
});

// ===== COLOR THEME PICKER =====
document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".color-dot");
    const savedColor = localStorage.getItem("colorTheme") || "cyan";

    if (savedColor === "pink") {
        document.body.classList.add("pink-theme");
    }
    dots.forEach(dot => {
        if (dot.dataset.color === savedColor) dot.classList.add("active");
        else dot.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const color = dot.dataset.color;
            document.body.classList.toggle("pink-theme", color === "pink");
            dots.forEach(d => d.classList.remove("active"));
            dot.classList.add("active");
            localStorage.setItem("colorTheme", color);
        });
    });
});
