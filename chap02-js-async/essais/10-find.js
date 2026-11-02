import { categories } from "../data/categories.js";

const prix = [40, 80, 50, 90];
console.log(
  "Premier > 60 :",
  prix.find((p) => p > 60),
);
console.log(
  "Premier > 100 :",
  prix.find((p) => p > 100),
);

const cat3 = categories.find((categorie) => categorie.id === 3);
console.log("Catégorie 3 :", cat3);

const cat99 = categories.find((categorie) => categorie.id === 99);
console.log("Catégorie 99 :", cat99);
