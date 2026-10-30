// Exercice 3 — Transformer et sauvegarder
// Exécution : node exercices/ex3-majuscules.js
import path, { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";

const DATA = path.join(import.meta.dirname, `..`, `data`);
const ENTREE = path.join(DATA, `message.txt`);
const SORTIE = path.join(DATA, `message-majuscules.txt`);

const texte = await readFile(ENTREE, `utf-8`);
const result = texte
  .trim()
  .split(`\n`)
  .map((ligne, index) => `${index + 1}. ${ligne.trim().toUpperCase()}`);

await writeFile(SORTIE, result + `\n`);

const verification = await readFile(SORTIE, `utf-8`);
console.log(`Contenu de ${path.basename(SORTIE)} :\n${verification}`);
