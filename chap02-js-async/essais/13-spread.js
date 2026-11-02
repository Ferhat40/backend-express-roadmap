// le piege de la reference
const original = ["pomme", "mangue"];
const fausseCopie = original;
fausseCopie.push("banane");
console.log("original apres fausse copie :", original);

// la vrai copie avec spread
const original2 = ["pomme", "mangue"];
const vraiCopie = [...original2];
vraiCopie.push("kiwi");
console.log("Original2 :", original2);
console.log("Vrais copie :", vraiCopie);

// ajouter avec spread
const fruits = ["pomme", "mangue"];
const plusDeFruits = [...fruits, "kiwi"];
console.log("Fruits :", fruits);
console.log("Plus de fruits", plusDeFruits);

const prof = { nom: "Yassino", cours: "Backend" };
const profModifie = { ...prof, cours: "Express", salle: "B-1040" };
console.log("prof :", prof);
console.log("prof modifie :", profModifie);
