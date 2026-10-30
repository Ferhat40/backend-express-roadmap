import presenter, { carre, saluer } from "../modules/outils.js";

console.log(saluer(`Yassine`));
console.log(carre(6));
console.log(presenter(`Yassine`, 20));

/*
// modules/outils.js
export const carre = (n) => n * n          // export NOMMÉ (autant qu'on veut)
const secret = '...'                       // pas d'export → privé
export default presenter                   // export PAR DÉFAUT (un seul par fichier)

// essais/05-modules.js
import presenter, { carre } from '../modules/outils.js'
//     └ défaut : nom libre, sans { }
//                └ nommés : noms EXACTS, avec { }
*/
