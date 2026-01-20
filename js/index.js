// variables pour target les éléments html sur lesquels intéragir
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    // ajoute la classe 'active' sur le bouton et le menu
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ferme le menu si on clique sur un lien
document.querySelectorAll('.menuItem').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});