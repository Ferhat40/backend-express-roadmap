// Exercice 4 — Lire le fichier passé en argument
// Exécution : node exercices/ex4-lire-argument.js data/message.txt

import console from "node:console";
import { readFile } from "node:fs/promises";

const chemin = process.argv[2];
if (!chemin) {
  console.log(`
        usage : node ex4-lire-argument.js < chemin`);
  process.exitCode = 1;
} else {
  try {
    const contenu = await readFile(chemin, `utf-8`);
    console.log(contenu);
  } catch (err) {
    process.exitCode = 1;
    if (err.code === `ENOENT`) {
      console.log(`X fichier introuvable : ${chemin}`);
    } else if (err.code === `EISDIR`) {
      console.log(`X "${chemin}" est un dossier, pas un fichier`);
    } else {
      throw err;
    }
  }
}
