document.addEventListener('DOMContentLoaded', function () {
  const botonModoOscuro = document.getElementById('modo-oscuro-btn');
  const cuerpoPagina = document.body;

  botonModoOscuro.addEventListener('click', function () {
      cuerpoPagina.classList.toggle('modo-oscuro');

      // Guarda el estado de modo oscuro en el almacenamiento local
      if (cuerpoPagina.classList.contains('modo-oscuro')) {
          localStorage.setItem('modo-oscuro', 'true');
      } else {
          localStorage.removeItem('modo-oscuro');
      }
  });

  // Verifica si el modo oscuro está activado al cargar la página
  if (localStorage.getItem('modo-oscuro') === 'true') {
      cuerpoPagina.classList.add('modo-oscuro');
  }
});
