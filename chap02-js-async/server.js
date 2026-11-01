import { categories } from "../chap02-js-async/data/categories.js";
import {
  getNomsCategories,
  getProduits,
  getCategoriesParProduit,
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
