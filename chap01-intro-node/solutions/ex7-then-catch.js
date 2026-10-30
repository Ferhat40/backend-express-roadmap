// Solution — Exercice 7 : exercice 2 avec .then / .catch
import path from 'node:path'
import { readFile } from 'node:fs/promises'

const FICHIER = path.join(import.meta.dirname, '..', 'data', 'message.txt')

readFile(FICHIER, 'utf8')
  .then((texte) => texte.split('\n').map((l) => l.trim()).filter((l) => l !== ''))
  .then((lignes) => {
    // chaque .then reçoit ce que le précédent a retourné : on peut chaîner les étapes
    const mots = lignes.join(' ').split(/\s+/)
    const plusLongue = lignes.reduce((max, l) => (l.length > max.length ? l : max), '')
    console.log(`Lignes     : ${lignes.length}`)
    console.log(`Mots       : ${mots.length}`)
    console.log(`Caractères : ${lignes.join('').length}`)
    console.log(`Plus longue: "${plusLongue}"`)
  })
  .catch((err) => {
    console.log('Impossible de lire le fichier :', err.message)
    process.exitCode = 1
  })

// Préférence : async/await. Le code se lit de haut en bas, les variables restent
// accessibles partout, et try/catch est la même syntaxe que pour les erreurs synchrones.
// .then/.catch reste utile pour enchaîner rapidement ou lancer sans attendre.
