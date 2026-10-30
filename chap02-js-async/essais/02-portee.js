const nombre = 6;
if (nombre > 4) {
  let avecLet = `je suis let`;
  var avecvar = `je suis var`;
  console.log(`Dans la piece :`, avecvar, `|`, avecLet);
}
console.log(`Dehors, var: `, avecvar);

// ----avec var ---

var message = `premier contenu`;
if (nombre > 4) {
  var message = `second message`;
}
console.log(`Avec var :`, message);

// ---- avec let ----
let texte = `premier contenu`;
if (nombre > 4) {
  let texte = `second contenu`;
}
console.log(`Avec let :`, texte);
