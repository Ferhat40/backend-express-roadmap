console.log(`Tout le tableau :`, process.argv);

const nom = process.argv[2];
const age = Number(process.argv[3]);

if (!nom || Number.isNaN(age)) {
  console.log(`X usage: node essais l arguments.js <nom> <age>`);
  console.log(`  Exemple : node essais l arguments.js Yassine 20`);
  process.exitCode = 1;
} else {
  console.log(`Bonjour ${nom},tu as ${age} ans.`);
  console.log(`dans 10ans, tu auras ${age + 10} ans.`);
}
