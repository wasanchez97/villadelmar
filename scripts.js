document.addEventListener('DOMContentLoaded', () => {
    // Carrusel Noticias
    const noticiasContainer = document.querySelector('.carrusel-noticias');
    const noticias = noticiasContainer.querySelector('.noticias');
    const puntosContainer = noticiasContainer.querySelector('.puntos-carrusel-noticias');
    const noticiasItems = noticias.querySelectorAll('.noticia');
    let indiceActual = 0;
  
    noticiasItems.forEach((_, i) => {
      const punto = document.createElement('button');
      punto.classList.add('punto');
      if (i === 0) punto.classList.add('activo');
      punto.addEventListener('click', () => {
        indiceActual = i;
        moverCarruselNoticias();
        actualizarPuntosNoticias();
      });
      puntosContainer.appendChild(punto);
    });
  
    function moverCarruselNoticias() {
      const ancho = noticiasItems[0].offsetWidth;
      noticias.style.transform = `translateX(-${indiceActual * ancho}px)`;
    }
  
    function actualizarPuntosNoticias() {
      const puntos = puntosContainer.querySelectorAll('.punto');
      puntos.forEach((punto, i) => {
        punto.classList.toggle('activo', i === indiceActual);
      });
    }
  
    setInterval(() => {
      indiceActual = (indiceActual + 1) % noticiasItems.length;
      moverCarruselNoticias();
      actualizarPuntosNoticias();
    }, 5000);
  
    // Carrusel Historia
    const historiaContainer = document.querySelector('.carrusel-historia');
    const trackHistoria = historiaContainer.querySelector('.carrusel-track');
    const slidesHistoria = trackHistoria.children;
    let currentSlide = 0;
  
    function goToSlideHistoria(index) {
      trackHistoria.style.transform = `translateX(-${index * 100}%)`;
    }
  
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slidesHistoria.length;
      goToSlideHistoria(currentSlide);
    }, 4000);
  });
  