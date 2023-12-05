let customSlideIndex = 0;

function showCustomSlides() {
  let i;
  const customSlides = document.getElementsByClassName("custom-slide");

  for (i = 0; i < customSlides.length; i++) {
    customSlides[i].style.display = "none";
  }

  customSlideIndex++;

  if (customSlideIndex > customSlides.length) {
    customSlideIndex = 1;
  }

  customSlides[customSlideIndex - 1].style.display = "block";
  setTimeout(showCustomSlides, 9000); 
}

function customChangeSlide(n) {
  customSlideIndex += n;
  const customSlides = document.getElementsByClassName("custom-slide");

  if (customSlideIndex > customSlides.length) {
    customSlideIndex = 1;
  } else if (customSlideIndex < 1) {
    customSlideIndex = customSlides.length;
  }

  for (let i = 0; i < customSlides.length; i++) {
    customSlides[i].style.display = "none";
  }

  customSlides[customSlideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", showCustomSlides);

   // JavaScript para manejar la animación al deslizar
   window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '50';
            element.style.transform = 'translateY(0)';
        }
    });
});


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
$(document).ready(function(){
  $('.slider_ciclismo').slick({
     autoplay: true,
     autoplaySpeed: 3000,
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     adaptiveHeight: true
  });
});
let habilidadesCurrentIndex = 0;
const habilidadesTotalSlides = document.querySelectorAll('.slider_habilidades .custom-slide').length;

function habilidadesShowSlide(index) {
    const habilidadesSlider = document.querySelector('.slider_habilidades');
    const habilidadesSlideWidth = document.querySelector('.slider_habilidades .custom-slide').clientWidth;

    if (index >= habilidadesTotalSlides) {
        habilidadesCurrentIndex = 0;
    } else if (index < 0) {
        habilidadesCurrentIndex = habilidadesTotalSlides - 1;
    } else {
        habilidadesCurrentIndex = index;
    }

    const transformValue = -habilidadesCurrentIndex * habilidadesSlideWidth;
    habilidadesSlider.style.transform = `translateX(${transformValue}px)`;
}

function habilidadesNextSlide() {
    habilidadesShowSlide(habilidadesCurrentIndex + 1);
}

function habilidadesPrevSlide() {
    habilidadesShowSlide(habilidadesCurrentIndex - 1);
}
