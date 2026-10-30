import path from "node:path";
import { writeFile, appendFile, readFile } from "fs/promises";

const tableau = path.join(import.meta.dirname, `..`, `data`, `tableau.txt`);
const cahier = path.join(import.meta.dirname, `..`, `data`, `journal.txt`);

const heure = new Date().toLocaleTimeString(`fr-CA`);

await writeFile(tableau, `derniere execution: ${heure}\n`);
await appendFile(cahier, `execution a ${heure}\n`);

console.log(`tableau:\n` + (await readFile(tableau, `utf8`)));
console.log(`cahier:\n` + (await readFile(cahier, `utf8`)));
