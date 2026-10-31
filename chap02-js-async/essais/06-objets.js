import { categories } from "../data/categories.js";

const habits = categories[0];

console.log("Objet complet :", habits);
console.log("Nom :", habits.nom);
console.log("Nom (crochets) :", habits["nom"]);
console.log("Commentaire :", habits["commentaire-client"]);

const elect = categories[2];

console.log(categories[2].produits[1].nom);
console.log(categories[2].produits[0].prix);

const prof = { nom: "Yassine", cours: "Backend" };
console.log("Depart :", prof);

prof.cours = "Express";
console.log("Modifier :", prof);
prof.salle = "A1020";
console.log("Ajouter :", prof);
delete prof.nom;
console.log("Supprimer :", prof);
console.log("Propriete absente :", prof.telephone);

const prof2 = { nom: "Henry", prenom: "Duckouo", "code-employe": 187 };
console.log("Cles :", Object.keys(prof2));
console.log("Valeur :", Object.values(prof2));
console.log("Nombre de proprietes :", Object.keys(prof2).length);

console.log("A un prenom ? :", "prenom" in prof2);
console.log("A un age ?", prof2.hasOwnProperty("age"));

// resume de la lesson
/*
obj.nom   /   obj['code-employe']        // LIRE (crochets si tiret ou espace)
obj.a.b[0].c                             // NAVIGUER dans les poupées russes 🪆
obj.x = 1   /   delete obj.x             // AJOUTER / MODIFIER / SUPPRIMER
obj.inconnue                             // → undefined (pas d'erreur !)
Object.keys(obj)   /   Object.values(obj) // → tableaux des clés / des valeurs
'cle' in obj   /   obj.hasOwnProperty('cle') // → true / false
*/
