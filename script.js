// Récupérer la date actuelle
const dateActuelle = new Date();

// Définir la date de naissance
const dateNaissance = new Date('2009-06-27');

// Calculer la différence entre les deux dates
const diff = new Date(dateActuelle - dateNaissance);

// Extraire les années, mois et jours de la différence
const age = {
    years: diff.getUTCFullYear() - 1970,
    months: diff.getUTCMonth(),
    days: diff.getUTCDate() - 1
};

console.log(`Âge: ${age.years} ans, ${age.months} mois, ${age.days} jours`);