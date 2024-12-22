// Récupérer la date actuelle
const dateActuelle = new Date();

// Définir la date de naissance
const dateNaissance = new Date('2009-06-27');

// Calculer la différence entre les deux dates
const age = new Date(dateActuelle - dateNaissance);

console.log(`Âge: ${age.years} ans, ${age.months} mois, ${age.days} jours`);