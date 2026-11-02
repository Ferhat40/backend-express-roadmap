import { professeurs } from "../data/professeurs.js";

export const saluer = (personne) => `bonjour ${personne} !`;
export const carre = (n) => n * n;
const secret = `je reste prive`;

export const verifierClef = (prof, clef) => {
  if (clef in prof) {
    return prof[clef];
  }
  return false;
};

const presenter = (nom, age) => `${nom} ${age} ans`;
export default presenter;
