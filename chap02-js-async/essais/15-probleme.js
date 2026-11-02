import { categories } from "../data/categories.js";
const getCategories = () => {
  setTimeout(() => {
    return categories;
  }, 10000);
};
const resultat = getCategories();
console.log("Resultat :", resultat);
