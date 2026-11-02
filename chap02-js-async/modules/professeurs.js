export const getDernierProf = (liste) => {
  if (liste.length === 0) {
    return undefined;
  }
  return liste[liste.length - 1];
};

export const getProfParCours = (liste, nomCours) => {
  return liste.filter((prof) =>
    prof.cours.some((cours) => cours.nom === nomCours),
  );
};
