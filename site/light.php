<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio LUCAS Arthur</title>
    <link rel="stylesheet" href="light.css">
    <link rel="stylesheet" href="commun.css">
</head>
<?php
// Récupérer la date actuelle
$date_actuelle = date('Y-m-d');

// Définir la date de naissance
$date_naissance = '2009-06-27';

// Calculer la différence entre les deux dates
$diff = date_diff(date_create($date_naissance), date_create($date_actuelle));
?>
<body>
    <nav>
        <ul class="header">
            <li><a href="#1">PRÉSENTATION</a></li>
            <li><a href="#2">À PROPOS</a></li>
            <li><a href="#3">COMPÉTENCES</a></li>
            <li><a href="#4">DIPLÔMES</a></li>
            <li><a href="#5">EXPÉRIENCE</a></li>
            <li><a href="#6">AUTRES INFORMATIONS</a></li>
            <li><a href="#7">CONTACT</a></li>
        </ul>
    </nav>
    <a href="index"><img class="mod" src="icon/dark_mode.svg" alt=""></a>
    <div id="1">
        <h1>PRÉSENTATION</h1>
        <p>Je suis LUCAS Arthur né le 27/06/2009, j'ai <?php echo $diff->y; ?> ans. J'habite à Aigrefeuille (17290). J'aime créer des sites sur mon temps libre comme celui ci ou celui de mon <a href="https://brevet.netlify.app">oral de brevet</a>, <span title="J'ai appris le php en codant ce site et plein de choses que je ne connaissait pas en html et css.">j'aime aussi apprendre de nouveau language de programation du web</span>, mais j'aime aussi créer des vidéos sur <a href="https://tiktok.com/@a.blasters">tiktok</a> ou <a href="https://youtube.com/@a.blasters">youtube</a>.</p>
    </div>
    <br>
    <div id="2">
        <h1>À PROPOS</h1>
        <p>Organisé dans mon travail, calme, curieux, motivé, je suis prêt à m’investir avec sérieux dans tout type de développement de site web.</p>
    </div>
    <br>
    <div id="3">
        <h1>COMPÉTENCES</h1>
        <p>Je maitrise les base du html et du css, <span title="Du choix des composants au montage dans la tour jusqu'à l'utilisation de windows">j'ai monté mon ordinateur</span>, Je m'adapte facilment au différent IDE et sais utiliser des logiciels de montage vidéos.</p>
    </div>
    <br>
    <div id="4">
        <h1>DIPLÔMES</h1>
        <p>Je suis au Lycée Marcel Dassault de Rochefort (17300) en seconde générale avec l'option science del'ingenieur (SI). J'ai eu mon brevet des collèges avec la mention bien et la certification pix.</p>
    </div>
    <br>
    <div id="5">
        <h1>EXPÉRIENCE</h1>
        <p>J'ai réalisé un stage d'observation en <span title="du 11 au 15">décembre 2023</span> dans l'entreprise <a href="https://Les-tilleuls.coop">Les-tilleuls.coop</a> durant lequel j'ai pu voir le travail en équipe, découvrir le javascript (JS) et créer un <a href="https://brevet.netlify.app/site_stage/index.html">portfolio</a>.</p>
    </div>
    <br>
    <div id="6">
        <h1>AUTRES INFORMATIONS</h1>
        <p>Je suis passionné par l'informatique et le web, j'aime aussi les jeux vidéos, j'ai passé le code de la route, ai commencé les leçons pour la conduite accompagné et ai le PSC1.</p>
    </div>
    <br>
    <div id="7">
        <h1>CONTACT</h1>
        <p>Vous pouvez me contacter par mail à l'adresse <a href="mailto:arthur.lucas17290@gmail.com" class="mail">arthur.lucas17290@gmail.com</a> ou par téléphone au <a href="tel:+33670630591">06 70 63 05 91.</a></p>
    </div>
</body>

</html>