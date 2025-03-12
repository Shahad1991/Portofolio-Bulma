const h2Element = document.getElementById('changingH2');
const h2Texts = ['kreativ', 'samarbeidsvillig', 'nysgerrig', 'struktureret', 'ambitiøs', 'detaljeorienteret', 'imødekommende'];
let currentIndex = 0;
let letterIndex = 0;

function typeWriter() {
    if (letterIndex < h2Texts[currentIndex].length) {
        h2Element.textContent += h2Texts[currentIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWriter, 100); // Juster hastigheden her
    } else {
        setTimeout(eraseText, 1000); // Juster pause før sletning her
    }
}

function eraseText() {
    if (letterIndex > 0) {
        h2Element.textContent = h2Element.textContent.slice(0, -1);
        letterIndex--;
        setTimeout(eraseText, 50); // Juster sletningshastigheden her
    } else {
        currentIndex = (currentIndex + 1) % h2Texts.length;
        setTimeout(typeWriter, 300); // Juster tid før skrivning starter igen her
    }
}

typeWriter(); // Start the typing animation

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

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-container');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        filterSelection(filter);
  
        // Fjern 'is-active' klassen fra alle knapper
        filterButtons.forEach(btn => btn.classList.remove('is-active'));
        // Tilføj 'is-active' klassen til den valgte knap
        button.classList.add('is-active');
      });
    });
  
    function filterSelection(filter) {
      projects.forEach(project => {
        if (filter === 'all' || project.classList.contains(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    }
  
    // Initial visning af alle projekter
    filterSelection('all');
  });