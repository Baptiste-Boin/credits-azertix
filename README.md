# Système de Crédits pour Vidéos YouTube - Azertix

Ce projet est une plateforme web front-end conçue pour afficher de manière claire et élégante les crédits des personnes et des ressources utilisées dans les vidéos de la chaîne YouTube "Azertix". Le site est entièrement statique, ce qui le rend rapide, sécurisé et facile à héberger.

## ✨ Fonctionnalités

-   **Design Moderne et Responsive** : Interface utilisateur soignée qui s'adapte à toutes les tailles d'écran (mobile, tablette, ordinateur).
-   **Thème Sombre/Clair** : Un sélecteur de thème permet aux utilisateurs de choisir entre un mode clair et un mode sombre, avec sauvegarde de la préférence dans le navigateur.
-   **Navigation Dynamique** : Le site est une Single Page Application (SPA) simulée : les pages sont chargées sans rechargement pour une expérience utilisateur fluide.
-   **Contenu Géré en JavaScript** : Toutes les données des vidéos (titre, miniature, crédits, etc.) sont gérées depuis un simple objet JavaScript (`videoDatabase`), facilitant les mises à jour.
-   **Pages Multiples** :
    -   **Accueil** : Présente la vidéo en vedette, les derniers crédits et une navigation par catégories.
    -   **Tous les Crédits** : Une galerie complète de toutes les vidéos listées.
    -   **Détails de la Vidéo** : Une vue détaillée pour chaque vidéo, listant tous les crédits par catégorie (Musique, Contributeurs, Shaders, etc.).
    -   **Signaler un Crédit Manquant** : Un formulaire fonctionnel pour que la communauté puisse signaler des oublis.
-   **Formulaire de Contact Intégré** : Le formulaire de signalement utilise le service [Formspree](https://formspree.io/) pour envoyer les soumissions directement à votre adresse e-mail sans nécessiter de back-end.

## 🛠️ Technologies Utilisées

-   **HTML5** : Pour la structure sémantique du contenu.
-   **CSS3** : Pour les styles personnalisés et les animations.
-   **Tailwind CSS** : Un framework CSS "utility-first" pour construire rapidement des interfaces modernes.
-   **JavaScript (ES6+)** : Pour la logique du site, la manipulation du DOM, la gestion des pages et des événements.
-   **Google Fonts** : Pour les polices personnalisées (`Pacifico`, `Montserrat`, `Orbitron`).
-   **Remix Icon** : Pour une bibliothèque d'icônes open-source de haute qualité.
-   **Formspree** : Pour la gestion du formulaire de contact.

## 🚀 Installation et Lancement

Ce projet est un site web statique. Aucune compilation ou installation complexe n'est nécessaire.

1.  **Clonez le dépôt (ou téléchargez les fichiers) :**
    ```bash
    git clone [https://github.com/VOTRE_NOM_UTILISATEUR/credits-azertix.git](https://github.com/VOTRE_NOM_UTILISATEUR/credits-azertix.git)
    ```

2.  **Assurez-vous d'avoir votre image de profil :**
    Placez votre image de profil nommée `profil.png` à la racine du projet.

3.  **Ouvrez le site :**
    Ouvrez simplement le fichier `index.html` dans votre navigateur web préféré (Chrome, Firefox, Safari, etc.).

## 🔧 Personnalisation

### Ajouter ou Modifier des Vidéos

Toutes les informations sur les vidéos se trouvent dans le fichier `script.js`, à l'intérieur de la constante `videoDatabase`.

Pour ajouter une nouvelle vidéo, ajoutez un nouvel objet au tableau `videoDatabase` en suivant ce format :

```javascript
{
    id: 'identifiant-unique-de-la-video',
    title: 'Titre de la vidéo',
    thumbnail: 'URL_de_la_miniature.jpg',
    duration: '12:34',
    date: '30 juillet 2025',
    views: '123K vues',
    description: 'Une brève description de la vidéo.',
    youtubeLink: '#', // Lien vers la vidéo sur YouTube
    credits: {
        'Nom de la Catégorie 1': [
            { name: 'Nom du créateur/ressource', by: 'Rôle ou description' },
            { name: 'Autre ressource', by: 'Un autre rôle' }
        ],
        'Nom de la Catégorie 2': [
            { name: 'Exemple', by: 'Compositeur' }
        ]
    }
}
