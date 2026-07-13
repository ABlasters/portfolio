// Récupérer la date actuelle
const dateActuelle = new Date();
const anneeActuelle = dateActuelle.getFullYear();
const moisActuel = dateActuelle.getMonth();
const jourActuel = dateActuelle.getDate();

// Définir la date de naissance
const dateNaissance = new Date('2009-06-27');

// Calculer l'âge en années
let age = anneeActuelle - dateNaissance.getFullYear();

// Ajuster si l'anniversaire n'est pas encore passé cette année
if (moisActuel < dateNaissance.getMonth() || (moisActuel === dateNaissance.getMonth() && jourActuel < dateNaissance.getDate())) { age--; }

console.log(`Âge: ${age} ans`);
const ageElement = document.getElementById('age');
if (ageElement) { ageElement.innerText = `${age} ans`; } else { console.error("Element with id 'age' not found."); }

// Page Clair / Sombre

document.getElementById("mod").addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        document.getElementById("mod").src = "icon/dark_mode.svg";
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        document.getElementById("mod").src = "icon/light_mode.svg";
    }
});

// Menu Burger
const burgerIcon = document.getElementById('burger-icon');
const headerMenu = document.querySelector('ul.header');
const navLinks = document.querySelectorAll('ul.header li a');

burgerIcon.addEventListener('click', function () {
    headerMenu.style.display = headerMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Fermer le menu burger lorsque l'utilisateur clique sur un lien et que la largeur de l'écran est inférieure ou égale à 1230px
if (window.innerWidth <= 1230) {       
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            headerMenu.style.display = 'none';
        });
    });
}