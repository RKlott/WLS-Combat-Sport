const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    // On bascule la classe 'active' sur le bouton et le menu
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Optionnel : Fermer le menu si on clique sur un lien
document.querySelectorAll('.menuItem').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});