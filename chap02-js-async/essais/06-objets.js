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
