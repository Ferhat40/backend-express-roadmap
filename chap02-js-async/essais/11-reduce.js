import { categories } from "../data/categories.js";

const prix = [40, 80, 50];
const total = prix.reduce((boule, p) => boule + p, 0);
console.log("Total:", total);

const electronique = categories[2];
const totalElectronique = electronique.produits.reduce(
  (boule, produit) => boule + produit.prix,
  0,
);
console.log("Total electronique:", totalElectronique);
