import { categories } from "../data/categories.js";
const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 10000);
  });
};

const ticket = getCategories();
console.log("Ticket :", ticket);

ticket.then((donnees) => {
  console.log("Recu avec then :", donnees.length, "categories");
});

console.log("A. Avant await");
const donnees = await getCategories();
console.log(
  "B. recu avec await :",
  donnees.map((categorie) => categorie.nom),
);
console.log("C. Apres await");
