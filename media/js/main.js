const hamburgerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('navbar__menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('visible');
});
