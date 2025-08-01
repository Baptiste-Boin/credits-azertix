// Attend que le contenu de la page soit entièrement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Base de données des vidéos (simulée)
const videoDatabase = [
    {
        id: 'Cities Skylines 2 #2',
        title: 'Cities Skylines 2 - Première zone industrielle a Lake Arbor #2',
        // Updated thumbnail path from .png to .jpg
        thumbnail: 'citiesskylines2#2.png',  
        duration: '18:28',
        date: '01 Aout 2025',
        views: '0 vues',
        description: `🎮 Bienvenue à Lake Arbor sur Cities Skylines 2 !

Pour ce deuxième épisode, nous allons installer la première zone industrielle et installer de nouveaux commerces et maisons.`,
        youtubeLink: 'https://youtu.be/SL9HpAP-iAg',
        credits: {
            Musique: [
                { name: 'I Only Know Never (Instrumental Version)', by: 'Zorro' },
                { name: 'Timelapse', by: 'Phello' },
                { name: 'Pomme', by: 'Ch@ntarelle' }
            ],
            Contributeurs: [
                { name: 'AzerTix', by: 'Gameplay' },
                { name: 'AzerTix', by: 'Montage' }
            ]
        }
    },
    {
        id: 'Cities Skylines 2 #1',
        title: 'Cities Skylines 2 - Bienvenue à Lake Arbor #1',
        // Updated thumbnail path from .png to .jpg
        thumbnail: 'citiesskylines2miniature#1.png', 
        duration: '20:52',
        date: '28 Juillet 2025',
        views: '41 vues',
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
        // Updated thumbnail path from .png to .jpg
        thumbnail: 'blackops6bestofkill1.png',
        duration: '2:27',
        date: '25 Juillet 2025',
        views: '28 vues',
        description: '🎮 Aujourd’hui, petit Best Of Kills sur Black Ops 6 💣',
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
