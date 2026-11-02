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

// question 4 - find()
export const getCategorie = (liste, idCategorie) =>
  liste.find((categorie) => categorie.id === idCategorie);
// question 5 - reduce()
export const calculerPrix = (categorie) => {
  const total = categorie.produits.reduce(
    (boule, produit) => boule + produit.prix,
    0,
  );
  return `$${total}`;
};
