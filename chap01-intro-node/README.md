# Chapitre 1 — Introduction à la programmation backend avec Node.js

> Source : *Chap 1 Introduction AU26* (Dr Diarra), enrichi d'explications, de pièges et de bonnes pratiques professionnelles.
>
> ⏱️ Durée conseillée : 3 à 4 h (leçon + exemples + exercices)

## 🎯 Objectifs

À la fin de ce chapitre, tu sais :

- [ ] expliquer la différence entre **frontend** et **backend**, et le rôle de chaque outil du semestre ;
- [ ] expliquer **ce qu'est Node.js** et **pourquoi il est performant** ;
- [ ] créer un projet avec **npm**, lire et modifier un **`package.json`** ;
- [ ] exécuter du JavaScript de 3 façons : **REPL**, **fichier**, **script npm** ;
- [ ] importer des modules (`import`) — natifs et externes ;
- [ ] **lire et écrire des fichiers** avec `fs/promises` ;
- [ ] **gérer les erreurs** avec `try/catch` et `.then/.catch` ;
- [ ] éviter les **pièges classiques** (chemins relatifs, `await` oublié, code bloquant).

---

## 1. Le web en deux moitiés

```
          REQUÊTE  (GET /produits)
 ┌──────────────┐ ───────────────────────▶ ┌──────────────┐  SQL   ┌──────────────┐
 │   CLIENT     │                          │   SERVEUR    │ ─────▶ │ BASE DE      │
 │ (navigateur) │ ◀─────────────────────── │  (Node.js +  │ ◀───── │ DONNÉES      │
 │ HTML/CSS/JS  │   RÉPONSE (200 + JSON)    │   Express)   │        │ (MySQL)      │
 └──────────────┘                          └──────────────┘        └──────────────┘
    FRONTEND                                         BACKEND
```

| | Frontend (semestre passé) | Backend (ce semestre) |
|---|---|---|
| S'exécute | dans le **navigateur** de l'utilisateur | sur un **serveur** (ou ton PC en dev) |
| Langages | HTML, CSS, JavaScript | JavaScript (Node/Express), C# (ASP.NET), PHP (Laravel)… |
| Rôle | afficher, interagir (DOM) | logique métier, sécurité, accès aux **données** |
| Accès BD | ❌ jamais directement | ✅ MySQL, MongoDB, SQL Server… |

### Rappel express du frontend

- **HTML** : la structure. Le choix des balises (`<header>`, `<main>`, `<footer>`…) compte pour l'**accessibilité** et le **SEO**. Valider son code avec le validateur W3C.
- **CSS** : la mise en forme. Ordre de préférence : fichier externe ✅ > balise `<style>` ⚠️ > attribut `style=""` ❌.
- **JavaScript** : l'interactivité via le DOM. Il est **asynchrone** et utilise des **callbacks** — exactement ce qu'on va exploiter côté serveur.

### Les outils du semestre et leur rôle

| Outil | Rôle | Chapitre |
|---|---|---|
| **Node.js** | exécuter du JavaScript hors du navigateur | 1 → 6 |
| **npm** | installer des librairies | 1 → 6 |
| **Express.js** | framework pour créer des API web | 3 → 6 |
| **XAMPP** | MySQL + phpMyAdmin en local | 4 → 6 |
| **Postman / Bruno / Thunder Client** | tester les routes de l'API | 3 → 6 |
| **VS Code** | éditeur | tous |
| **Git / GitHub** | versions et portfolio | tous |

---

## 2. Node.js, c'est quoi exactement ?

**Node.js est un environnement d'exécution JavaScript** : il permet de lancer du JS **en dehors du navigateur**, directement sur ta machine ou un serveur.

Sous le capot :

```
 ┌───────────────────────── Node.js ─────────────────────────┐
 │  Ton code JavaScript                                      │
 │        │                                                  │
 │  ┌─────▼──────┐     ┌───────────────────────────────────┐ │
 │  │  V8        │     │ libuv : boucle d'événements        │ │
 │  │ (moteur JS │     │ (event loop) + pool de threads    │ │
 │  │ de Chrome) │     │ pour fichiers, réseau, crypto...  │ │
 │  └────────────┘     └───────────────────────────────────┘ │
 │  Modules intégrés : fs, http, path, os, crypto, events... │
 └───────────────────────────────────────────────────────────┘
```

| Dans le navigateur | Dans Node.js |
|---|---|
| `window`, `document` (DOM) | ❌ n'existent pas |
| ❌ pas d'accès aux fichiers | ✅ `fs` lit/écrit des fichiers |
| ❌ ne peut pas écouter un port | ✅ `http` crée un serveur |
| `globalThis` = `window` | `globalThis` = `global` ; `process` donne accès au système |

### Pourquoi Node est performant : le non-bloquant

Node exécute ton code sur **un seul thread**. Il ne peut donc pas se permettre d'**attendre** (un disque, une base de données, le réseau). Il délègue ces opérations lentes à libuv et continue avec la suite ; quand l'opération est terminée, le résultat revient via la **boucle d'événements**.

> **Image mentale — le serveur de restaurant 🍽️**
> Un serveur bloquant prend une commande, va en cuisine et **attend** que le plat soit prêt avant de servir la table suivante.
> Un serveur non-bloquant (Node) transmet la commande en cuisine, **prend les autres commandes**, et apporte chaque plat quand la cuisine sonne.
> Un seul serveur peut gérer des dizaines de tables.

👉 Conséquence directe pour la performance : **ne jamais utiliser les fonctions `...Sync`** (`readFileSync`, etc.) dans un serveur. Elles bloquent tous les utilisateurs pendant l'opération. On le mesure dans [`exemples/07-bloquant-vs-non-bloquant.js`](exemples/07-bloquant-vs-non-bloquant.js), et on approfondira au chapitre 2.

**Full stack JavaScript** : avec Node, un seul langage pour le frontend et le backend.

---

## 3. Installer et vérifier

1. Télécharger la version **LTS** (Long Term Support = stable) sur https://nodejs.org/en/download
   - Alternative pro : **nvm-windows** pour installer et changer de version facilement (`nvm install lts`, `nvm use lts`).
2. Vérifier dans un terminal :

```bash
node -v    # ex: v22.x.x
npm -v     # ex: 10.x.x  (npm est installé avec Node)
```

Si la commande n'est pas reconnue : fermer et rouvrir VS Code (le `PATH` est rechargé au démarrage).

---

## 4. npm — le gestionnaire de paquets

npm (*Node Package Manager*) donne accès à des millions de librairies sur https://www.npmjs.com.

| Action | Commande | Raccourci |
|---|---|---|
| Installer une librairie | `npm install express` | `npm i express` |
| Installer un outil de développement | `npm install --save-dev nodemon` | `npm i -D nodemon` |
| Installer toutes les dépendances d'un projet cloné | `npm install` | `npm i` |
| Désinstaller | `npm uninstall express` | `npm un express` |
| Mettre à jour | `npm update express` | |
| Chercher | `npm search express` | |
| Voir ce qui est obsolète | `npm outdated` | |
| Exécuter un outil sans l'installer | `npx nom-outil` | |

### Ce que crée `npm install`

| Élément | Rôle | Sur GitHub ? |
|---|---|---|
| `node_modules/` | le code des librairies (souvent très lourd) | ❌ jamais |
| `package.json` | **la liste** des dépendances voulues | ✅ oui |
| `package-lock.json` | les versions **exactes** installées, pour que tout le monde ait la même chose | ✅ oui |

> Quelqu'un qui clone ton projet tape `npm install` et `node_modules/` est reconstruit à partir de `package.json` + `package-lock.json`.

### `dependencies` vs `devDependencies`

```json
"dependencies":    { "express": "^5.2.1" },   // nécessaire pour que l'app TOURNE (en production)
"devDependencies": { "nodemon": "^3.1.14" }   // utile seulement pendant le DÉVELOPPEMENT
```

💡 Dans ton projet actuel, `nodemon` est dans `dependencies` : ça marche, mais la bonne pratique est `npm i -D nodemon`.

### Lire une version : le versionnage sémantique (semver)

`MAJEUR.MINEUR.CORRECTIF` → `5.2.1`

| Symbole | Signification | `^5.2.1` accepte |
|---|---|---|
| `^` | mises à jour mineures et correctifs | `5.3.0` ✅ `6.0.0` ❌ |
| `~` | correctifs seulement | `~5.2.1` → `5.2.9` ✅ `5.3.0` ❌ |
| aucun | version exacte | `5.2.1` uniquement |

Une version **majeure** peut casser ton code (ex. Express 4 → 5).

### Quelques librairies du semestre

| Nom | Origine | Utilisation |
|---|---|---|
| `fs` | intégré à Node | lecture/écriture de fichiers |
| `http` | intégré | serveur web bas niveau |
| `crypto` | intégré | sécurité (hachage, aléatoire) |
| `express` | externe | création de serveur web / API |
| `mysql2` | externe | connexion à MySQL |
| `sequelize` | externe | ORM (BD manipulée avec des objets JS) |
| `dotenv` | externe | variables d'environnement (`.env`) |
| `helmet` | externe | sécurisation des en-têtes HTTP |
| `cors` | externe | autoriser un frontend sur un autre domaine |
| `bcrypt` | externe | hachage de mots de passe |
| `jsonwebtoken` | externe | authentification par jeton (JWT) |
| `express-session` | externe | sessions utilisateur |
| `ejs` | externe | génération de pages HTML |

> ⚠️ Petite correction par rapport au tableau du cours : `express-session` est un module **externe** (à installer), pas interne.

---

## 5. Créer un projet Node, étape par étape

```bash
mkdir mon-projet          # 1. créer le dossier
cd mon-projet             # 2. se placer dedans
npm init                  # 3. répondre aux questions (ou: npm init -y pour tout accepter)
```

Les questions de `npm init` :

| Question | Quoi répondre |
|---|---|
| package name | nom en minuscules, sans espace : `node-project` |
| version | `1.0.0` (Entrée) |
| description | une phrase |
| entry point | **`server.js`** (le fichier de départ) |
| test command | Entrée |
| git repository | Entrée (ou l'URL GitHub) |
| keywords | `node, backend` |
| author | ton nom |
| license | `ISC` (Entrée) |

4. **Ajouter `"type": "module"`** au `package.json` → active la syntaxe moderne `import/export` (ES Modules).
5. Ajouter des **scripts** :

```json
{
  "name": "node-project",
  "version": "1.0.0",
  "description": "notre projet node",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "author": "Yassine",
  "license": "ISC"
}
```

6. Créer `server.js` → le projet est prêt.

### `import` (ESM) vs `require` (CommonJS)

| | ES Modules ✅ (ce cours) | CommonJS ❌ (ancien) |
|---|---|---|
| Activer | `"type": "module"` | par défaut |
| Importer | `import express from 'express'` | `const express = require('express')` |
| Exporter | `export` / `export default` | `module.exports = ...` |
| `await` au premier niveau du fichier | ✅ autorisé | ❌ interdit |

> Consigne du professeur : **ne jamais utiliser CommonJS** dans ce cours.

### `nodemon` vs `node --watch`

Les deux redémarrent automatiquement le programme à chaque sauvegarde.
- `nodemon` : librairie externe (utilisée dans le cours, `npm i -D nodemon`, script `"start": "nodemon server"`).
- `node --watch` : intégré à Node ≥ 18, **aucune installation**.

---

## 6. Trois façons d'exécuter du JavaScript

### 6.1 Le REPL (Read – Eval – Print – Loop)

Tape `node` seul dans le terminal :

```
> let a = 20
undefined                 ← une déclaration "retourne" undefined, c'est normal
> b = 60
60
> a + b
80
> function saluer(personne) {
... console.log("Bonjour", personne)     ← les "..." = Node attend la suite
... }
undefined
> saluer("les étudiants")
Bonjour les étudiants
undefined                 ← console.log ne retourne rien
> _                       ← "_" contient le dernier résultat
undefined
> .help                   ← liste des commandes
> .exit                   ← quitter (ou Ctrl+C deux fois)
```

👉 Le REPL est parfait pour **tester rapidement** une méthode (`[1,2,3].map(x => x * 2)`).

### 6.2 Un fichier

```bash
node server.js
node exemples/01-bonjour.js
```

### 6.3 Un script npm

```bash
npm start          # raccourci spécial pour "start"
npm run dev        # pour tous les autres scripts : npm run <nom>
```

Avantage : toute l'équipe utilise la même commande, peu importe le fichier d'entrée.

---

## 7. Lire et écrire des fichiers avec `fs/promises`

### 7.1 Lire

```js
import { readFile } from 'node:fs/promises'

const data = await readFile('./data/message.txt')   // un Buffer (octets bruts)
console.log(data)              // <Buffer 42 6f 6e 6a 6f 75 72 ...>
console.log(data.toString())   // le texte

// ✅ Mieux : demander directement du texte
const texte = await readFile('./data/message.txt', 'utf8')
```

Décortiquons la ligne d'import :

```
import { readFile } from 'node:fs/promises'
  │        │                 │
  │        │                 └─ le module (node: = module intégré à Node, recommandé)
  │        └─ la fonction voulue ; { } = on en prend une parmi plusieurs
  └─ mot-clé pour utiliser un module
```

Et le mot-clé **`await`** : `readFile` est **asynchrone**, il renvoie une *promesse* (« je te donnerai le contenu plus tard »). `await` met en pause **ce code-là seulement** jusqu'à ce que la promesse soit tenue — sans bloquer le reste de Node.

### 7.2 Écrire

```js
import { readFile, writeFile, appendFile } from 'node:fs/promises'

const texte = await readFile('./data/message.txt', 'utf8')
const nouveau = texte + '\nJe suis encore ici mon audience'

await writeFile('./data/message.txt', nouveau)            // REMPLACE tout le contenu (crée le fichier s'il n'existe pas)
await appendFile('./data/journal.txt', 'une ligne\n')     // AJOUTE à la fin
```

> ⚠️ **Piège** : sur les diapositives, `writeFile(...)` est appelé **sans `await`**. Le programme continue avant la fin de l'écriture : si tu relis le fichier juste après, tu risques l'ancien contenu, et une erreur d'écriture passerait inaperçue. **Toujours `await`** une opération asynchrone dont tu dépends.

### 7.3 Le piège n° 1 : les chemins relatifs

`'./data/message.txt'` est relatif au **dossier depuis lequel tu lances `node`** (le *current working directory*), **pas** au fichier `.js` !

```bash
cd chap01-intro-node && node exemples/02-lire-fichier.js   # ✅ trouve ./data/message.txt
cd exemples && node 02-lire-fichier.js                      # ❌ ENOENT : cherche exemples/data/message.txt
```

✅ Solution professionnelle : construire le chemin **à partir du fichier courant** :

```js
import path from 'node:path'

// import.meta.dirname = dossier du fichier actuel (Node ≥ 20.11)
const chemin = path.join(import.meta.dirname, '..', 'data', 'message.txt')
```

`path.join` gère aussi les `\` de Windows et les `/` de Linux/Mac. Démonstration dans [`exemples/05-chemins.js`](exemples/05-chemins.js).

---

## 8. Gérer les erreurs

Une lecture peut échouer : fichier absent, pas de permission, chemin faux… Sans gestion, le programme **plante**.

### Avec `await` → `try / catch`

```js
try {
  const texte = await readFile('./data/message.txt', 'utf8')
  console.log(texte)
} catch (err) {
  console.log('Il y a un problème :', err.message)
}
```

### Avec les promesses → `.then / .catch`

```js
readFile('./data/message.txt', 'utf8')
  .then(texte => console.log(texte))
  .catch(err => console.log('Il y a un problème :', err.message))
```

Les deux font la même chose. `async/await + try/catch` se lit de haut en bas comme du code synchrone : c'est la forme qu'on utilisera dans les controllers Express.

### Réagir selon le type d'erreur

Chaque erreur système a un `code` :

| `err.code` | Signification |
|---|---|
| `ENOENT` | *Error NO ENTry* : fichier ou dossier introuvable |
| `EACCES` / `EPERM` | permission refusée |
| `EISDIR` | c'est un dossier, pas un fichier |

```js
} catch (err) {
  if (err.code === 'ENOENT') console.log('Fichier introuvable, vérifie le chemin.')
  else throw err   // erreur inattendue : on ne la cache pas
}
```

> 🧠 Règle pro : **ne jamais avaler une erreur en silence** (`catch {}` vide). Soit tu la traites, soit tu la relances.

---

## 9. L'objet `process`

| Propriété | Contenu |
|---|---|
| `process.argv` | les arguments de la ligne de commande : `node app.js Yassine` → `['…/node', '…/app.js', 'Yassine']` |
| `process.env` | les variables d'environnement (on s'en servira avec `.env` au chap. 4) |
| `process.cwd()` | le dossier courant |
| `process.platform` | `win32`, `linux`, `darwin` |
| `process.exitCode = 1` | signaler un échec à la fin du programme |

Voir [`exemples/06-process.js`](exemples/06-process.js).

---

## 10. Les exemples à exécuter

Depuis le dossier `chap01-intro-node` :

| Fichier | Notion | Commande |
|---|---|---|
| `server.js` | premier programme (cours) | `npm start` |
| `exemples/01-bonjour.js` | fonctions, template strings | `node exemples/01-bonjour.js` |
| `exemples/02-lire-fichier.js` | `readFile`, Buffer vs texte | `node exemples/02-lire-fichier.js` |
| `exemples/03-ecrire-fichier.js` | `writeFile`, `appendFile` | `node exemples/03-ecrire-fichier.js` |
| `exemples/04-gestion-erreurs.js` | `try/catch`, `.then/.catch`, `err.code` | `node exemples/04-gestion-erreurs.js` |
| `exemples/05-chemins.js` | cwd vs `import.meta.dirname` | `node exemples/05-chemins.js` |
| `exemples/06-process.js` | `process.argv`, `env` | `node exemples/06-process.js Yassine` |
| `exemples/07-bloquant-vs-non-bloquant.js` | sync vs async, mesure | `node exemples/07-bloquant-vs-non-bloquant.js` |

---

## ✅ Résumé

1. **Frontend** = navigateur ; **backend** = serveur + données.
2. **Node.js** = V8 + boucle d'événements → un thread, non-bloquant, très performant pour les entrées/sorties.
3. **npm** gère les librairies ; `package.json` (la liste) et `package-lock.json` (les versions exactes) vont sur GitHub, `node_modules` jamais.
4. `"type": "module"` → `import/export` et `await` au premier niveau.
5. **`fs/promises`** : `readFile`, `writeFile` (remplace), `appendFile` (ajoute). Toujours `await`.
6. Chemins : `path.join(import.meta.dirname, ...)` plutôt que `./`.
7. Erreurs : `try/catch` (avec `await`) ou `.catch` (avec `.then`) ; regarder `err.code`.
8. Jamais de `...Sync` dans un serveur.

## 🧪 Auto-évaluation (réponds sans regarder)

1. Pourquoi `node_modules/` n'est-il pas poussé sur GitHub ? Comment un collègue le récupère-t-il ?
2. Quelle est la différence entre `writeFile` et `appendFile` ?
3. Que se passe-t-il si tu enlèves `"type": "module"` du `package.json` et lances `server.js` ?
4. `^4.18.2` : la version `4.21.0` est-elle acceptée ? Et `5.0.0` ?
5. Pourquoi `node 02-lire-fichier.js` échoue-t-il quand on est dans le dossier `exemples/` ?
6. Quelle différence entre `data` et `data.toString()` après `readFile` sans encodage ?
7. Pourquoi `readFileSync` est-il dangereux dans un serveur qui reçoit 1 000 requêtes ?

<details>
<summary>Réponses</summary>

1. Il est très lourd et se reconstruit : `npm install` lit `package.json` + `package-lock.json`.
2. `writeFile` remplace tout le contenu ; `appendFile` ajoute à la fin.
3. Erreur `Cannot use import statement outside a module` (Node traite le fichier en CommonJS). *(Les versions récentes de Node peuvent détecter la syntaxe et l'accepter avec un avertissement ; on met quand même toujours `"type": "module"`.)*
4. `4.21.0` oui (même majeure) ; `5.0.0` non.
5. Le chemin `./data/...` est résolu depuis le dossier courant (`exemples/`), pas depuis le fichier.
6. `data` est un Buffer (octets) ; `toString()` le décode en texte UTF-8.
7. Pendant chaque lecture, le thread unique est bloqué : toutes les autres requêtes attendent.
</details>

👉 Passe maintenant aux [**exercices**](EXERCICES.md).
