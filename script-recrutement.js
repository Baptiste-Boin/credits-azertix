document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Gestion du thème (Mode Clair/Sombre) ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Cible l'élément <html> pour Tailwind CSS

    // Vérifie la préférence de thème enregistrée ou utilise le mode clair par défaut
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
        themeToggle.querySelector('i').classList.replace('ri-moon-line', 'ri-sun-line');
    } else {
        htmlElement.classList.remove('dark'); // S'assure que 'dark' est retiré si le thème enregistré n'est pas 'dark'
        themeToggle.querySelector('i').classList.replace('ri-sun-line', 'ri-moon-line');
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.querySelector('i').classList.replace('ri-moon-line', 'ri-sun-line');
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.querySelector('i').classList.replace('ri-sun-line', 'ri-moon-line');
        }
    });

    // --- 2. Logique du formulaire multi-étapes ---
    let currentStep = 1; // Commence à l'étape 1
    const totalSteps = 3;

    // Références aux éléments du DOM du formulaire
    const form = document.getElementById('recruitment-form');
    const stepContents = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
    ];
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const currentStepSpan = document.getElementById('current-step');
    const progressBar = document.querySelector('.progress-bar');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const skillCards = document.querySelectorAll('.skill-card');
    const selectedSkillsInput = document.getElementById('selectedSkills');
    const otherSkillsInput = document.getElementById('otherSkills'); // Ajouté pour le champ "Autres compétences"


    // Fonction pour mettre à jour les compétences sélectionnées dans l'input caché
    function updateSelectedSkills() {
        const selected = Array.from(skillCards)
            .filter(card => card.classList.contains('selected'))
            .map(card => card.dataset.skill); // Assurez-vous que vos cartes ont un data-skill="NomCompétence"
        selectedSkillsInput.value = selected.join(',');
    }

    // Ajoute les écouteurs d'événements aux cartes de compétences
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('selected');
            updateSelectedSkills();
        });
    });

    // Fonction de validation des étapes
    function validateStep(step) {
        let isValid = true;
        // Supprime les bordures d'erreur précédentes pour les champs de l'étape en cours de validation
        const currentStepElement = stepContents[step - 1];
        const inputsInCurrentStep = currentStepElement.querySelectorAll('input, textarea');
        inputsInCurrentStep.forEach(input => input.classList.remove('border-red-500'));

        if (step === 1) {
            const fullName = document.getElementById('fullName');
            const email = document.getElementById('email');
            const age = document.getElementById('age');

            if (!fullName || !fullName.value.trim()) {
                fullName.classList.add('border-red-500');
                isValid = false;
            }

            if (!email || !email.value.trim() || !email.value.includes('@')) {
                email.classList.add('border-red-500');
                isValid = false;
            }

            if (!age || !age.value || parseInt(age.value) < 13 || parseInt(age.value) > 100) {
                age.classList.add('border-red-500');
                isValid = false;
            }
        } else if (step === 2) {
            const selectedSkills = Array.from(skillCards).filter(card => card.classList.contains('selected'));
            // Vérifie si aucune compétence n'est sélectionnée ET que le champ "Autres compétences" est vide
            if (selectedSkills.length === 0 && (!otherSkillsInput || !otherSkillsInput.value.trim())) {
                alert('Veuillez sélectionner au moins une compétence ou décrire d\'autres compétences.');
                isValid = false;
            }
        } else if (step === 3) {
            const motivation = document.getElementById('motivation');
            const gdpr = document.getElementById('gdpr');

            if (!motivation || !motivation.value.trim()) {
                motivation.classList.add('border-red-500');
                isValid = false;
            }

            if (!gdpr || !gdpr.checked) {
                // Pas de classe de bordure pour les checkbox, mais une alerte peut être utile
                // gdpr.classList.add('border-red-500'); // Si vous voulez une bordure visuelle pour la checkbox
                alert('Vous devez accepter la politique de confidentialité pour soumettre votre candidature.');
                isValid = false;
            }
        }
        return isValid;
    }

    // Fonction pour afficher une étape spécifique
    function showStep(stepNum) {
        // Cache tous les contenus d'étape
        stepContents.forEach((stepContent) => {
            stepContent.classList.add('hidden');
        });

        // Affiche le contenu de l'étape actuelle
        if (stepContents[stepNum - 1]) { // S'assure que l'étape existe
            stepContents[stepNum - 1].classList.remove('hidden');
        }

        // Met à jour les indicateurs d'étape
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed', 'bg-gradient-to-br', 'from-primary', 'to-secondary', 'text-white', 'shadow-md', 'border-transparent', 'from-green-500', 'to-green-700');
            indicator.classList.add('border-gray-300', 'dark:border-gray-600', 'text-gray-400'); // Réinitialiser

            if (index + 1 < stepNum) {
                indicator.classList.add('completed', 'bg-gradient-to-br', 'from-green-500', 'to-green-700', 'text-white', 'shadow-md', 'border-transparent');
                indicator.classList.remove('border-gray-300', 'dark:border-gray-600', 'text-gray-400');
            } else if (index + 1 === stepNum) {
                indicator.classList.add('active', 'bg-gradient-to-br', 'from-primary', 'to-secondary', 'text-white', 'shadow-md', 'border-transparent');
                indicator.classList.remove('border-gray-300', 'dark:border-gray-600', 'text-gray-400');
            }
        });

        // Met à jour la barre de progression
        const progress = (totalSteps > 1) ? ((stepNum - 1) / (totalSteps - 1)) * 100 : 100;
        progressBar.style.width = `${progress}%`;

        // Met à jour le texte du numéro d'étape
        currentStepSpan.textContent = stepNum;

        // Gère la visibilité des boutons
        if (stepNum === 1) {
            prevBtn.classList.add('hidden');
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        } else if (stepNum === totalSteps) {
            prevBtn.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            prevBtn.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    // Écouteur pour le bouton "Suivant"
    nextBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            }
        }
    });

    // Écouteur pour le bouton "Précédent"
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Affichage initial de la première étape au chargement de la page
    showStep(currentStep);

    // --- 3. Fonctions des modales (Politique de confidentialité, Conditions d'utilisation) ---
    function showPrivacyModal() {
        const privacyModal = document.getElementById('privacy-modal');
        if (privacyModal) privacyModal.classList.remove('hidden');
    }

    function hidePrivacyModal() {
        const privacyModal = document.getElementById('privacy-modal');
        if (privacyModal) privacyModal.classList.add('hidden');
    }

    function showTermsModal() {
        const termsModal = document.getElementById('terms-modal');
        if (termsModal) termsModal.classList.remove('hidden');
    }

    function hideTermsModal() {
        const termsModal = document.getElementById('terms-modal');
        if (termsModal) termsModal.classList.add('hidden');
    }

    // Assurez-vous d'attacher ces fonctions aux événements 'click' de vos liens/boutons dans le HTML
    // Exemple : <a href="#" onclick="showPrivacyModal()">Politique de confidentialité</a>

    // --- 4. Soumission du formulaire ---
    form.addEventListener('submit', (event) => {
        // Validation finale avant la soumission
        if (!validateStep(currentStep)) {
            event.preventDefault(); // Empêche la soumission du formulaire si la validation échoue
            // Optionnel : Vous pouvez ajouter ici un message d'erreur général ou faire défiler vers le premier champ invalide
        } else {
            // Afficher un indicateur de chargement et désactiver le bouton pour éviter les soumissions multiples
            submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i>Envoi en cours...';
            submitBtn.disabled = true;
            prevBtn.disabled = true; // Désactiver la navigation pendant la soumission
            nextBtn.disabled = true;

            // Le formulaire sera soumis normalement (vers Formspree ou autre) via son attribut 'action'
            // Vous pouvez ajouter ici une logique AJAX si vous préférez une soumission sans rechargement de page.
        }
    });
});
