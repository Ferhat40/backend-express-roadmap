// Solution — Exercice 6 : mini base de données JSON
import path from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'

const DATA = path.join(import.meta.dirname, '..', 'data')
const SOURCE = path.join(DATA, 'produits.json')
const DB = path.join(DATA, 'produits-db.json')

async function chargerProduits() {
  try {
    return JSON.parse(await readFile(DB, 'utf8'))
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
    return JSON.parse(await readFile(SOURCE, 'utf8')) // 1re utilisation : données de départ
  }
}

async function sauvegarderProduits(produits) {
  await writeFile(DB, JSON.stringify(produits, null, 2) + '\n') // null, 2 = JSON indenté lisible
}

const AIDE = `Commandes :
  lister
  ajouter <nom> <prix>
  supprimer <id>
  total`

const [, , commande, ...args] = process.argv
const produits = await chargerProduits()

switch (commande) {
  case 'lister': {
    console.table(produits)
    break
  }

  case 'ajouter': {
    const [nom, prixTexte] = args
    const prix = Number(prixTexte)
    if (!nom || prixTexte === undefined || Number.isNaN(prix) || prix < 0) {
      console.log('❌ Usage : ajouter <nom> <prix>  (prix numérique et positif)')
      process.exitCode = 1
      break
    }
    const id = Math.max(0, ...produits.map((p) => p.id)) + 1 // max(0, ...) : gère la liste vide
    const nouveau = { id, nom, prix }
    produits.push(nouveau)
    await sauvegarderProduits(produits)
    console.log('✅ Ajouté :', nouveau)
    break
  }

  case 'supprimer': {
    const id = Number(args[0])
    const index = produits.findIndex((p) => p.id === id) // Number() : argv donne des chaînes !
    if (index === -1) {
      console.log(`❌ Aucun produit avec l'id ${args[0]}`)
      process.exitCode = 1
      break
    }
    const [supprime] = produits.splice(index, 1)
    await sauvegarderProduits(produits)
    console.log('🗑️  Supprimé :', supprime)
    break
  }

  case 'total': {
    const total = produits.reduce((somme, p) => somme + p.prix, 0)
    console.log(`💰 Total : ${total} $ pour ${produits.length} produit(s)`)
    break
  }

  default:
    console.log(AIDE)
}
