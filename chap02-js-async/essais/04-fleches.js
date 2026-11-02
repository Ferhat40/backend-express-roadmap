function sommeClassique(a, b) {
  return a + b;
}

const sommeFleche = (a, b) => {
  return a + b;
};

const sommeCourte = (a, b) => a + b;

const double = (n) => n * 2;
const direBonjour = () => `bonjour`;

console.log(sommeClassique(2, 3));
console.log(sommeFleche(4, 5));
console.log(sommeCourte(3, 1));
console.log(double(9));
console.log(direBonjour);

const tripleA = (n) => n * 3;
const tripleB = (n) => {
  n * 3;
};
const tripleC = (n) => {
  return n * 3;
};

console.log("A :", tripleA(5));
console.log("B :", tripleB(5));
console.log("C :", tripleC(5));

/* resume de la lecon 4
(a, b) => a + b              // 2 paramètres : parenthèses obligatoires, return automatique
n => n * 2                   // 1 paramètre : parenthèses facultatives
() => 'Bonjour'              // 0 paramètre : () obligatoires
(a, b) => { return a + b }   // avec { } : return OBLIGATOIRE
maFonction                   // la recette  (une valeur, qu'on peut donner à map, then, Express...)
maFonction()                 // le gâteau  (on l'exécute)
*/
