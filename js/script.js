window.addEventListener("load", function() {
    
    const navbar = document.getElementById("navbar");
    navbar.style.top = "0"; 
});
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');


slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    const translateValue = -index * 100;
    slider.style.transform = `translateX(${translateValue}%)`;

    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}


setInterval(nextSlide, 3000); 
goToSlide(currentIndex); 

const elementosAnimados = document.querySelectorAll('.elemento-con-animacion');

function verificarElementosEnPantalla() {
    elementosAnimados.forEach(elemento => {
        const distanciaAlTope = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;

        if (distanciaAlTope < alturaVentana) {
            elemento.style.opacity = 1;
            elemento.style.transform = 'translateY(0)';
        }
    });
}

verificarElementosEnPantalla(); 

window.addEventListener('scroll', verificarElementosEnPantalla);
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider_v');
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = document.querySelector('.slide_v').offsetWidth;
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot_v');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        showSlide(currentIndex);
        updateDots();
    }

    function startAutoSlide() {
        setInterval(nextSlide, 3000); 
    }

    
    startAutoSlide();
});
