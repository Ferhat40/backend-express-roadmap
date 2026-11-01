import { categories } from "../data/categories.js";

const nombre = [1, 2, 3];
const fois10 = nombre.map((n) => n * 10);
console.log("Origine :", nombre);
console.log("Résultat :", fois10);

const noms = categories.map((categorie) => categorie.nom);
console.log("Noms des catégories :", noms);

const nomsEtIds = categories.map((categorie) => {
  return {
    id: categorie.id,
    nom: categorie.nom,
  };
});
console.log("Noms et IDs des catégories :", nomsEtIds);

const GetNomsCategories = categories.map(
  (categorie) => `${categorie.nom} ${categorie.id}`,
);
console.log("Question 1 :", GetNomsCategories);

const getProduits = categories.map((categorie) => categorie.produits);
console.log("Produits :", getProduits);
