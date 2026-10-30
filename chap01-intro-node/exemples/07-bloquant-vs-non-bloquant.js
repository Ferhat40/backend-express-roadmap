// Exemple 7 — Bloquant (Sync) vs non-bloquant (async) : on mesure !
// Exécution : node exemples/07-bloquant-vs-non-bloquant.js

import { readFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'

const FICHIER = './data/message.txt'
const N = 200

// 1) Synchrone : chaque lecture BLOQUE le thread jusqu'à la fin
console.time('200 lectures synchrones')
for (let i = 0; i < N; i++) readFileSync(FICHIER)
console.timeEnd('200 lectures synchrones')

// 2) Asynchrone en série : une après l'autre (await dans la boucle)
console.time('200 lectures async en série')
for (let i = 0; i < N; i++) await readFile(FICHIER)
console.timeEnd('200 lectures async en série')

// 3) Asynchrone en parallèle : on lance tout, puis on attend tout
console.time('200 lectures async en parallèle')
await Promise.all(Array.from({ length: N }, () => readFile(FICHIER)))
console.timeEnd('200 lectures async en parallèle')

// 🧐 Observe : pour un petit fichier, "async en série" n'est PAS plus rapide que "sync".
// L'avantage de l'async n'est pas la vitesse d'UNE lecture, c'est :
//   - le parallélisme (cas 3, nettement plus rapide),
//   - et surtout que le thread reste libre pour les autres utilisateurs.

// Ce qui compte dans un serveur : pendant une lecture async, le thread reste LIBRE.
// Preuve : ce setTimeout s'exécute pendant que la lecture est en cours.
setTimeout(() => console.log('⏰ Le thread était libre : je passe pendant la lecture !'), 0)
readFile(FICHIER).then(() => console.log('📄 Lecture terminée'))
console.log('➡️  Fin du code principal (affiché en premier)')
