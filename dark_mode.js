// script.js

// Sélectionner les éléments
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const themeImage = document.getElementById('theme-image');

// Définir les chemins des images pour chaque mode
const lightModeImage = 'icon/light_mode.svg'; // Remplace par ton chemin d'image
const darkModeImage = 'icon/dark_mode.svg';  // Remplace par ton chemin d'image

// Ajouter un gestionnaire d'événement au bouton
toggleButton.addEventListener('click', () => {
    // Basculer la classe "dark-mode" sur le body
    body.classList.toggle('dark-mode');

    // Changer l'image en fonction du mode
    if (body.classList.contains('dark-mode')) {
        themeImage.src = darkModeImage; // Image pour le mode sombre
        toggleButton.textContent = lightModeImage;
    } else {
        themeImage.src = lightModeImage; // Image pour le mode clair
        toggleButton.textContent = darkModeImage;
    }
});
