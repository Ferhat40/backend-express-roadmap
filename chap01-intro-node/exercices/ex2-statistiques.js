// Exercice 2 — Statistiques d'un fichier
// Exécution : node exercices/ex2-statistiques.js
import path from "node:path";
import { readFile } from "node:fs/promises";
const chemin = path.join(import.meta.dirname, `..`, `data`, `message.txt`);
const data = await readFile(chemin, `utf-8`);
const lignes = data
  .split(`\n`)
  .map((ligne) => ligne.trim())
  .filter((ligne) => ligne !== ``);
const mots = lignes.join(` `).split(/\s+/);

const caracteres = lignes.join(``).length;

const plusLongue = lignes.reduce(
  (max, ligne) => (ligne.length > max.length ? ligne : max),
  ``,
);
console.log(`Lignes     : ${lignes.length}`);
console.log(`Mots       : ${mots.length}`);
console.log(`Caractères : ${caracteres}`);
console.log(`Plus longue: "${plusLongue}"`);
