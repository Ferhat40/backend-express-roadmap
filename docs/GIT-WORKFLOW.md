# Chapitre 0 — Le workflow Git & GitHub

> Source : *Chap 1 Introduction au GitHub* (Dr Diarra). Ce fichier est ton aide-mémoire : à chaque fin de chapitre, on refait exactement ce cycle.

## 1. Pourquoi Git ?

| Besoin | Ce que Git apporte |
|---|---|
| Travailler à plusieurs | Chacun travaille sur **sa branche**, on fusionne ensuite |
| Revenir en arrière | Chaque **commit** est une photo du projet à un instant T |
| Être recruté | Ton GitHub est ton **portfolio** : les employeurs le regardent |
| CI/CD | Les déploiements automatiques partent d'un dépôt Git |

**Vocabulaire**

- **Dépôt (repo)** : un projet suivi par Git. Local (ton PC) ou distant (GitHub).
- **Commit** : une sauvegarde nommée de l'état des fichiers.
- **Branche** : une ligne de travail parallèle. `main` est la branche principale.
- **Remote `origin`** : le nom par défaut du dépôt distant sur GitHub.
- **Pull Request (PR)** : une demande de fusion d'une branche dans `main`, relue avant d'être acceptée.

## 2. Les 3 zones de Git (à bien comprendre)

```
 Dossier de travail ──git add──▶ Zone de préparation (staging) ──git commit──▶ Historique local ──git push──▶ GitHub
   (tes fichiers)                   (ce qui ira dans le commit)                  (.git)                       (origin)
```

`git status` te dit à tout moment dans quelle zone se trouve chaque fichier :
- **rouge** = modifié mais pas encore `add`
- **vert** = prêt à être commité

## 3. Configuration (une seule fois par ordinateur)

```bash
git config --global user.name "Ton Nom"
git config --global user.email "ton-email@exemple.com"   # le même que ton compte GitHub
git config --global init.defaultBranch main
git config --list                                          # vérifier
```

## 4. Créer le dépôt sur GitHub

1. github.com → **New repository**
2. Nom : `backend-express-roadmap`
3. **Ne coche rien** (pas de README, pas de .gitignore) : on les a déjà en local.
4. **Create repository** → copie l'URL HTTPS : `https://github.com/<ton-user>/backend-express-roadmap.git`

> 💡 Le cours propose l'autre méthode : créer le repo *avec* un README, puis `git clone`. Les deux sont valables. Ici on part d'un dossier existant, donc on fait `git init` + `git remote add`.

## 5. Premier envoi (une seule fois)

Dans le terminal **Git Bash** de VS Code, positionné dans le dossier `backend-express-roadmap` :

```bash
git init                         # crée le dossier caché .git
git status                       # tout est rouge (non suivi)
git add README.md .gitignore docs/
git commit -m "chore: initialisation du dépôt et roadmap"
git remote add origin https://github.com/<ton-user>/backend-express-roadmap.git
git push -u origin main          # -u = lier main local à origin/main
```

## 6. Le cycle d'un chapitre (à répéter à chaque chapitre)

```bash
# 1) Partir d'un main à jour
git checkout main
git pull

# 2) Créer la branche du chapitre et s'y placer
git checkout -b chap01-intro-node      # = git branch chap01-intro-node + git checkout chap01-intro-node
git branch                              # l'étoile * montre la branche active

# 3) Travailler... puis regarder ce qui a changé
git status
git diff                                # le détail ligne par ligne

# 4) Préparer et enregistrer (plusieurs petits commits > un énorme commit)
git add chap01-intro-node/
git commit -m "feat(chap01): leçon et exemples Node.js"

# 5) Envoyer la branche sur GitHub
git push --set-upstream origin chap01-intro-node     # la 1re fois ; ensuite juste: git push
```

Puis sur GitHub :

1. Bouton **Compare & pull request**
2. Titre clair + description (ce que contient le chapitre, ce que tu as appris)
3. **Create pull request**
4. Relire l'onglet **Files changed**
5. **Merge pull request** → **Confirm merge**
6. (Dans le cadre du cours on **garde** la branche ; en entreprise on la supprime.)

Retour en local :

```bash
git checkout main
git pull                    # récupérer la fusion
git log --oneline --graph   # voir l'historique
```

## 7. Travailler en équipe (rappel du cours)

Quand un collègue a fusionné une PR :

```bash
git checkout main
git pull
git checkout ma-branche
git merge main              # intégrer les nouveautés dans ta branche
```

En cas de **conflit**, Git marque le fichier ainsi :

```
<<<<<<< HEAD
ta version
=======
la version de main
>>>>>>> main
```

Tu choisis la bonne version, tu supprimes les marqueurs, puis `git add` + `git commit`.

## 8. Messages de commit professionnels (Conventional Commits)

| Préfixe | Utilisation | Exemple |
|---|---|---|
| `feat:` | nouvelle fonctionnalité | `feat(chap03): route GET /categories/:id` |
| `fix:` | correction de bug | `fix(chap04): findByPk prend l'id, pas un objet` |
| `docs:` | documentation | `docs(chap01): ajout section event loop` |
| `refactor:` | réorganisation sans changer le comportement | `refactor: controllers dans un dossier séparé` |
| `chore:` | configuration, outillage | `chore: ajout .gitignore` |

## 9. Commandes de dépannage

| Situation | Commande |
|---|---|
| Annuler un `git add` | `git restore --staged fichier` |
| Annuler des modifs non commitées d'un fichier | `git restore fichier` ⚠️ perte des modifs |
| Corriger le message du dernier commit (pas encore poussé) | `git commit --amend -m "nouveau message"` |
| J'ai commité `.env` par erreur | `git rm --cached .env` puis commit, **et change le mot de passe** |
| Voir les remotes | `git remote -v` |
| Mettre de côté un travail en cours | `git stash` / `git stash pop` |

## ⚠️ Règles d'or

1. **Jamais** de `.env` ni de `node_modules/` sur GitHub (le `.gitignore` s'en charge).
2. `git status` avant **chaque** `add` et **chaque** `commit`.
3. Un commit = une idée.
4. On ne travaille **jamais** directement sur `main`.
