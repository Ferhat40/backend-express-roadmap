import { categories } from "../data/categories.js";

const prix = [40, 80, 50, 90];
console.log(
  "Chers :",
  prix.filter((p) => p > 60),
);

const bienNotes = categories.filter((cate) => cate["commentaire-client"] >= 4);
console.log(
  "Bien notées :",
  bienNotes.map((cate) => cate.nom),
);
console.log(
  "un prix >85 ?",
  prix.some((prix) => prix > 85),
);
console.log(
  "un prix >85 ?",
  prix.some((prix) => prix > 100),
);

const fruits = categories[1];
console.log(
  "les fruits ont une mangue ?",
  fruits.produits.some((produit) => produit.nom === "mangue"),
);
console.log(
  "les fruits ont un jeans ?",
  fruits.produits.some((produit) => produit.nom === "jeans"),
);
