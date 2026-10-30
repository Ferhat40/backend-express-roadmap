// Solution — Exercice 5 : journal de bord
import path from 'node:path'
import { appendFile, readFile } from 'node:fs/promises'

const JOURNAL = path.join(import.meta.dirname, '..', 'data', 'journal.txt')

// Plusieurs mots sans guillemets ? On les recolle : node ex5-journal.js J'ai fini
const message = process.argv.slice(2).join(' ').trim()

if (message) {
  const horodatage = new Date().toLocaleString('fr-CA')
  await appendFile(JOURNAL, `[${horodatage}] ${message}\n`)
}

async function lireJournal() {
  try {
    return await readFile(JOURNAL, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') return '' // pas encore de journal : ce n'est pas une erreur
    throw err
  }
}

const entrees = (await lireJournal()).split('\n').filter(Boolean) // Boolean retire les chaînes vides

if (entrees.length === 0) {
  console.log('Journal vide. Ajoute une entrée : node ex5-journal.js "mon message"')
} else {
  console.log(`📓 ${Math.min(3, entrees.length)} dernière(s) entrée(s) sur ${entrees.length} :`)
  entrees.slice(-3).forEach((entree) => console.log('  ' + entree))
}
