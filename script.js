const slides = document.querySelectorAll('.slide');

const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');

let slideAtual = 0;

// Função para mostrar o slide
function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });

    slides[indice].classList.add('ativo');

}

// Evento da seta para avançar
proximo.addEventListener('click', () => {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);

});

// Evento da seta para voltar
anterior.addEventListener('click', () => {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);

});