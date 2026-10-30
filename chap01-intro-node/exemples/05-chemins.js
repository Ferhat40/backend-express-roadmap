// Exemple 5 — Le piège des chemins relatifs
// Essaie les DEUX commandes :
//   (depuis chap01-intro-node)  node exemples/05-chemins.js
//   (depuis chap01-intro-node/exemples)  node 05-chemins.js

import path from 'node:path'
import { readFile } from 'node:fs/promises'

console.log('Dossier courant (cwd)       :', process.cwd())
console.log('Dossier de ce fichier       :', import.meta.dirname)

// ❌ Relatif au dossier courant : dépend d'où tu lances node
try {
  await readFile('./data/message.txt', 'utf8')
  console.log("'./data/message.txt'        : trouvé")
} catch (err) {
  console.log("'./data/message.txt'        : introuvable (", err.code, ')')
}

// ✅ Relatif au fichier : marche toujours
const chemin = path.join(import.meta.dirname, '..', 'data', 'message.txt')
await readFile(chemin, 'utf8')
console.log('path.join(import.meta.dirname, ...) : trouvé ->', chemin)

// Bonus : quelques fonctions utiles de path
console.log('basename :', path.basename(chemin)) // message.txt
console.log('extname  :', path.extname(chemin))  // .txt
