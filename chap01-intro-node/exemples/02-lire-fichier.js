// Exemple 2 — Lire un fichier avec fs/promises
// Exécution (depuis chap01-intro-node) : node exemples/02-lire-fichier.js

import { readFile } from 'node:fs/promises'

// Sans encodage : on reçoit un Buffer (des octets)
const data = await readFile('./data/message.txt')
console.log('Buffer brut  :', data)
console.log('Converti     :', data.toString())

// Avec l'encodage 'utf8' : on reçoit directement une chaîne de caractères
const texte = await readFile('./data/message.txt', 'utf8')
const lignes = texte.trim().split('\n')
console.log(`Le fichier contient ${lignes.length} lignes.`)
console.log('Première ligne :', lignes[0])
