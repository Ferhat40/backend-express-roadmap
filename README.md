#  Backend Express — Roadmap d'apprentissage

> Cours **Programmation Web Client-Serveur** (Cité collégiale, AU26 — Dr Bakary Diarra)
> Apprentissage étape par étape : chaque chapitre = une leçon détaillée + des exemples exécutables + des exercices corrigés, poussé sur GitHub via une branche et une Pull Request.

##  La roadmap

| # | Chapitre | Notions clés | Statut |
|---|----------|--------------|--------|
| 0 | [Workflow Git & GitHub](docs/GIT-WORKFLOW.md) | init, branch, add, commit, push, Pull Request, merge, pull |  |
| 1 | [Introduction à Node.js](chap01-intro-node/) | Frontend vs backend, Node, npm, `package.json`, ES Modules, REPL, `fs/promises`, gestion d'erreurs |  |
| 2 | Programmation JavaScript & asynchrone | `var/let/const`, portée, hoisting, fonctions fléchées, modules, objets, tableaux (`map`, `filter`, `find`, `reduce`…), déstructuration, spread/rest, callbacks, promesses, `async/await` |  |
| 3 | Client-serveur & Express | HTTP (verbes, statuts, URL), serveur `http` natif, Express, routes, `req`/`res`, middlewares (`helmet`, `cors`, `compression`), CRUD, Postman/Bruno, structure MC |  |
| 4 | Express + MySQL avec Sequelize | XAMPP, `.env`/dotenv, ORM, connexion, modèles, `sync`, controllers CRUD |  |
| 5 | Relations entre entités | `hasOne`, `hasMany`, `belongsTo`, `belongsToMany`, méthodes d'association, `include` |  |
| 6 | Projet final | API complète Étudiants / Notes / Matières / Places + upload photo (`multer`) |  |

##  Structure de chaque chapitre

```
chapXX-nom/
├── README.md      ← la leçon (à lire en premier)
├── exemples/      ← code de la leçon, à exécuter et modifier
├── EXERCICES.md   ← les énoncés
├── exercices/     ← fichiers de départ (avec des TODO)
└── solutions/     ← corrigés (à ouvrir APRÈS avoir essayé !)
```

##  Méthode de travail (pour un apprentissage solide)

1. **Lire** la leçon en entier une première fois.
2. **Taper** les exemples toi-même (pas de copier-coller) et les exécuter.
3. **Casser** le code volontairement : lire l'erreur, comprendre, réparer.
4. **Faire** les exercices sans regarder les solutions.
5. **Comparer** avec la solution, noter ce qui diffère.
6. **Pousser** le chapitre sur GitHub (branche → commit → push → PR → merge).

##  Prérequis

- Node.js LTS (≥ 20) — `node -v`
- Git — `git --version`
- VS Code
- Postman, Bruno ou Thunder Client (à partir du chapitre 3)
- XAMPP (MySQL + phpMyAdmin) (à partir du chapitre 4)
