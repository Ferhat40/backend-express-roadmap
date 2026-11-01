import { categories } from "../chap02-js-async/data/categories.js";
import {
  getNomsCategories,
  getProduits,
} from "../chap02-js-async/modules/fonctions.js";

console.log("Q1:", getNomsCategories(categories));

console.log("Q2:", getProduits(categories[1]));
