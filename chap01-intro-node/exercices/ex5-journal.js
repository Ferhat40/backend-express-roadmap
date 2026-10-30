// Exercice 5 — Journal de bord
// Exécution : node exercices/ex5-journal.js "mon message"

import { appendFile, readFile } from 'node:fs/promises'

const JOURNAL = './data/journal.txt'

// TODO 1 : récupérer le message (process.argv)

// TODO 2 : si message -> appendFile une ligne "[date heure] message\n"
//          indice : new Date().toLocaleString('fr-CA')

// TODO 3 : lire le journal (attention : il peut ne pas exister -> ENOENT)

// TODO 4 : afficher les 3 dernières lignes (indice : slice(-3))
