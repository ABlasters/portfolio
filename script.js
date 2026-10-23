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

// Music
function Music() {
    if (document.getElementById('soundcloud-player')) {
        document.getElementById('soundcloud-player').remove();
        document.getElementById('pausePlayMusic').remove();
    }
    else {
        const iframe = document.createElement('iframe');
        iframe.id = 'soundcloud-player';
        iframe.style.display = 'none';
        iframe.width = '100%';
        iframe.height = '166';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2299612157&auto_play=false';
        document.body.appendChild(iframe);

        var widget = SC.Widget(iframe);
        widget.bind(SC.Widget.Events.READY, function () {
            document.getElementById('footer-text').innerHTML += ' <button id="pausePlayMusic" onclick="pausePlayMusic()" class="music-toggle" aria-label="charger le lecteur musical"><span aria-hidden="true">▶️</span></button>';
            widget.play();
        });

        widget.bind(SC.Widget.Events.PLAY, function () {
            if (document.getElementById('pausePlayMusic').innerHTML === '<span aria-hidden="true">▶️</span>') {
                widget.pause();
            }
        });

        widget.bind(SC.Widget.Events.FINISH, function () {
            Music(); // Le lecteur se décharge automatiquement lorsque la musique est terminée
        });
    }
}

function pausePlayMusic() {
    const iframe = document.getElementById('soundcloud-player');
    if (iframe) {
        var widget = SC.Widget(iframe);
        if (widget) {
            widget.isPaused(function (paused) {
                if (!paused) {
                    widget.pause();
                    document.getElementById('pausePlayMusic').innerHTML = '<span aria-hidden="true">▶️</span>';
                    document.getElementById('pausePlayMusic').setAttribute('aria-label', 'Reprendre le lecteur musical');
                } else {
                    widget.play();
                    document.getElementById('pausePlayMusic').innerHTML = '<span aria-hidden="true">⏸️</span>';
                    document.getElementById('pausePlayMusic').setAttribute('aria-label', 'Pause le lecteur musical');
                }
            });
        }
    }
}

// Page Clair / Sombre

document.getElementById("mod").addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        document.getElementById("mod").src = "icon/dark_mode.svg";
        document.getElementById("burger-icon").src = "icon/burger_dark.svg";
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        document.getElementById("mod").src = "icon/light_mode.svg";
        document.getElementById("burger-icon").src = "icon/burger_light.svg";
    }
});

// Menu Burger
const burgerIcon = document.getElementById('burger-icon');
const headerMenu = document.querySelector('ul.header');
const navLinks = document.querySelectorAll('ul.header li a');

burgerIcon.addEventListener('click', function () { if (window.innerWidth <= 1230) { if (headerMenu.style.display === 'flex') { headerMenu.style.display = 'none'; } else { headerMenu.style.display = 'flex'; } } });

navLinks.forEach(link => { link.addEventListener('click', function () { if (window.innerWidth <= 1230) { headerMenu.style.display = 'none'; } }); });

addEventListener('resize', function () { if (window.innerWidth > 1230) { headerMenu.style.display = 'flex'; } if (window.innerWidth <= 1230) { headerMenu.style.display = 'none'; } });

function applySystemTheme() {
    if (systemSettingDark.matches) {
        document.body.classList.add("dark-mode");
        document.getElementById("mod").src = "icon/light_mode.svg";
        document.getElementById("burger-icon").src = "icon/burger_light.svg";
    } else {
        document.body.classList.add("light-mode");
        document.getElementById("mod").src = "icon/dark_mode.svg";
        document.getElementById("burger-icon").src = "icon/burger_dark.svg";
    }
}

// detection automatique du mode clair/sombre du système d'exploitation
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');
systemSettingDark.addEventListener('change', applySystemTheme);
applySystemTheme();