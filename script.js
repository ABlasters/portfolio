// Récupérer la date actuelle
const dateActuelle = new Date();
const moisActuel = dateActuelle.getMonth();

// Définir la date de naissance
const dateNaissance = new Date('2009-06-27');

// Calculer l'âge en années
let age = dateActuelle.getFullYear() - dateNaissance.getFullYear();

// Ajuster si l'anniversaire n'est pas encore passé cette année
if (moisActuel < dateNaissance.getMonth() || (moisActuel === dateNaissance.getMonth() && dateActuelle.getDate() < dateNaissance.getDate())) { age--; }

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

burgerIcon.addEventListener('click', function () { if (window.innerWidth <= 1230) { if (headerMenu.style.display === 'flex') { headerMenu.style.display = 'none'; } else { headerMenu.style.display = 'flex'; } } });

navLinks.forEach(link => { link.addEventListener('click', function () { if (window.innerWidth <= 1230) { headerMenu.style.display = 'none'; } }); });

addEventListener('resize', function () { if (window.innerWidth > 1230) { headerMenu.style.display = 'flex'; } if (window.innerWidth <= 1230) { headerMenu.style.display = 'none'; } });