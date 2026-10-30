import path from "node:path";
import { readFile } from "fs/promises";
const chemain = path.join(import.meta.dirname, `..`, `data`, `message.txt`);
console.log(`Chemain calcule :`, chemain);

const texte = await readFile(chemain, `utf8`);
console.log(`Lu :`, texte);
