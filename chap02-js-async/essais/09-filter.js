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
