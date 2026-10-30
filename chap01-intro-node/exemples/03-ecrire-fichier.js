// Exemple 3 — Écrire dans des fichiers : writeFile (remplace) vs appendFile (ajoute)
// Exécution : node exemples/03-ecrire-fichier.js

import { readFile, writeFile, appendFile } from 'node:fs/promises'

const texte = await readFile('./data/message.txt', 'utf8')

// writeFile REMPLACE tout le contenu (et crée le fichier s'il n'existe pas).
// On écrit dans une copie pour ne pas abîmer message.txt.
const nouveauTexte = texte + 'Je suis encore ici mon audience\n'
await writeFile('./data/message-copie.txt', nouveauTexte) // ⚠️ toujours await !
console.log('message-copie.txt écrit.')

// appendFile AJOUTE à la fin : relance le script plusieurs fois et regarde le journal grandir
const maintenant = new Date().toLocaleString('fr-CA')
await appendFile('./data/journal.txt', `Exécution le ${maintenant}\n`)
console.log('Ligne ajoutée à journal.txt :')
console.log(await readFile('./data/journal.txt', 'utf8'))
