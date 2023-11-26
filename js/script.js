window.addEventListener("load", function() {
    // Cuando la página se carga completamente
    const navbar = document.getElementById("navbar");
    navbar.style.top = "0"; // Muestra la barra de navegación deslizándola hacia arriba
});
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');

// Crear un punto (indicador) para cada slide
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

    // Actualizar el estilo de los puntos
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}

// Iniciar el carrusel automáticamente
setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos
goToSlide(currentIndex); // Muestra el primer slide activo

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

verificarElementosEnPantalla(); // Comprobar elementos al cargar la página

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
        setInterval(nextSlide, 3000); // Cambia cada 3 segundos (ajusta según tus necesidades)
    }

    // Agrega los eventos para los botones y los puntos si los tienes
    startAutoSlide();
});
