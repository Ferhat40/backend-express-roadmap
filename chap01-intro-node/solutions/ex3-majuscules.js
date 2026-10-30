// Solution — Exercice 3 : transformer et sauvegarder
import path from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'

const DATA = path.join(import.meta.dirname, '..', 'data')
const ENTREE = path.join(DATA, 'message.txt')
const SORTIE = path.join(DATA, 'message-majuscules.txt')

const texte = await readFile(ENTREE, 'utf8')

const resultat = texte
  .trim()
  .split('\n')
  .map((ligne, index) => `${index + 1}. ${ligne.trim().toUpperCase()}`)
  .join('\n')

await writeFile(SORTIE, resultat + '\n') // await : on attend la fin avant de relire

const verification = await readFile(SORTIE, 'utf8')
console.log(`Contenu de ${path.basename(SORTIE)} :\n${verification}`)
