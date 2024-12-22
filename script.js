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
if (moisActuel < dateNaissance.getMonth() || (moisActuel === dateNaissance.getMonth() && jourActuel < dateNaissance.getDate())) {
    age--;
}

console.log(`Âge: ${age} ans`);
document.getElementById('age').innerText = `${age} ans`;