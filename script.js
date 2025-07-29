// Attend que le contenu de la page soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Base de données des vidéos (simulée)
const videoDatabase = [
    {
        id: 'Cities Skylines 2 #1',
        title: 'Cities Skylines 2 - Bienvenue à Lake Arbor #1',
        thumbnail: 'https://raw.githubusercontent.com/Baptiste-Boin/credits-azertix/main/cities%20skylines%202%20miniature%20%231.png',  //'https://i.imgur.com/kQJvZKH.png', // Remplace avec un lien direct vers l’image
        duration: '20:52',
        date: '28 juillet 2025',
        views: '2 vues',
        description: `🎮 Bienvenue à Lake Arbor sur Cities Skylines 2 !

Aujourd’hui on démarre une toute nouvelle aventure urbaine avec Lake Arbor. Une ville que nous allons construire de A à Z dans Cities Skylines 2 🌆

Pour ce premier épisode, nous allons mettre en place le train et la première zone résidentielle.`,
        youtubeLink: 'https://youtu.be/UcoLkhG2AVs',
        credits: {
            Musique: [
                { name: 'Lost in Dreams', by: 'dvine' },
                { name: 'Pomme', by: 'Ch@ntarelle' }
            ],
            Contributeurs: [
                { name: 'AzerTix', by: 'Gameplay' },
                { name: 'AzerTix', by: 'Montage' }
            ]
        }
    },
    {
        id: 'best-of-kill',
        title: 'BLACK OPS 6 - Best Of Kills 💣',
        thumbnail: 'https://i9.ytimg.com/vi_webp/9Q5nOQizCbk/mqdefault.webp?v=68558af1&sqp=CPzLn8QG&rs=AOn4CLCUUDtIwWkb1ThYoBDSIN9AaA9Qkw',
        duration: '2:27',
        date: '25 juillet 2025',
        views: '26 vues',
        description: '🎮 Aujourd’hui, place à un Best Of Kills sur Black Ops 6 💣
💬 Dis-moi en commentaire si toi aussi tu joues a Black Ops 6 

👍 N’oublie pas de t’abonner, de liker et de commenter 💬
🔔 Active la cloche pour ne rien rater des prochaines vidéos et lives !

📸 Suis-moi ici :
👉 Twitter : @YTAzerTix
👉 Instagram : @YTAzerTix',
        youtubeLink: 'https://youtu.be/VomI7-rLtPE',
        credits: {
            Musique: [
                { name: 'SHOWTIME', by: 'Cushy' },
                { name: 'Pomme', by: 'Ch@ntarelle' }
            ],
            
            Contributeurs: [
                { name: 'AzerTix', by: 'Gameplay' },
                { name: 'AzerTix', by: 'Montage' }
            ]
        }
    },
    {
        id: 'fortnite-skins',
        title: 'Top 10 Skins Fortnite que Vous Devez Absolument Avoir',
        thumbnail: 'https://readdy.ai/api/search-image?query=gaming%2520thumbnail%2520showing%2520Fortnite%2520battle%2520royale%2520action%2C%2520character%2520with%2520cool%2520skin%2520in%2520dynamic%2520pose%2C%2520vibrant%2520colors%2C%2520high%2520quality%2520digital%2520art%2520with%2520action%2520composition%2C%2520perfect%2520for%2520a%2520YouTube%2520gaming%2520video%2C%2520professional%2520look&width=640&height=360&seq=vid3&orientation=landscape',
        duration: '15:42',
        date: '18 juin 2025',
        views: '312K vues',
        description: 'Découvrez les skins les plus rares et les plus stylés disponibles actuellement sur Fortnite.',
        youtubeLink: '#',
        credits: {
            Recherche: [{ name: 'SkinBase', by: 'Données sur la rareté' }]
        }
    },
    {
        id: 'rematch-decouverte',
        title: 'Rematch - Découverte du jeux (il est trop bien)',
        thumbnail: 'https://i9.ytimg.com/vi_webp/9Q5nOQizCbk/mqdefault.webp?v=68558af1&sqp=CPzLn8QG&rs=AOn4CLCUUDtIwWkb1ThYoBDSIN9AaA9Qkw',
        duration: '22:37',
        date: '21 juin 2025',
        views: '356 vues',
        description: '',
        youtubeLink: '#',
        credits: {
            Shaders: [{ name: 'BSL Shaders', by: 'capttatsu' }],
            'Packs de Textures': [{ name: 'Faithful 32x', by: 'Faithful Team' }],
            Constructeurs: [
                { name: 'BuilderPro', by: 'Design' },
                { name: 'RedstoneMaster', by: 'Systèmes' }
            ]
        }
    },
    {
        id: 'lol-guide',
        title: 'Guide Complet du Nouveau Champion League of Legends',
        thumbnail: 'https://readdy.ai/api/search-image?query=gaming%2520thumbnail%2520showing%2520League%2520of%2520Legends%2520champion%2520in%2520battle%2C%2520epic%2520ability%2520effects%2C%2520dramatic%2520lighting%2C%2520high%2520quality%2520digital%2520art%2520with%2520vibrant%2520colors%2C%2520perfect%2520for%2520a%2520YouTube%2520gaming%2520video%2C%2520professional%2520composition&width=640&height=360&seq=vid4&orientation=landscape',
        duration: '20:15',
        date: '15 juin 2025',
        views: '178K vues',
        description: 'Maîtrisez toutes les compétences et combos du dernier champion ajouté au jeu.',
        youtubeLink: '#',
        credits: {}
    },
    {
        id: 'cod-meta',
        title: 'Les Meilleures Armes de Call of Duty: Warzone 2025',
        thumbnail: 'https://readdy.ai/api/search-image?query=gaming%2520thumbnail%2520showing%2520Call%2520of%2520Duty%2520action%2520scene%2C%2520soldier%2520with%2520weapon%2C%2520explosion%2520effects%2C%2520dramatic%2520lighting%2C%2520high%2520quality%2520digital%2520art%2520with%2520intense%2520composition%2C%2520perfect%2520for%2520a%2520YouTube%2520gaming%2520video%2C%2520professional%2520look&width=640&height=360&seq=vid5&orientation=landscape',
        duration: '25:08',
        date: '10 juin 2025',
        views: '295K vues',
        description: 'Analyse complète du meta actuel et des meilleures configurations d\'armes pour dominer.',
        youtubeLink: '#',
        credits: {}
    },
    {
        id: 'among-us-strats',
        title: 'Among Us: Les Stratégies Secrètes d\'Imposteur',
        thumbnail: 'https://readdy.ai/api/search-image?query=gaming%2520thumbnail%2520showing%2520Among%2520Us%2520characters%2520in%2520funny%2520situation%2C%2520colorful%2520style%2C%2520impostor%2520reveal%2C%2520high%2520quality%2520digital%2520art%2520with%2520humorous%2520composition%2C%2520perfect%2520for%2520a%2520YouTube%2520gaming%2520video%2C%2520professional%2520look&width=640&height=360&seq=vid6&orientation=landscape',
        duration: '17:33',
        date: '05 juin 2025',
        views: '221K vues',
        description: 'Apprenez à tromper vos amis comme un pro avec ces techniques d\'impostor avancées.',
        youtubeLink: '#',
        credits: {}
    }
];


    // Sélection des éléments du DOM
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const allPageLinks = document.querySelectorAll('.page-link');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const missingCreditForm = document.getElementById('missing-credit-form');

    // --- GESTION DES PAGES ---
    // Fonction pour afficher une page spécifique et masquer les autres
    const showPage = (pageId) => {
        pages.forEach(page => page.classList.toggle('active', page.id === `page-${pageId}`));
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageId));
        mobileMenu.classList.add('hidden'); // Ferme le menu mobile lors d'un changement de page
        mobileMenuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        window.scrollTo(0, 0); // Remonte en haut de la page
    };

    // --- CRÉATION DES ÉLÉMENTS DYNAMIQUES ---
    // Fonction pour créer une carte vidéo HTML à partir d'un objet vidéo
    const createVideoCard = (video) => `
        <div class="video-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
            <div class="relative overflow-hidden h-48">
                <img src="${video.thumbnail}" alt="Miniature de ${video.title}" class="video-thumbnail w-full h-full object-cover">
                <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">${video.duration}</div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="title-font font-bold text-lg mb-2 line-clamp-2 h-14 text-gray-900 dark:text-white">${video.title}</h3>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>${video.date}</span><span class="mx-2">•</span><span>${video.views}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 h-10">${video.description}</p>
                <button data-video-id="${video.id}" class="view-credits-btn mt-auto neon-button w-full bg-primary text-white px-4 py-2 rounded-button text-sm font-medium hover:bg-primary/90 transition-colors !rounded-button whitespace-nowrap">
                    Voir les crédits
                </button>
            </div>
        </div>
    `;

    // --- INITIALISATION ---
    // Peuple les conteneurs de vidéos sur les pages d'accueil et "Tous les crédits"
    const homeVideosContainer = document.getElementById('home-videos-container');
    if (homeVideosContainer) {
        homeVideosContainer.innerHTML = videoDatabase.slice(0, 3).map(createVideoCard).join(''); // Affiche seulement 3 vidéos sur l'accueil
    }

    const allVideosContainer = document.getElementById('all-videos-container');
    if (allVideosContainer) {
        allVideosContainer.innerHTML = videoDatabase.map(createVideoCard).join('');
    }
    
    // --- GESTIONNAIRES D'ÉVÉNEMENTS ---
    // Gère le clic sur le bouton du menu mobile
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuIcon.classList.toggle('ri-menu-line', isHidden);
        mobileMenuIcon.classList.toggle('ri-close-line', !isHidden);
    });

    // Gère le clic sur tous les liens de navigation (data-page)
    allPageLinks.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
    }));

    // Gère les clics sur les boutons "Voir les crédits" (utilise la délégation d'événements)
    document.body.addEventListener('click', (e) => {
        const button = e.target.closest('.view-credits-btn');
        if (button) {
            const videoId = button.dataset.videoId;
            const video = videoDatabase.find(v => v.id === videoId);
            if (video) {
                // Met à jour la page de détails avec les informations de la vidéo
                document.getElementById('detail-thumbnail').src = video.thumbnail;
                document.getElementById('detail-thumbnail').alt = `Miniature de ${video.title}`;
                document.getElementById('detail-title').textContent = video.title;
                document.getElementById('detail-date').textContent = video.date;
                document.getElementById('detail-views').textContent = video.views;
                document.getElementById('detail-description').textContent = video.description;
                document.getElementById('detail-youtube-link').href = video.youtubeLink;

                const creditsContainer = document.getElementById('detail-credits-container');
                creditsContainer.innerHTML = '';
                
                const creditCategories = Object.keys(video.credits);

                if (creditCategories.length === 0) {
                    creditsContainer.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 py-8">Aucun crédit n'a été ajouté pour cette vidéo.</p>`;
                } else {
                    creditCategories.forEach(category => {
                        const itemsHtml = video.credits[category].map(item => `
                            <div class="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:border-primary dark:hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                                <div class="mb-2 text-3xl text-primary">
                                    <i class="ri-award-line"></i>
                                </div>
                                <h4 class="font-bold text-lg text-gray-800 dark:text-gray-100 truncate" title="${item.name}">${item.name}</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400 truncate" title="${item.by}">${item.by}</p>
                            </div>`).join('');
                        
                        creditsContainer.innerHTML += `
                            <div class="mb-10">
                                <div class="mb-6 pb-3 border-b-2 border-primary/20">
                                    <h2 class="text-3xl font-bold title-font text-gray-900 dark:text-white">${category}</h2>
                                </div>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    ${itemsHtml}
                                </div>
                            </div>`;
                    });
                }
                showPage('details');
            }
        }
    });

    // Gère la soumission du formulaire de crédit manquant
    if (missingCreditForm) {
        missingCreditForm.addEventListener('submit', (e) => {
            // Le formulaire est géré par Formspree, le JS est un fallback ou pour des actions supplémentaires.
            // On peut ajouter une logique de validation ou de feedback ici si besoin.
        });
    }

    // --- GESTION DU THÈME (SOMBE/CLAIR) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Applique le thème (dark/light) au body et à l'icône
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
        }
    };
    
    // Gère le clic sur le bouton de changement de thème
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
    
    // Applique le thème sauvegardé au chargement de la page
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    
    // Affiche la page d'accueil par défaut
    showPage('home');
});
