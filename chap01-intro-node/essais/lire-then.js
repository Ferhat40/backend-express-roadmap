import { readFile } from "fs/promises";
console.log(`1. Je commence la lecture`);
readFile(`./data/message.txt`, `utf-8`).then((text) => {
  console.log(`2.Texte recu :`);
  console.log(text);
});

console.log(`3.Fin du programme`);
