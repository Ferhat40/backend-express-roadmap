// Exemple 1 — Premier programme : fonctions et template strings
// Exécution : node exemples/01-bonjour.js

// 1) Fonction classique
function saluer(personne) {
  return `Bonjour ${personne} !` // template string : backticks + ${...}
}

// 2) Même chose en fonction fléchée (on approfondit au chapitre 2)
const saluerVite = (personne) => `Salut ${personne} !`

console.log(saluer('Yassine'))
console.log(saluerVite('Groupe 80'))

// 3) Node n'a pas de DOM : "document" et "window" n'existent pas ici
console.log('typeof document =', typeof document) // "undefined"
console.log('typeof process  =', typeof process)  // "object" : propre à Node
