// variables pour target les éléments html sur lesquels intéragir
const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  // ajoute la classe 'active' sur le bouton et le menu
  burgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// ferme le menu si on clique sur un lien
document.querySelectorAll(".menuItem").forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// // ANIMATION RETOUR HAUT DE PAGE
document
  .querySelector(".footer-anchor a")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // const startPosition = window.pageYOffset;
      // const targetPosition = targetElement.offsetTop;
      // const distance = targetPosition - startPosition;
      // const duration = 2000; // 5 secondes
      // let start = null;

      // function animation(currentTime) {
      //   if (start === null) start = currentTime;
      //   const timeElapsed = currentTime - start;
      //   const run = ease(timeElapsed, startPosition, distance, duration);
      //   window.scrollTo(0, run);
      //   if (timeElapsed < duration) requestAnimationFrame(animation);
      // }

      // function ease(t, b, c, d) {
      //   t /= d / 2;
      //   if (t < 1) return c / 2 * t * t + b;
      //   t--;
      //   return -c / 2 * (t * (t - 2) - 1) + b;
      // }

      // requestAnimationFrame(animation);

      targetElement.scrollIntoView({
        behavior: "smooth", // C'est ici que l'animation se fait
        block: "start", // Aligne le haut de l'élément au haut de la page
      });
    }
  });
// // FIN ANIMATION RETOUR HAUT DE PAGE

//TODO: Fonction qui change l'image au clique de la souris
window.addEventListener("mouseup", () => {
  document.body.classList.add("onclick");
});

window.addEventListener("mousedown", () => {
  document.body.classList.remove("onclick");
});
