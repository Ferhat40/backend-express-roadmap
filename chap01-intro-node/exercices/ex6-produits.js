// Exercice 6 — Mini base de données JSON
// Exécution : node exercices/ex6-produits.js lister | ajouter <nom> <prix> | supprimer <id> | total

import { readFile, writeFile } from 'node:fs/promises'

const SOURCE = './data/produits.json'
const DB = './data/produits-db.json'

// TODO 1 : fonction async chargerProduits()
//          - lit DB ; si ENOENT, lit SOURCE à la place
//          - retourne JSON.parse(texte)

// TODO 2 : fonction async sauvegarderProduits(produits)
//          - writeFile(DB, JSON.stringify(produits, null, 2))

// TODO 3 : lire la commande et les arguments : const [, , commande, ...args] = process.argv

// TODO 4 : selon la commande (if / else if ou switch) : lister, ajouter, supprimer, total
//          - id auto : Math.max(0, ...produits.map(p => p.id)) + 1
//          - valider le prix : Number(prix), Number.isNaN(...), >= 0

// TODO 5 : commande inconnue -> afficher l'aide
