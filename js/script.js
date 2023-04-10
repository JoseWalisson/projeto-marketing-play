// Fecha e abre o menu
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#icon-container span');
    const buttons = document.querySelectorAll('.buttons button');
  
    menu.addEventListener('click', function() {
      buttons.forEach(button => {
        if (button.style.display === 'none') {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      });
    });
  });