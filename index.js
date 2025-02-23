document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-links');
  
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      nav.classList.toggle('is-active');
  
      // Opdater aria-expanded for bedre tilgængelighed
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", !expanded);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});