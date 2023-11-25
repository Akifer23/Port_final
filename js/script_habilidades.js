let customCurrentIndex = 0;
const customTotalSlides = document.querySelectorAll('.custom-slide').length;

function customShowSlide(index) {
    const customSlider = document.querySelector('.custom-slider');
    const customSlideWidth = document.querySelector('.custom-slide').clientWidth;

    if (index >= customTotalSlides) {
        customCurrentIndex = 0;
    } else if (index < 0) {
        customCurrentIndex = customTotalSlides - 1;
    } else {
        customCurrentIndex = index;
    }

    const transformValue = -customCurrentIndex * customSlideWidth;
    customSlider.style.transform = `translateX(${transformValue}px)`;
}

function customNextSlide() {
    customShowSlide(customCurrentIndex + 1);
}

function customPrevSlide() {
    customShowSlide(customCurrentIndex - 1);
}