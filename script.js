// Seleciona o botão e o menu
const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

// Adiciona um evento de clique para alternar o menu
menuToggle.addEventListener('click', () => {
  menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});
