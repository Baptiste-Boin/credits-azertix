# 🌟 Système de Crédits pour Vidéos YouTube - Azertix 🌟

Ce projet est une plateforme web front-end sophistiquée, conçue pour présenter de manière claire, élégante et professionnelle les crédits des personnes et des ressources (musiques, shaders, mods, etc.) utilisées dans les vidéos de la chaîne YouTube "Azertix". Le site est entièrement statique, ce qui garantit des performances optimales, une sécurité renforcée et un hébergement simplifié et économique.

Ce document sert de guide complet pour comprendre, installer, personnaliser et contribuer à ce projet.

> **Philosophie du projet :** La transparence et la reconnaissance sont au cœur de la création de contenu de qualité. Ce site a pour vocation de célébrer les créateurs et les outils qui rendent les vidéos possibles, en offrant une expérience utilisateur fluide et agréable.

---

## 📜 Table des Matières

1.  [**Introduction**](#-introduction)
    * [Objectifs du Projet](#-objectifs-du-projet)
    * [Public Cible](#-public-cible)
2.  [**✨ Fonctionnalités Clés**](#-fonctionnalités-clés)
    * [Interface Utilisateur](#interface-utilisateur)
    * [Gestion de Contenu](#gestion-de-contenu)
    * [Interaction Communautaire](#interaction-communautaire)
3.  [**🛠️ Technologies et Outils**](#️-technologies-et-outils)
    * [Fondations Front-End](#fondations-front-end)
    * [Style et Design](#style-et-design)
    * [Icônes et Polices](#icônes-et-polices)
    * [Services Externes](#services-externes)
4.  [**🚀 Démarrage Rapide**](#-démarrage-rapide)
    * [Prérequis](#prérequis)
    * [Installation](#installation)
    * [Lancement en Local](#lancement-en-local)
5.  [**📁 Structure du Projet**](#-structure-du-projet)
    * [Arborescence des Fichiers](#arborescence-des-fichiers)
    * [Description des Fichiers Principaux](#description-des-fichiers-principaux)
6.  [**🔧 Guide de Personnalisation**](#-guide-de-personnalisation)
    * [**6.1. Gestion des Vidéos et Crédits**](#61-gestion-des-vidéos-et-crédits)
        * [Anatomie de l'objet `videoDatabase`](#anatomie-de-lobjet-videodatabase)
        * [Ajouter une Nouvelle Vidéo](#ajouter-une-nouvelle-vidéo)
        * [Modifier une Vidéo Existante](#modifier-une-vidéo-existante)
        * [Gérer les Catégories de Crédits](#gérer-les-catégories-de-crédits)
    * [**6.2. Personnalisation Visuelle**](#62-personnalisation-visuelle)
        * [Modifier le Logo et le Profil](#modifier-le-logo-et-le-profil)
        * [Ajuster les Couleurs du Thème](#ajuster-les-couleurs-du-thème)
        * [Changer les Polices](#changer-les-polices)
    * [**6.3. Configuration du Formulaire**](#63-configuration-du-formulaire)
        * [Connecter votre compte Formspree](#connecter-votre-compte-formspree)
7.  [**🏗️ Architecture du Code JavaScript**](#️-architecture-du-code-javascript)
    * [Initialisation (`DOMContentLoaded`)](#initialisation-domcontentloaded)
    * [Le Moteur de Rendu de Page (SPA)](#le-moteur-de-rendu-de-page-spa)
    * [Génération de Contenu Dynamique](#génération-de-contenu-dynamique)
    * [Gestionnaire d'Événements](#gestionnaire-dévénements)
    * [Logique du Thème Sombre/Clair](#logique-du-thème-sombreclair)
8.  [**☁️ Déploiement**](#️-déploiement)
    * [Hébergement Statique : Les Bases](#hébergement-statique--les-bases)
    * [Déployer sur GitHub Pages](#déployer-sur-github-pages)
    * [Déployer sur Netlify](#déployer-sur-netlify)
    * [Déployer sur Vercel](#déployer-sur-vercel)
9.  [**🤝 Guide de Contribution**](#-guide-de-contribution)
    * [Code de Conduite](#code-de-conduite)
    * [Comment Contribuer ?](#comment-contribuer-)
    * [Signaler un Bug](#signaler-un-bug)
    * [Proposer une Amélioration](#proposer-une-amélioration)
    * [Processus de Pull Request](#processus-de-pull-request)
10. [**❓ Foire Aux Questions (FAQ)**](#-foire-aux-questions-faq)
11. [**⚖️ Licence**](#️-licence)
12. [**🙏 Remerciements**](#-remerciements)
13. [**📞 Contact**](#-contact)

---

## 🌐 Introduction

Ce projet a été initié pour répondre à un besoin simple mais crucial : offrir un espace dédié et bien organisé pour les crédits des vidéos de la chaîne "Azertix". Sur YouTube, les descriptions sont souvent limitées en formatage et peuvent devenir rapidement désordonnées. Cette plateforme externe résout ce problème en offrant une interface riche, consultable et agréable à parcourir.

### 🎯 Objectifs du Projet

* **Centralisation :** Créer une source unique et officielle pour tous les crédits liés aux vidéos.
* **Clarté :** Présenter les informations de manière structurée et facile à lire, avec des catégories distinctes.
* **Expérience Utilisateur :** Offrir une navigation rapide et fluide grâce à une architecture de type SPA (Single Page Application).
* **Esthétique :** Proposer un design moderne, professionnel et en accord avec l'identité visuelle de la chaîne Azertix.
* **Accessibilité :** Assurer que le site soit utilisable sur tous les appareils (responsive design) et pour tous les utilisateurs (thème clair/sombre).
* **Maintenance Facile :** Permettre des mises à jour rapides du contenu sans avoir à toucher au code HTML/CSS, via un simple objet JavaScript.

### 👥 Public Cible

* **Les Spectateurs de la Chaîne :** Qui cherchent à connaître les musiques, les mods, les shaders ou les personnes ayant contribué à une vidéo.
* **L'Équipe d'Azertix :** Pour gérer et mettre à jour facilement la liste des crédits.
* **Les Créateurs Crédités :** Qui peuvent voir leur travail mis en avant de manière professionnelle.

---

## ✨ Fonctionnalités Clés

Ce site web n'est pas une simple page HTML. Il intègre plusieurs fonctionnalités dynamiques pour une expérience complète.

### Interface Utilisateur

* **Design Moderne et Responsive** : Construit avec Tailwind CSS, l'interface est épurée et s'adapte parfaitement aux mobiles, tablettes et ordinateurs de bureau.
* **Thème Sombre/Clair** : Un interrupteur permet de basculer entre un mode clair et un mode sombre. La préférence de l'utilisateur est sauvegardée dans le `localStorage` du navigateur pour les visites futures.
* **Navigation Fluide (SPA Simulée)** : Le passage d'une page à l'autre se fait sans rechargement complet de la page. Le contenu est injecté dynamiquement avec JavaScript, ce qui rend la navigation quasi instantanée.
* **Animations Subtiles** : Des transitions douces et des effets de survol ont été ajoutés pour améliorer l'expérience visuelle sans être distrayants.
* **Icônes de Qualité** : Utilisation de la bibliothèque [Remix Icon](https://remixicon.com/) pour des icônes nettes et cohérentes sur tout le site.

### Gestion de Contenu

* **Base de Données Centralisée en JS** : Toutes les données des vidéos (titres, miniatures, descriptions, liens, et listes de crédits) sont stockées dans un unique objet JavaScript (`videoDatabase`). Cela rend l'ajout ou la modification de contenu trivial.
* **Pages Générées Dynamiquement** :
    * **Accueil** : Met en avant la vidéo la plus récente ou "en vedette", affiche les derniers crédits ajoutés et propose une navigation par catégories pour un accès rapide.
    * **Tous les Crédits** : Une galerie complète présentant toutes les vidéos sous forme de cartes cliquables.
    * **Détails de la Vidéo** : Une page dédiée pour chaque vidéo, listant de manière exhaustive tous les crédits, regroupés par catégories (ex: Musiques, Shaders, Contributeurs, Logiciels, etc.).
    * **Signaler un Crédit Manquant** : Une page avec un formulaire pour que la communauté puisse facilement signaler des oublis ou des erreurs.

### Interaction Communautaire

* **Formulaire de Signalement Fonctionnel** : Le formulaire de la page "Signaler un crédit" est pleinement opérationnel et utilise le service externe [Formspree](https://formspree.io/). Les soumissions sont envoyées directement à une adresse e-mail configurée, sans nécessiter de back-end personnalisé.
* **Liens Directs** : Chaque vidéo listée contient un lien direct vers la vidéo sur YouTube pour une consultation immédiate.

---

## 🛠️ Technologies et Outils

Ce projet a été construit avec des technologies modernes, choisies pour leur efficacité, leur simplicité et leur robustesse.

### Fondations Front-End

* **HTML5** : Utilisé pour la structure sémantique du site, garantissant l'accessibilité et un bon référencement.
* **JavaScript (ES6+)** : Le cœur logique du projet. Il gère le routage, le rendu dynamique du contenu, la gestion des événements, l'interaction avec le `localStorage` et la manipulation du DOM.

### Style et Design

* **CSS3** : Pour les styles personnalisés, les animations complexes et les variables de thème (couleurs, etc.).
* **Tailwind CSS** : Un framework CSS "utility-first" qui permet de construire des designs complexes rapidement en composant des classes utilitaires directement dans le HTML. Il est responsable de la majorité du style et du design responsive.

### Icônes et Polices

* **Google Fonts** : Intégration de polices web pour une typographie unique et lisible. Les polices utilisées sont :
    * `Pacifico` : Pour les titres et logos, apportant une touche manuscrite et créative.
    * `Montserrat` : Pour le corps du texte, offrant une excellente lisibilité.
    * `Orbitron` : Pour certains éléments d'interface, donnant un aspect moderne et "tech".
* **Remix Icon** : Une bibliothèque d'icônes open-source complète et de haute qualité, utilisée pour tous les éléments d'interface (menu, liens, etc.).

### Services Externes

* **Formspree** : Un service tiers qui gère les soumissions de formulaires HTML. Il fournit un endpoint URL où le formulaire envoie les données, et Formspree se charge de les acheminer par e-mail. C'est une solution parfaite pour les sites statiques.

---

## 🚀 Démarrage Rapide

Suivez ces étapes pour obtenir une copie locale du projet et la faire fonctionner.

### Prérequis

* Un **navigateur web** moderne (Chrome, Firefox, Edge, Safari).
* Un **éditeur de code** (comme [VS Code](https://code.visualstudio.com/)) pour modifier les fichiers.
* (Optionnel) [Git](https://git-scm.com/) pour cloner le dépôt.
* (Optionnel) [Node.js](https://nodejs.org/) et `npm` si vous souhaitez utiliser un serveur de développement local avec rechargement à chaud.

### Installation

1.  **Clonez le dépôt (ou téléchargez le ZIP) :**
    ```bash
    git clone [https://github.com/VOTRE_NOM_UTILISATEUR/credits-azertix.git](https://github.com/VOTRE_NOM_UTILISATEUR/credits-azertix.git)
    cd credits-azertix
    ```
    Si vous n'avez pas Git, vous pouvez télécharger les fichiers en tant que ZIP depuis GitHub et les extraire sur votre ordinateur.

2.  **Préparez vos ressources :**
    * Placez votre image de profil à la racine du projet et nommez-la `profil.png`.
    * Assurez-vous que les miniatures des vidéos sont accessibles via les URL que vous spécifierez dans la base de données JavaScript.

### Lancement en Local

#### Méthode 1 : Simple (Ouvrir le fichier)

La manière la plus simple est d'ouvrir directement le fichier `index.html` dans votre navigateur.
> **Note :** Certaines fonctionnalités avancées ou certains navigateurs peuvent avoir des restrictions de sécurité (CORS) lors du chargement de fichiers locaux. Si vous rencontrez des problèmes, la méthode 2 est recommandée.

#### Méthode 2 : Recommandée (Serveur de développement)

L'utilisation d'un petit serveur local résout tous les problèmes potentiels de sécurité et simule un environnement de production.

1.  **Si vous avez Python installé :**
    ```bash
    # Pour Python 3
    python -m http.server 8000
    ```
    Ouvrez ensuite `http://localhost:8000` dans votre navigateur.

2.  **Si vous avez Node.js et `npm` :**
    Installez un serveur simple comme `live-server`, qui offre en plus le rechargement automatique.
    ```bash
    npm install -g live-server
    live-server
    ```
    Votre navigateur s'ouvrira automatiquement sur la bonne adresse.

---

## 📁 Structure du Projet

Comprendre l'organisation des fichiers est essentiel pour personnaliser et maintenir le site.

### Arborescence des Fichiers

```
credits-azertix/
├── 📄 index.html              # Fichier principal, point d'entrée du site
├── 🎨 style.css               # Feuille de style personnalisée
├── ⚙️ script.js               # Cœur logique du site (JavaScript)
├── 🖼️ profil.png              # Image de profil (à remplacer)
└── 📄 README.md               # Ce document
```

### Description des Fichiers Principaux

* `index.html`: C'est le seul fichier HTML du projet. Il contient la structure de base (squelette) de la page, y compris l'en-tête, le pied de page, et un conteneur principal (`<main id="app">`) où tout le contenu des pages est injecté dynamiquement par JavaScript. C'est aussi ici que les scripts et les feuilles de style sont chargés.

* `style.css`: Ce fichier contient les styles CSS qui ne sont pas gérés par Tailwind CSS. Cela inclut :
    * Les définitions des variables de couleur pour les thèmes clair et sombre.
    * Les styles de base pour les balises `body` et `html`.
    * Quelques classes personnalisées pour des animations ou des composants spécifiques.

* `script.js`: Le cerveau de l'application. Ce fichier est responsable de :
    * Stocker toutes les données des vidéos (`videoDatabase`).
    * Gérer la logique de "routage" pour afficher les différentes pages.
    * Générer le HTML pour les listes de vidéos, les détails, etc.
    * Gérer tous les événements utilisateur (clics, changement de thème).
    * Interagir avec le `localStorage` pour sauvegarder les préférences.

---

## 🔧 Guide de Personnalisation

Cette section vous guidera à travers les modifications les plus courantes.

### 6.1. Gestion des Vidéos et Crédits

Toute la gestion du contenu se fait dans le fichier `script.js`.

#### Anatomie de l'objet `videoDatabase`

La constante `videoDatabase` est un tableau d'objets. Chaque objet représente une vidéo et suit une structure précise :

```javascript
{
    // --- Métadonnées de la vidéo ---
    id: 'identifiant-unique-de-la-video', // Doit être unique. Utilisé pour les URL.
    title: 'Titre de la vidéo',
    thumbnail: 'URL_vers_la_miniature.jpg', // Lien direct vers une image
    duration: '12:34', // Format MM:SS
    date: '30 juillet 2025',
    views: '123K vues',
    description: 'Une brève description de la vidéo qui apparaît sur la page de détails.',
    youtubeLink: '[https://youtu.be/dQw4w9WgXcQ](https://youtu.be/dQw4w9WgXcQ)', // Lien vers la vidéo sur YouTube

    // --- Section des crédits ---
    // C'est un objet où chaque clé est une catégorie de crédit.
    credits: {
        '🎵 Musiques': [
            { name: 'Nom du morceau', by: 'Nom de l\'artiste' },
            { name: 'Autre morceau', by: 'Un autre artiste' }
        ],
        '🎨 Shaders & Packs de Ressources': [
            { name: 'BSL Shaders', by: 'capttatsu' },
            { name: 'Faithful 32x', by: 'Vattic' }
        ],
        '👥 Contributeurs': [
            { name: 'Pseudo du joueur', by: 'Rôle (ex: Builder, Acteur)' }
        ],
        // Vous pouvez ajouter autant de catégories que vous le souhaitez.
        '⚙️ Logiciels utilisés': [
            { name: 'Adobe Premiere Pro', by: 'Montage Vidéo' },
            { name: 'Blender', by: 'Rendus 3D' }
        ]
    }
}
```

#### Ajouter une Nouvelle Vidéo

1.  Ouvrez le fichier `script.js`.
2.  Repérez le tableau `videoDatabase`.
3.  Copiez la structure d'un objet vidéo existant.
4.  Collez-le à la fin du tableau (avant le `]`).
5.  Modifiez toutes les valeurs (id, titre, miniature, crédits, etc.) pour correspondre à votre nouvelle vidéo.
6.  **Important :** Assurez-vous que le `id` est unique !

#### Modifier une Vidéo Existante

1.  Ouvrez `script.js`.
2.  Trouvez l'objet de la vidéo que vous souhaitez modifier en cherchant son `title` ou son `id`.
3.  Modifiez simplement les valeurs des champs souhaités.

#### Gérer les Catégories de Crédits

* **Pour ajouter une nouvelle catégorie** (par exemple, "Mods Minecraft"), il suffit d'ajouter une nouvelle clé à l'objet `credits` de la vidéo concernée :
    ```javascript
    'Mods Minecraft': [
        { name: 'Just Enough Items', by: 'mezz' }
    ]
    ```
* Le système affichera automatiquement cette nouvelle catégorie sur la page de détails de la vidéo.

### 6.2. Personnalisation Visuelle

#### Modifier le Logo et le Profil

* **Profil :** Remplacez le fichier `profil.png` à la racine par votre propre image, en conservant le même nom et format.
* **Logo du site :** Le logo dans la barre de navigation est actuellement du texte. Pour le modifier, allez dans `index.html` et changez le texte à l'intérieur de la balise `<div class="text-2xl font-pacifico">`.

#### Ajuster les Couleurs du Thème

Les couleurs sont définies comme des variables CSS dans `style.css`.

1.  Ouvrez `style.css`.
2.  Repérez les sélecteurs `:root` (thème clair) et `[data-theme="dark"]` (thème sombre).
3.  Modifiez les valeurs hexadécimales des variables (`--bg-color`, `--text-color`, etc.) pour correspondre à votre charte graphique.

```css
/* Thème clair (défaut) */
:root {
  --bg-color: #f0f0f0;
  --text-color: #1a1a1a;
  /* ... autres couleurs ... */
}

/* Thème sombre */
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  /* ... autres couleurs ... */
}
```

#### Changer les Polices

Les polices sont importées depuis Google Fonts dans `index.html`.

1.  Allez sur [Google Fonts](https://fonts.google.com/) et choisissez vos nouvelles polices.
2.  Cliquez sur "Get embed code" et copiez les balises `<link>`.
3.  Dans `index.html`, remplacez les liens Google Fonts existants par les vôtres.
4.  Dans `tailwind.config.js` (si vous l'utilisez) ou `style.css`, mettez à jour les familles de polices (`font-family`).

### 6.3. Configuration du Formulaire

1.  Créez un compte sur [Formspree.io](https://formspree.io/).
2.  Créez un nouveau formulaire et obtenez votre URL d'endpoint. Elle ressemblera à `https://formspree.io/f/VOTRE_ID`.
3.  Ouvrez `script.js` et trouvez la fonction `renderReportPage()`.
4.  Localisez la balise `<form>` et remplacez l'attribut `action` par votre nouvelle URL Formspree.

---

## 🏗️ Architecture du Code JavaScript

Le fichier `script.js` est le moteur du site. Voici un aperçu de son fonctionnement.

### Initialisation (`DOMContentLoaded`)

Le script attend que le DOM soit entièrement chargé avant de s'exécuter. C'est le point de départ de toute la logique.

### Le Moteur de Rendu de Page (SPA)

Le site simule une SPA en interceptant les clics sur les liens de navigation.
1.  Un écouteur d'événements global est attaché au `document`.
2.  Quand un clic est détecté, le script vérifie si l'élément cliqué (ou un de ses parents) est un lien avec un attribut `data-page`.
3.  Si c'est le cas, il empêche le comportement par défaut (rechargement de la page).
4.  Il appelle la fonction `navigateTo(pageId)` qui, à son tour, appelle la fonction de rendu appropriée (`renderHome`, `renderAllCredits`, etc.).
5.  La fonction de rendu génère le HTML nécessaire et l'injecte dans l'élément `<main id="app">`.

### Génération de Contenu Dynamique

Les fonctions comme `renderAllCredits` ou `renderVideoDetail` parcourent le tableau `videoDatabase` et utilisent des "template literals" JavaScript pour construire des chaînes de caractères HTML. Cette méthode est simple et efficace pour un projet de cette taille.

### Gestionnaire d'Événements

Un seul gestionnaire d'événements principal est utilisé pour la navigation, ce qui est plus performant que d'attacher des écouteurs à chaque lien individuellement (délégation d'événements). D'autres écouteurs spécifiques sont ajoutés pour des éléments comme le sélecteur de thème.

### Logique du Thème Sombre/Clair

Le script vérifie le `localStorage` au chargement pour voir si un thème a déjà été défini. Il applique ce thème et écoute les clics sur le bouton de changement de thème pour basculer les classes sur la balise `<html>` et mettre à jour la valeur dans le `localStorage`.

---

## ☁️ Déploiement

Déployer un site statique est simple et souvent gratuit.

### Hébergement Statique : Les Bases

Tout ce que vous avez à faire est de téléverser les fichiers (`index.html`, `style.css`, `script.js`, `profil.png`) sur un serveur web.

### Déployer sur GitHub Pages

1.  Assurez-vous que votre projet est un dépôt GitHub.
2.  Allez dans `Settings > Pages`.
3.  Sous "Build and deployment", sélectionnez la source "Deploy from a branch".
4.  Choisissez la branche `main` (ou `master`) et le dossier `/ (root)`.
5.  Cliquez sur "Save". Votre site sera disponible à l'adresse `https://VOTRE_NOM_UTILISATEUR.github.io/credits-azertix/`.

### Déployer sur Netlify

1.  Créez un compte sur [Netlify](https://www.netlify.com/).
2.  Cliquez sur "Add new site > Import an existing project".
3.  Connectez votre compte GitHub et sélectionnez votre dépôt.
4.  Les réglages par défaut pour un site statique sont généralement corrects. Laissez les champs "Build command" et "Publish directory" vides.
5.  Cliquez sur "Deploy site". Netlify vous donnera une URL aléatoire que vous pourrez personnaliser.

### Déployer sur Vercel

Le processus est très similaire à celui de Netlify.
1.  Créez un compte sur [Vercel](https://vercel.com/).
2.  Importez votre projet depuis GitHub.
3.  Vercel détectera qu'il s'agit d'un projet statique et le déploiera sans configuration supplémentaire.

---

## 🤝 Guide de Contribution

Les contributions sont les bienvenues ! Que ce soit pour signaler un bug, proposer une fonctionnalité ou améliorer le code.

### Code de Conduite

Veuillez noter que ce projet est régi par un code de conduite. Nous attendons de tous les contributeurs qu'ils fassent preuve de respect et de professionnalisme.

### Comment Contribuer ?

1.  **Forkez** le dépôt.
2.  Créez une nouvelle branche pour votre modification (`git checkout -b feature/nom-de-la-feature` ou `bugfix/description-du-bug`).
3.  Faites vos modifications.
4.  **Commitez** vos changements avec un message clair.
5.  **Pushez** votre branche vers votre fork.
6.  Ouvrez une **Pull Request** vers la branche `main` du dépôt original.

### Signaler un Bug

Utilisez l'onglet "Issues" de GitHub pour signaler un bug. Veuillez inclure :
* Une description claire du bug.
* Les étapes pour le reproduire.
* Le comportement attendu et le comportement réel.
* Des captures d'écran si possible.

### Proposer une Amélioration

Utilisez également les "Issues" pour proposer de nouvelles fonctionnalités. Expliquez clairement ce que vous souhaitez ajouter et pourquoi ce serait utile.

### Processus de Pull Request

1.  Assurez-vous que votre code est propre et commenté si nécessaire.
2.  Mettez à jour le `README.md` si vos changements l'impactent (par exemple, ajout d'une nouvelle fonctionnalité de personnalisation).
3.  Une fois votre PR ouverte, elle sera examinée et des commentaires pourront être faits avant la fusion.

---

## ❓ Foire Aux Questions (FAQ)

**Q : Pourquoi ne pas utiliser un framework comme React ou Vue ?**
**R :** Pour ce projet, un framework serait excessif. Le JavaScript "vanilla" (pur) est plus que suffisant, ce qui rend le site extrêmement léger, rapide et sans dépendances de build.

**Q : Le site est-il sécurisé ?**
**R :** Oui. En tant que site statique, il n'a pas de base de données côté serveur ni de logique complexe qui pourraient être des vecteurs d'attaque courants. Le seul service externe est Formspree, qui est une plateforme sécurisée et reconnue.

**Q : Comment puis-je optimiser les images pour un chargement plus rapide ?**
**R :** Utilisez des outils en ligne comme [TinyPNG](https://tinypng.com/) ou des logiciels comme [ImageOptim](https://imageoptim.com/mac) pour compresser vos miniatures et votre image de profil avant de les mettre en ligne.

**Q : Le site est-il compatible avec tous les navigateurs ?**
**R :** Il est conçu pour fonctionner sur les versions modernes de tous les principaux navigateurs (Chrome, Firefox, Safari, Edge). La compatibilité avec des navigateurs très anciens comme Internet Explorer n'est pas garantie.

---

## ⚖️ Licence

Ce projet est distribué sous la **Licence MIT**. Consultez le fichier `LICENSE` pour plus de détails. En bref, vous êtes libre de l'utiliser, de le modifier et de le distribuer, même à des fins commerciales, à condition d'inclure la notice de copyright originale.

---

## 🙏 Remerciements

* À tous les créateurs de contenu, artistes, développeurs et musiciens dont le travail est mis en avant sur ce site.
* Aux créateurs de Tailwind CSS, Remix Icon et Google Fonts pour leurs outils fantastiques.
* À la communauté open-source pour son inspiration constante.

---

## 📞 Contact

Pour toute question professionnelle ou demande spécifique, veuillez contacter Azertix via les canaux officiels de sa chaîne YouTube.

Pour les questions techniques liées à ce code, vous pouvez ouvrir une "Issue" sur le dépôt GitHub.

---
*Dernière mise à jour du document : 21 juillet 2025*
