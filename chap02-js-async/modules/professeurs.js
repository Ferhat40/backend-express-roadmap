// Exercices du chapitre 2 — professeurs (data/professeurs.js)

/* Exercice a — filter() avec l'index
   « Rang » = position humaine (1, 2, 3, 4…), et l'index commence à 0.
   rang = index + 1 → rang impair ⇔ (index + 1) % 2 === 1
   % donne le reste de la division : 3 % 2 = 1 (impair), 4 % 2 = 0 (pair).
   filter() passe aussi l'index en 2e paramètre : (prof, index) => ... */
export const getProfsRangImpair = (liste) =>
  liste.filter((prof, index) => (index + 1) % 2 === 1);

/* Exercice b — le dernier élément : index = longueur - 1 */
export const getDernierProf = (liste) => {
  if (liste.length === 0) {
    return undefined;
  }
  return liste[liste.length - 1];
};

/* Exercice c — filter() + some() (même structure que la Question 3) */
export const getProfParCours = (liste, nomCours) => {
  return liste.filter((prof) =>
    prof.cours.some((cours) => cours.nom === nomCours),
  );
};

/* Exercice d — map() + spread : ajouter un champ « profil » sans modifier l'original
   Règle choisie : un prof est « scientifique » s'il enseigne AU MOINS UN cours
   scientifique (some), sinon « littéraire ». */
const COURS_SCIENTIFIQUES = ["Biologie", "Chimie", "Physique", "Math"];

export const ajouterProfil = (liste) =>
  liste.map((prof) => {
    const estScientifique = prof.cours.some((cours) =>
      COURS_SCIENTIFIQUES.includes(cours.nom),
    );
    return {
      ...prof, // 📠 photocopie du prof
      profil: estScientifique ? "scientifique" : "littéraire", // + le nouveau champ
    };
  });

/* Exercice e — Object.keys() + find() : retrouver la CLÉ qui contient une VALEUR
   Object.keys(prof) → ['id', 'nom', 'prenom', 'code-employe', 'cours']
   find() cherche la première clé dont la valeur (prof[cle]) est celle demandée.
   Retourne undefined si aucune clé ne contient cette valeur. */
export const getClefParValeur = (prof, valeur) =>
  Object.keys(prof).find((cle) => prof[cle] === valeur);

/* Exercice f — déjà fait : verifierClef() dans modules/outils.js */

/* Exercice g — déstructuration + rest : supprimer un attribut SANS modifier l'original
   [attribut] : le nom de la propriété est DANS la variable (comme prof[clef])
   _ : variable « poubelle » pour la valeur retirée, qu'on n'utilise pas */
export const supprimerAttribut = (prof, attribut) => {
  const { [attribut]: _, ...reste } = prof;
  return reste;
};
