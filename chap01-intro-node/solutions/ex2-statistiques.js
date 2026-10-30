// Solution — Exercice 2 : statistiques d'un fichier
import path from 'node:path'
import { readFile } from 'node:fs/promises'

// Chemin robuste : relatif au fichier, pas au dossier courant
const FICHIER = path.join(import.meta.dirname, '..', 'data', 'message.txt')

const texte = await readFile(FICHIER, 'utf8')

const lignes = texte
  .split('\n')
  .map((ligne) => ligne.trim()) // retire espaces et "\r" (fins de ligne Windows)
  .filter((ligne) => ligne !== '') // retire les lignes vides

const mots = lignes.join(' ').split(/\s+/) // \s+ = un ou plusieurs espaces
const caracteres = lignes.join('').length // caractères des lignes, sans les retours à la ligne

// reduce : on garde la plus longue au fil du parcours (vu en détail au chap. 2)
const plusLongue = lignes.reduce((max, ligne) => (ligne.length > max.length ? ligne : max), '')

console.log(`Lignes     : ${lignes.length}`)
console.log(`Mots       : ${mots.length}`)
console.log(`Caractères : ${caracteres}`)
console.log(`Plus longue: "${plusLongue}"`)
