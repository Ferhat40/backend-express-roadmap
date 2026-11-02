import { test } from "node:test";
import assert from "node:assert/strict";
import { professeurs } from "../data/professeurs.js";
import { getDernierProf } from "../modules/professeurs.js";
test("getDernierProf retourne le dernier professeur du tableau", () => {
  const resultat = getDernierProf(professeurs);
  assert.equal(resultat.nom, "Calamity");
});
