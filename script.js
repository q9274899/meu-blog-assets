let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    slides[slideIndex].classList.add('active');
    setTimeout(nextSlide, 3000); // Avança o slide a cada 3 segundos
}

function nextSlide() {
    plusSlides(1);
}
