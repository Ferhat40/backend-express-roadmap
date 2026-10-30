import { readFile } from "fs/promises";
console.log(`1. Debut`);
try {
  const texte = await readFile(`./data/message.txt`, `utf8`);
  console.log(`2. Contenu :`, texte);
} catch (err) {
  console.log(`2. Oups, problem!`);
  console.log(` message :`, err.message);
  console.log(` code :`, err.code);
}
console.log(`3. Le programme continue`);
