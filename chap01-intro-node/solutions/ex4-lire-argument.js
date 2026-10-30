// Solution — Exercice 4 : lire le fichier passé en argument
import { readFile } from 'node:fs/promises'

const chemin = process.argv[2] // [0] = node, [1] = ce script, [2] = 1er argument

if (!chemin) {
  console.log('Usage : node ex4-lire-argument.js <chemin>')
  process.exitCode = 1
} else {
  try {
    const contenu = await readFile(chemin, 'utf8')
    console.log(contenu)
  } catch (err) {
    process.exitCode = 1
    if (err.code === 'ENOENT') {
      console.log(`❌ Fichier introuvable : ${chemin}`)
    } else if (err.code === 'EISDIR') {
      console.log(`❌ "${chemin}" est un dossier, pas un fichier`)
    } else {
      throw err // erreur imprévue : on ne la cache pas
    }
  }
}
