const h2Element = document.getElementById('changingH2');
const h2Texts = ['Creative', 'Team player', 'Curious', 'Organized', 'Ambitious', 'Detail-oriented'];
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
    const filterButtons = document.querySelectorAll('.btn-f');
    const projects = document.querySelectorAll('.project-container');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default behavior
        
        const filter = button.getAttribute('data-filter');
        filterSelection(filter);
  
        // Fjern 'is-active' og 'active' klassen fra alle knapper
        filterButtons.forEach(btn => {
          btn.classList.remove('is-active');
          btn.classList.remove('active');
        });
        // Tilføj 'is-active' og 'active' klassen til den valgte knap
        button.classList.add('is-active');
        button.classList.add('active');
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
    // Set initial active state for "All" button
    const allButton = document.querySelector('button[data-filter="all"]');
    if (allButton) {
      allButton.classList.add('is-active');
      allButton.classList.add('active');
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    // Håndter klik på billedikoner
    document.querySelectorAll(".icon-card.is-clickable").forEach(icon => {
        icon.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            modalImage.src = imgSrc; // Sæt billedets kilde
            modal.classList.add("is-active"); // Vis modal
        });
    });

    // Luk modal ved klik på baggrund eller luk-knap
    modal.querySelector(".modal-background").addEventListener("click", function () {
        modal.classList.remove("is-active");
    });

    modal.querySelector(".modal-close").addEventListener("click", function () {
        modal.classList.remove("is-active");
    });
});

// Skills Progress Bar Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Set up intersection observer for skill animations
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillProgress = entry.target.querySelector('.skill-progress');
                const percentage = skillProgress.getAttribute('data-percentage');
                
                // Animate the progress bar
                setTimeout(() => {
                    skillProgress.style.setProperty('--target-width', percentage + '%');
                    skillProgress.style.width = percentage + '%';
                    entry.target.classList.add('animate');
                }, 200);
                
                // Stop observing once animated
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Start observing all skill items
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
});