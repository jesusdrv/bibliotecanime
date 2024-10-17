// Abrir modales al hacer clic en los enlaces "Ver más"
document.querySelectorAll('.openModal').forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          var modalId = this.getAttribute('data-id');
          document.getElementById(modalId).style.display = 'flex';
      });
  });
  
  // Cerrar modales al hacer clic en la "X"
  document.querySelectorAll('.close').forEach(function(span) {
      span.addEventListener('click', function() {
          this.closest('.modal').style.display = 'none';
      });
  });
  
  // Cerrar el modal si el usuario hace clic fuera del contenido
  window.onclick = function(event) {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
      }
  };
  