const carrouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

//Configurar o contador de imagem e largura do slide
let counter = 1;
const size = images[0].clientWidth;

//Movendo automaticamente o carrossel
function nextSlide() {
    if (counter >= images.length - 1) return;
    carrouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carrouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

//Executar a função nextSlide
setInterval(nextSlide, 3000);