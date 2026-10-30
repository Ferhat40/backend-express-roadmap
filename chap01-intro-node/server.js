// Point d'entrée du chapitre 1 (exemple du cours)
// Lancer avec : npm start   (ou npm run dev pour le redémarrage automatique)

// Un simple message affiché dans la console
console.log("This is our server");

// Définition d'une fonction qui salue quelqu'un
function greet(name) {
  return `Bonjour, ${name}`;
}

// Appel de la fonction
greet("les étudiants de la Cité");
greet(`Yassine Ferhat`);
console.log(greet("Badaoui").toUpperCase());
console.log(greet(`ahla chwaber`));
