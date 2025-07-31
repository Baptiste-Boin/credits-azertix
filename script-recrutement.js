
      // Theme Toggle
      const themeToggle = document.getElementById('theme-toggle');
      const body = document.body;

      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.querySelector('i').classList.replace('ri-moon-line', 'ri-sun-line');
      } else {
        themeToggle.querySelector('i').classList.replace('ri-sun-line', 'ri-moon-line');
      }

      themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
          localStorage.setItem('theme', 'dark');
          themeToggle.querySelector('i').classList.replace('ri-moon-line', 'ri-sun-line');
        } else {
          localStorage.setItem('theme', 'light');
          themeToggle.querySelector('i').classList.replace('ri-sun-line', 'ri-moon-line');
        }
      });

      // Multi-Step Form Logic
      let currentStep = 1;
      const totalSteps = 3;
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

      // Function to update selected skills in hidden input
      function updateSelectedSkills() {
        const selected = Array.from(skillCards)
          .filter(card => card.classList.contains('selected'))
          .map(card => card.dataset.skill);
        selectedSkillsInput.value = selected.join(',');
      }

      // Add event listeners to skill cards
      skillCards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('selected');
          updateSelectedSkills();
        });
      });

      function validateStep(step) {
        let isValid = true;
        if (step === 1) {
          const fullName = document.getElementById('fullName');
          const email = document.getElementById('email');
          const age = document.getElementById('age');

          if (!fullName.value.trim()) {
            fullName.classList.add('border-red-500');
            isValid = false;
          } else {
            fullName.classList.remove('border-red-500');
          }

          if (!email.value.trim() || !email.value.includes('@')) {
            email.classList.add('border-red-500');
            isValid = false;
          } else {
            email.classList.remove('border-red-500');
          }

          if (!age.value || parseInt(age.value) < 13 || parseInt(age.value) > 100) {
            age.classList.add('border-red-500');
            isValid = false;
          } else {
            age.classList.remove('border-red-500');
          }
        } else if (step === 3) {
          const motivation = document.getElementById('motivation');
          const gdpr = document.getElementById('gdpr');

          if (!motivation.value.trim()) {
            motivation.classList.add('border-red-500');
            isValid = false;
          } else {
            motivation.classList.remove('border-red-500');
          }

          if (!gdpr.checked) {
            gdpr.classList.add('border-red-500'); // Add visual cue for unchecked checkbox
            isValid = false;
          } else {
            gdpr.classList.remove('border-red-500');
          }
        }
        return isValid;
      }

      function showStep(stepNum) {
        // Hide all step contents
        stepContents.forEach((stepContent) => {
          stepContent.classList.add('hidden');
        });

        // Show the current step content
        stepContents[stepNum - 1].classList.remove('hidden');

        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
          indicator.classList.remove('active', 'completed');
          indicator.classList.remove('border-primary', 'text-primary');
          indicator.classList.add('border-gray-300', 'dark:border-gray-600', 'text-gray-400');

          if (index + 1 < stepNum) {
            indicator.classList.add('completed');
            indicator.classList.remove('border-gray-300', 'dark:border-gray-600', 'text-gray-400');
          } else if (index + 1 === stepNum) {
            indicator.classList.add('active');
            indicator.classList.remove('border-gray-300', 'dark:border-gray-600', 'text-gray-400');
            indicator.classList.add('border-primary', 'text-primary');
          }
        });

        // Update progress bar
        const progress = ((stepNum - 1) / (totalSteps -1)) * 100;
        progressBar.style.width = `${progress}%`;

        // Update step number text
        currentStepSpan.textContent = stepNum;

        // Manage button visibility
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

      nextBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
          if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
          }
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
        }
      });

      // Initial display
      showStep(currentStep);

      // Modal Functions
      function showPrivacyModal() {
        document.getElementById('privacy-modal').classList.remove('hidden');
      }

      function hidePrivacyModal() {
        document.getElementById('privacy-modal').classList.add('hidden');
      }

      function showTermsModal() {
        document.getElementById('terms-modal').classList.remove('hidden');
      }

      function hideTermsModal() {
        document.getElementById('terms-modal').classList.add('hidden');
      }

      // Add event listener to the form for submission
      const recruitmentForm = document.getElementById('recruitment-form');
      recruitmentForm.addEventListener('submit', (event) => {
        // Final validation before submission
        if (!validateStep(currentStep)) {
          event.preventDefault(); // Prevent form submission if validation fails
          // Optionally, scroll to the first invalid field or show a general error message
        } else {
          // You can add a loading indicator here if needed
          submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin mr-2"></i>Envoi...';
          submitBtn.disabled = true;
        }
      });

   
