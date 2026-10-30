// Exemple 6 — L'objet process
// Exécution : node exemples/06-process.js Yassine 3

const [, , nom = 'inconnu', fois = '1'] = process.argv // déstructuration (chap. 2)

console.log('process.argv complet :', process.argv)
for (let i = 0; i < Number(fois); i++) {
  console.log(`Bonjour ${nom} (${i + 1})`)
}

console.log('Plateforme :', process.platform)
console.log('Version Node :', process.version)
console.log('Variable PATH définie ?', process.env.PATH ? 'oui' : 'non')

// Signaler un échec sans couper brutalement le programme
if (nom === 'inconnu') {
  console.log('Astuce : passe ton nom en argument.')
  process.exitCode = 1
}
