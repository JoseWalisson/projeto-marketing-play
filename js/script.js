document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('#icon-container');
  const buttons = document.querySelectorAll('.buttons button');
  const iconAbrir = document.querySelector('#icon-container > span');
  const iconFechar = document.querySelector('#icon-container .fechar span');

  menu.addEventListener('click', function() {
    buttons.forEach(button => {
      if (button.style.display === 'none') {
        button.style.display = 'block';
        iconAbrir.style.display = 'none';
        iconFechar.style.display = 'block';
      } else {
        button.style.display = 'none';
        iconAbrir.style.display = 'block';
        iconFechar.style.display = 'none';
      }
    });
  });
});