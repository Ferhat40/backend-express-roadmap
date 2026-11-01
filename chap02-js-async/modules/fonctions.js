/*question 1 - map()*/
export const getNomsCategories = (liste) =>
  liste.map((categorie) => `${categorie.nom} ${categorie.id}`);

/*question 2 - map()*/
export const getProduits = (categorie) =>
  categorie.produits.map((produit) => `${produit.nom}`);

//question 3 - some()
export const getCategoriesParProduit = (liste, nomProduit) =>
  liste.filter((categorie) =>
    categorie.produits.some((produit) => produit.nom === nomProduit),
  );
