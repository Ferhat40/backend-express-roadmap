import { categories } from "../data/categories.js";

// sans destructuration
const habits = categories[0];
const nom1 = habits.nom;
const id1 = habits.id;
console.log("Sans: ", nom1, id1);

// avec destructuration
const { nom, id } = categories[1];
console.log("Avec: ", nom, id);

// une propriete qui n'existe pas
const { titre } = categories[1];
console.log("titre: ", titre); // undefined

// partie B : dans les parametres d'une fonction
const nomsIds = categories.map(({ nom, id }) => `${nom} ${id}`);
console.log("nomsIds: ", nomsIds);

// partie C : renommer une propriete
const { nom: nomCategorie, "commentaire-client": note } = categories[1];
console.log("Partie C: ", nomCategorie, note);

// partie D : tableau
const fruits = ["pomme", "mangue", "banane", "kiwi"];
const [premier, deuxieme] = fruits;
console.log("Partie D: ", premier, deuxieme);
//partie E : rest
const [tete, ...autres] = fruits;
console.log("Partie E: ", tete, autres);

const { produits, ...sansProduits } = categories[3];
console.log("Partie E:", sansProduits);


/* resume de destructuration
const { nom, id } = objet                 // objet : par NOM
const { nom: nomCategorie } = objet       // renommer
liste.map(({ nom, id }) => ...)           // directement dans les paramètres
const [premier, deuxieme] = tableau       // tableau : par POSITION
const [tete, ...autres] = tableau         // rest : le reste dans un tableau
const { produits, ...reste } = objet      // rest : tout sauf produits
*/