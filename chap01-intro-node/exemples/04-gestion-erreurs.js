// Exemple 4 — Gestion des erreurs : try/catch (await) et .then/.catch (promesses)
// Exécution : node exemples/04-gestion-erreurs.js

import { readFile } from 'node:fs/promises'

// 1) Avec await -> try / catch
try {
  const texte = await readFile('./data/fichier-inexistant.txt', 'utf8')
  console.log(texte)
} catch (err) {
  console.log('[try/catch] Problème :', err.message)
  console.log('[try/catch] Code     :', err.code) // ENOENT
}

// 2) Avec .then / .catch (on attend la fin avec await pour garder l'ordre d'affichage)
await readFile('./data/fichier-inexistant.txt', 'utf8')
  .then((texte) => console.log(texte))
  .catch((err) => console.log('[.catch]    Problème :', err.code))

// 3) Réagir selon le type d'erreur, et ne pas cacher les erreurs inattendues
async function lireTexte(chemin) {
  try {
    return await readFile(chemin, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') return null // cas prévu : fichier absent
    throw err // cas imprévu : on relance
  }
}

const contenu = await lireTexte('./data/absent.txt')
console.log(contenu === null ? 'Fichier absent : on continue avec une valeur par défaut.' : contenu)

// 4) Sans aucune gestion, le programme plante (décommente pour voir) :
// await readFile('./nexiste/pas.txt')
// console.log('Cette ligne ne sera jamais affichée')
