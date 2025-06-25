document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DONNÉES & ÉLÉMENTS DU DOM ---
    const videoDatabase = [
        { id: 'valorant-pro', title: 'Comment Devenir Pro sur Valorant en 1 Semaine', thumbnail: 'https://placehold.co/640x360/1a202c/ffffff?text=Valorant+Pro', duration: '18:24', date: '24 juin 2025', views: '245K vues', description: 'Tous les secrets pour améliorer votre gameplay et atteindre le niveau professionnel rapidement.', youtubeLink: '#', credits: { Musique: [ { name: 'Future Drive', by: 'NCS' }, { name: 'Cyberpunk', by: 'Infraction' } ], Contributeurs: [ { name: 'ShadowGamer', by: 'Gameplay' }, { name: 'PixelArtz', by: 'Montage' } ], } },
        { id: 'minecraft-castle', title: 'Minecraft: Construction du Château Ultime (Partie 3)', thumbnail: 'https://placehold.co/640x360/4a5568/ffffff?text=Minecraft+Castle', duration: '22:37', date: '20 juin 2025', views: '189K vues', description: 'Finalisation de notre méga-construction avec des techniques avancées et des mods exclusifs.', youtubeLink: '#', credits: { Shaders: [ { name: 'BSL Shaders', by: 'capttatsu' } ], 'Packs de Textures': [ { name: 'Faithful 32x', by: 'Faithful Team' } ], Constructeurs: [ { name: 'BuilderPro', by: 'Design' }, { name: 'RedstoneMaster', by: 'Systèmes' } ] } },
        { id: 'fortnite-skins', title: 'Top 10 Skins Fortnite que Vous Devez Absolument Avoir', thumbnail: 'https://placehold.co/640x360/2c5282/ffffff?text=Fortnite+Skins', duration: '15:42', date: '18 juin 2025', views: '312K vues', description: 'Découvrez les skins les plus rares et les plus stylés disponibles actuellement sur Fortnite.', youtubeLink: '#', credits: { Recherche: [ { name: 'SkinBase', by: 'Données sur la rareté' } ] } },
        { id: 'lol-guide', title: 'Guide Complet du Nouveau Champion League of Legends', thumbnail: 'https://placehold.co/640x360/2d3748/ffffff?text=LoL+Guide', duration: '20:15', date: '15 juin 2025', views: '178K vues', description: 'Maîtrisez toutes les compétences et combos du dernier champion ajouté au jeu.', youtubeLink: '#', credits: {} },
        { id: 'cod-meta', title: 'Les Meilleures Armes de Call of Duty: Warzone 2025', thumbnail: 'https://placehold.co/640x360/2d3748/ffffff?text=CoD+Meta', duration: '25:08', date: '10 juin 2025', views: '295K vues', description: 'Analyse complète du meta actuel et des meilleures configurations d\'armes pour dominer.', youtubeLink: '#', credits: {} },
        { id: 'among-us-strats', title: 'Among Us: Les Stratégies Secrètes d\'Imposteur', thumbnail: 'https://placehold.co/640x360/b7791f/ffffff?text=Among+Us', duration: '17:33', date: '05 juin 2025', views: '221K vues', description: 'Apprenez à tromper vos amis comme un pro avec ces techniques d\'impostor avancées.', youtubeLink: '#', credits: {} }
    ];

    const pages = document.querySelectorAll('.page');
    const allPageLinks = document.querySelectorAll('.page-link');
    const navLinks = document.querySelectorAll('header .nav-link');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const missingCreditForm = document.getElementById('missing-credit-form');

    // --- GESTION DE LA NAVIGATION ---
    const showPage = (pageId) => {
        pages.forEach(page => page.classList.toggle('active', page.id === `page-${pageId}`));
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageId));
        mobileMenu.classList.add('hidden');
        mobileMenuIcon.classList.replace('ri-close-line', 'ri-menu-line');
        window.scrollTo(0, 0);
    };

    // --- CRÉATION DYNAMIQUE ---
    const createVideoCard = (video) => `
        <div class="video-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 flex flex-col">
            <div class="relative overflow-hidden h-48">
                <img src="${video.thumbnail}" alt="Miniature de ${video.title}" class="video-thumbnail w-full h-full object-cover">
                <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">${video.duration}</div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <h3 class="title-font font-bold text-lg mb-2 line-clamp-2 h-14 text-gray-900 dark:text-white">${video.title}</h3>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span>${video.date}</span><span class="mx-2">•</span><span>${video.views}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 h-10 flex-grow">${video.description}</p>
                <button data-video-id="${video.id}" class="view-credits-btn mt-auto w-full bg-primary text-white px-4 py-2 rounded-button text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                    Voir les crédits
                </button>
            </div>
        </div>`;

    // --- INITIALISATION ---
    document.getElementById('home-videos-container').innerHTML = videoDatabase.slice(0, 3).map(createVideoCard).join('');
    document.getElementById('all-videos-container').innerHTML = videoDatabase.map(createVideoCard).join('');

    // --- GESTIONNAIRES D'ÉVÉNEMENTS ---
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        mobileMenuIcon.classList.toggle('ri-menu-line', isHidden);
        mobileMenuIcon.classList.toggle('ri-close-line', !isHidden);
    });

    allPageLinks.forEach(link => link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(link.dataset.page);
    }));

    document.body.addEventListener('click', (e) => {
        const button = e.target.closest('.view-credits-btn');
        if (button) {
            const videoId = button.dataset.videoId;
            const video = videoDatabase.find(v => v.id === videoId);
            if (video) {
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
                            <div class="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                                <h4 class="font-bold text-gray-800 dark:text-gray-100">${item.name}</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">${item.by}</p>
                            </div>`).join('');
                        
                        creditsContainer.innerHTML += `
                            <div class="mb-8">
                                <h2 class="text-2xl font-bold mb-4 title-font text-gray-900 dark:text-white">${category}</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">${itemsHtml}</div>
                            </div>`;
                    });
                }
                showPage('details');
            }
        }
    });

    // --- GESTION DU FORMULAIRE (AVEC FORMSPREE) ---
    const submitButton = document.getElementById('submit-missing-credit-btn');
    const successMessage = document.getElementById('success-message');
    const statusMessage = document.getElementById('status-message');
    const formspreeEndpoint = "https://formspree.io/f/xnnvobnd";

    missingCreditForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        submitButton.disabled = true;
        submitButton.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Envoi...`;
        statusMessage.classList.add('hidden');

        const formData = new FormData(missingCreditForm);

        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                missingCreditForm.classList.add('hidden');
                successMessage.classList.remove('hidden');
            } else {
                const data = await response.json();
                statusMessage.textContent = data.errors?.map(e => e.message).join(", ") || "Une erreur s'est produite.";
                statusMessage.classList.remove('hidden');
                submitButton.disabled = false;
                submitButton.innerHTML = 'Soumettre le rapport';
            }
        } catch (error) {
            statusMessage.textContent = "Erreur de connexion. Veuillez réessayer.";
            statusMessage.classList.remove('hidden');
            submitButton.disabled = false;
            submitButton.innerHTML = 'Soumettre le rapport';
        }
    });

    // --- GESTION DU THÈME (SOMBRE/CLAIR) ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        } else {
            document.documentElement.classList.remove('dark');
            themeIcon.classList.replace('ri-sun-line', 'ri-moon-line');
        }
    };
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
    
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    
    // --- AFFICHAGE INITIAL ---
    showPage('home');
});
