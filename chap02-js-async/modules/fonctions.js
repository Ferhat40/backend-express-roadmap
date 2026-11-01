/*question 1 - map()*/
export const getNomsCategories = (liste) =>
  liste.map((categorie) => `${categorie.nom} ${categorie.id}`);

/*question 2 - map()*/
export const getProduits = (categorie) =>
  categorie.produits.map((produit) => `${produit.nom}`);
