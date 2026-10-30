import { readFile } from "fs/promises";
console.log(`1. je commence la lecture`);

const data = await readFile(`./data/message.txt`);
console.log(`2.Brut: `, data);
console.log(`3. Text: `, data.toString());

console.log(`4. Fin du programme`);
