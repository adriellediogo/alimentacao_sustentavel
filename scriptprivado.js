$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 3, // Quantidade de slides visíveis por vez
    slidesToScroll: 1, // Quantidade de slides a serem rolados por vez
    autoplay: true, // Autoplay do carrossel
    autoplaySpeed: 3000, // Velocidade do autoplay em milissegundos
    prevArrow: $('.prev'), // Botão de navegação para o slide anterior
    nextArrow: $('.next') // Botão de navegação para o próximo slide
  });
});

