import { categories } from "../data/categories.js";

const getCategories = (quandPret) => {
  setTimeout(() => {
    quandPret(categories);
  }, 3000);
};
console.log("1. Je demande les categories");

getCategories((donnees) => {
  console.log("3. Recu :", donnees.length, "categories");
});

console.log("2. Je continue en attendant");
