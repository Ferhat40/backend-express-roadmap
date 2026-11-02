import { categories } from "../chap02-js-async/data/categories.js";
import {
  getNomsCategories,
  getProduits,
  getCategoriesParProduit,
  getCategorie,
  calculerPrix,
  ajouterProduit,
  creerCategorie,
  getCategoriesServeur,
  rechercherCategorie,
} from "../chap02-js-async/modules/fonctions.js";

console.log("Q1:", getNomsCategories(categories));

console.log("Q2:", getProduits(categories[1]));

console.log(
  "Q3: mangue",
  getCategoriesParProduit(categories, "mangue").map(
    (categorie) => categorie.nom,
  ),
);
console.log(
  "Q3: courgettes",
  getCategoriesParProduit(categories, "courgettes").map(
    (categorie) => categorie.nom,
  ),
);
console.log("Q3: pizza", getCategoriesParProduit(categories, "pizza"));

console.log("Q4: 3", getCategorie(categories, 3));
console.log("Q4: 99", getCategorie(categories, 99));

console.log("Q5 :", calculerPrix(categories[2]));
console.log("Q5 habits :", calculerPrix(categories[0]));

const nouveauProduit = { id: 20, nom: "monteau", prix: 150 };
const nouvelleCategorie = ajouterProduit(categories[2], nouveauProduit);
console.log(
  "Q6 nouvelle : ",
  nouvelleCategorie.produits.map((produit) => produit.nom),
);
console.log(
  "Q6 originale : ",
  categories[2].produits.map((produit) => produit.nom),
);

const boissons = creerCategorie(
  50,
  "boissons",
  5,
  { id: 111, nom: "Fanta", prix: 45 },
  { id: 112, nom: "Sprite", prix: 40 },
  { id: 113, nom: "The", prix: 10 },
);

console.log("Q7 : ", boissons);

console.log("Q8 id 2 : ", await rechercherCategorie(2));
console.log("Q8 id 99 : ", await rechercherCategorie(99));
