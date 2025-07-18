// Placeholder untuk animasi atau interaksi tambahan
document.addEventListener("DOMContentLoaded", () => {
    console.log("Landing page loaded.");
});

// Slider atau carousel (jika ada)
let slides = document.querySelectorAll(".hero-slider .slide");
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}
setInterval(nextSlide, 4000); // Ganti slide setiap 4 detik


setInterval(nextSlide, 4000); // Ganti slide tiap 4 detik
// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// let slides = document.querySelectorAll(".hero-slider .slide");
// let currentSlide = 0;

// function nextSlide() {
//     slides[currentSlide].classList.remove("active");
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add("active");
// }

