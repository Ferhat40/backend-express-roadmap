# Chapitre 1 — Exercices

> Règles : tape le code toi-même, exécute depuis le dossier `chap01-intro-node`, et n'ouvre `solutions/` qu'**après** avoir essayé (ou après 20 min bloqué sur un exercice).
> Les fichiers de départ sont dans `exercices/` avec des `// TODO`.

## Exercice 1 — Ton environnement ⭐

Dans le terminal :

1. Affiche les versions de `node`, `npm` et `git`.
2. Ouvre le REPL (`node`) et calcule : `[3, 8, 1].map(n => n * 10)`, puis `"backend".toUpperCase()`, puis `_`. Quitte avec `.exit`.
3. Dans un dossier temporaire (hors du dépôt), crée un projet avec `npm init -y`, ajoute `"type": "module"` et un script `"dev": "node --watch server.js"`. Lance `npm run dev`, modifie `server.js`, sauvegarde : que se passe-t-il ?
4. Dans ce même projet : `npm i -D nodemon`. Ouvre `package.json` : dans quelle section apparaît-il ? Puis `npm uninstall nodemon`.

✍️ Note tes réponses dans `exercices/ex1-reponses.md`.

## Exercice 2 — Statistiques d'un fichier ⭐

Fichier : `exercices/ex2-statistiques.js`

Lis `data/message.txt` et affiche :
- le nombre de **lignes** (non vides),
- le nombre de **mots**,
- le nombre de **caractères** (sans compter les retours à la ligne),
- la **ligne la plus longue**.

Résultat attendu :
```
Lignes     : 3
Mots       : 18
Caractères : 93
Plus longue: "Bonjour tout le monde trois fois"
```

## Exercice 3 — Transformer et sauvegarder ⭐

Fichier : `exercices/ex3-majuscules.js`

Lis `data/message.txt`, mets tout le texte en **majuscules**, numérote chaque ligne (`1. BONJOUR...`) et écris le résultat dans `data/message-majuscules.txt`. Relis ensuite ce nouveau fichier et affiche-le pour prouver que l'écriture a fonctionné.

## Exercice 4 — Lire le fichier passé en argument ⭐⭐

Fichier : `exercices/ex4-lire-argument.js`

```bash
node exercices/ex4-lire-argument.js data/message.txt   # affiche le contenu
node exercices/ex4-lire-argument.js data/absent.txt    # ❌ Fichier introuvable : data/absent.txt
node exercices/ex4-lire-argument.js data               # ❌ "data" est un dossier, pas un fichier
node exercices/ex4-lire-argument.js                    # Usage : node ex4-lire-argument.js <chemin>
```

- Utilise `process.argv`.
- Gère `ENOENT` et `EISDIR` avec des messages clairs ; relance les autres erreurs.
- En cas d'erreur, termine avec `process.exitCode = 1`.

## Exercice 5 — Un journal de bord ⭐⭐

Fichier : `exercices/ex5-journal.js`

```bash
node exercices/ex5-journal.js "J'ai fini la leçon du chapitre 1"
node exercices/ex5-journal.js "J'ai compris appendFile"
```

- Chaque appel **ajoute** une ligne `[date heure] message` dans `data/journal.txt`.
- Puis affiche les **3 dernières entrées** du journal.
- Si aucun message n'est donné, affiche seulement les 3 dernières entrées (et gère le cas où le journal n'existe pas encore).

## Exercice 6 — Défi : une mini base de données JSON ⭐⭐⭐

Fichier : `exercices/ex6-produits.js` — prépare directement le chapitre 3 (exercice 7 du cours : « utiliser un fichier json et les promesses readFile et writeFile »).

La « base » est `data/produits-db.json`. Si elle n'existe pas, crée-la à partir de `data/produits.json`.

```bash
node exercices/ex6-produits.js lister
node exercices/ex6-produits.js ajouter banane 12
node exercices/ex6-produits.js supprimer 2
node exercices/ex6-produits.js total
```

- `lister` : affiche les produits (`console.table` est ton ami).
- `ajouter <nom> <prix>` : l'**id** est généré automatiquement (plus grand id + 1) ; refuse un prix non numérique ou négatif.
- `supprimer <id>` : message clair si l'id n'existe pas.
- `total` : la somme des prix.
- Indices : `JSON.parse(texte)` / `JSON.stringify(objet, null, 2)`.

## Exercice 7 — Même chose, autrement ⭐⭐

Fichier : `exercices/ex7-then-catch.js`

Réécris l'exercice 2 **sans `await`**, uniquement avec `.then()` et `.catch()`. Puis réponds en commentaire : quelle version préfères-tu lire, et pourquoi ?

---

## ✅ Quand tout est fait

Coche ta progression, puis passe au **push** (voir [`docs/GIT-WORKFLOW.md`](../docs/GIT-WORKFLOW.md)) :

- [ ] Ex 1  - [ ] Ex 2  - [ ] Ex 3  - [ ] Ex 4  - [ ] Ex 5  - [ ] Ex 6  - [ ] Ex 7
