import { test } from "node:test";
import assert from "node:assert/strict";
import { professeurs } from "../data/professeurs.js";
import {
  getProfsRangImpair,
  getDernierProf,
  getProfParCours,
  ajouterProfil,
  getClefParValeur,
  supprimerAttribut,
} from "../modules/professeurs.js";

test("a. getProfsRangImpair retourne les profs de rang 1 et 3", () => {
  const noms = getProfsRangImpair(professeurs).map((prof) => prof.nom);
  assert.deepEqual(noms, ["Henry", "Marko"]);
});

test("b. getDernierProf retourne le dernier professeur du tableau", () => {
  const resultat = getDernierProf(professeurs);
  assert.equal(resultat.nom, "Calamity");
});

test("b. getDernierProf retourne undefined pour une liste vide", () => {
  assert.equal(getDernierProf([]), undefined);
});

test("c. getProfParCours trouve les profs d'anglais", () => {
  const noms = getProfParCours(professeurs, "Anglais").map((prof) => prof.nom);
  assert.deepEqual(noms, ["Marko"]);
});

test("c. getProfParCours retourne [] pour un cours inexistant", () => {
  assert.deepEqual(getProfParCours(professeurs, "Cuisine"), []);
});

test("d. ajouterProfil ajoute le bon profil à chaque prof", () => {
  const profils = ajouterProfil(professeurs).map((prof) => prof.profil);
  assert.deepEqual(profils, [
    "scientifique",
    "scientifique",
    "littéraire",
    "littéraire",
  ]);
});

test("d. ajouterProfil ne modifie pas les profs d'origine", () => {
  ajouterProfil(professeurs);
  assert.equal("profil" in professeurs[0], false);
});

test("e. getClefParValeur retrouve la clé d'une valeur", () => {
  assert.equal(getClefParValeur(professeurs[0], 187), "code-employe");
  assert.equal(getClefParValeur(professeurs[0], "Dackouo"), "prenom");
});

test("e. getClefParValeur retourne undefined si la valeur est absente", () => {
  assert.equal(getClefParValeur(professeurs[0], "inconnue"), undefined);
});

test("g. supprimerAttribut retire l'attribut demandé", () => {
  const resultat = supprimerAttribut(professeurs[0], "code-employe");
  assert.equal("code-employe" in resultat, false);
  assert.equal(resultat.nom, "Henry");
});

test("g. supprimerAttribut ne modifie pas le prof d'origine", () => {
  supprimerAttribut(professeurs[0], "code-employe");
  assert.equal(professeurs[0]["code-employe"], 187);
});
