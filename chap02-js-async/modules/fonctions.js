import { categories } from "../data/categories.js";

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
export const getCategorie = (liste, idCategorie) => {
  const categorie = liste.find((categorie) => categorie.id === idCategorie);
  if (!categorie) {
    return undefined;
  }
  const { produits, ...sansProduits } = categorie;
  return sansProduits;
};

// question 5 - reduce()
export const calculerPrix = (categorie) => {
  const total = categorie.produits.reduce(
    (boule, produit) => boule + produit.prix,
    0,
  );
  return `$${total}`;
};
// question 6 : spread
export const ajouterProduit = (categorie, nouveauProduit) => {
  return {
    ...categorie,
    produits: [...categorie.produits, nouveauProduit],
  };
};
// question 7 rest
export const creerCategorie = (id, nom, commentaireClient, ...produits) => {
  return {
    id: id,
    nom: nom,
    "commentaire-client": commentaireClient,
    produits: produits,
  };
};
// question 8 - promise et async/await
export const getCategoriesServeur = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
};

export const rechercherCategorie = async (id) => {
  const donnees = await getCategoriesServeur();
  const categorie = donnees.find((categorie) => categorie.id === id);
  if (!categorie) {
    return `Aucune categorie avec l'id ${id}`;
  }
  return categorie;
};
