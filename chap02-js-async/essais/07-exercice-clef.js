import { verifierClef } from "../modules/outils.js";
import { professeurs } from "../data/professeurs.js";

const henry = professeurs[0];
console.log(verifierClef(henry, "prenom"));
console.log(verifierClef(henry, "code-employe"));
console.log(verifierClef(henry, "age"));
