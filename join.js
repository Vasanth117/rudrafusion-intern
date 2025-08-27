<<<<<<< HEAD
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4wP3ccDrLTjYmkFJ1QAuurzb-Xujz_d4",
  authDomain: "collegeclubdb.firebaseapp.com",
  projectId: "collegeclubdb",
  storageBucket: "collegeclubdb.appspot.com",
  messagingSenderId: "549067014784",
  appId: "1:549067014784:web:4f962cd76eda3317845c65",
  measurementId: "G-VD3XN6QCYB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const form = document.getElementById('join-form');
    if (!form) {
        console.error('Form element not found');
        return;
    }

    const steps = Array.from(form.querySelectorAll('.form-step'));
    const stepIndicators = Array.from(form.querySelectorAll('.step-indicator'));
    const progressFill = form.querySelector('.progress-fill');
=======
document.addEventListener('DOMContentLoaded', function() {
    // Form navigation
    const form = document.getElementById('join-form');
    const steps = form.querySelectorAll('.form-step');
    const stepIndicators = form.querySelectorAll('.step-indicator');
    const progressFill = form.querySelector('.progress-fill');
    const nextButtons = form.querySelectorAll('.next-step');
    const prevButtons = form.querySelectorAll('.prev-step');
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
    
    let currentStep = 1;
    const totalSteps = steps.length;
    
    // Initialize form
    showStep(currentStep);
    
<<<<<<< HEAD
    // Navigation handlers
    form.addEventListener('click', function(e) {
        // Next button click
        if (e.target.classList.contains('next-step') || e.target.closest('.next-step')) {
            e.preventDefault();
            const button = e.target.classList.contains('next-step') ? e.target : e.target.closest('.next-step');
            const nextStep = parseInt(button.getAttribute('data-next'));
=======
    // Next button click
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.getAttribute('data-next'));
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
            
            if (validateStep(currentStep)) {
                currentStep = nextStep;
                showStep(currentStep);
                updateProgress();
            }
<<<<<<< HEAD
        }
        
        // Previous button click
        if (e.target.classList.contains('prev-step') || e.target.closest('.prev-step')) {
            e.preventDefault();
            const button = e.target.classList.contains('prev-step') ? e.target : e.target.closest('.prev-step');
            const prevStep = parseInt(button.getAttribute('data-prev'));
=======
        });
    });
    
    // Previous button click
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.getAttribute('data-prev'));
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
            
            currentStep = prevStep;
            showStep(currentStep);
            updateProgress();
<<<<<<< HEAD
        }
        
        // Step indicator click
        if (e.target.classList.contains('step-indicator') || e.target.closest('.step-indicator')) {
            e.preventDefault();
            const indicator = e.target.classList.contains('step-indicator') ? e.target : e.target.closest('.step-indicator');
            const step = parseInt(indicator.getAttribute('data-step'));
=======
        });
    });
    
    // Step indicator click
    stepIndicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const step = parseInt(this.getAttribute('data-step'));
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
            
            if (step < currentStep) {
                currentStep = step;
                showStep(currentStep);
                updateProgress();
            }
<<<<<<< HEAD
        }
    });
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            const submitButton = form.querySelector('.submit-button');
            if (!submitButton) {
                console.error('Submit button not found');
                return;
            }

            const buttonText = submitButton.querySelector('.button-text');
            const spinner = submitButton.querySelector('.spinner');
            
            // Show loading state
            submitButton.disabled = true;
            if (buttonText) buttonText.textContent = 'Submitting...';
            if (spinner) spinner.classList.remove('hidden');
            
            try {
                // Collect and prepare form data
                const formData = collectFormData();
                const applicationId = 'APP-' + Date.now();
                
                // Add metadata
                const completeData = {
                    ...formData,
                    applicationId: applicationId,
                    status: 'pending',
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    submissionDate: new Date().toISOString()
                };
                
                // Save to Firebase
                await database.ref('applications/' + applicationId).set(completeData);
                
                // Show success message
                showSuccessMessage();
                
                // Clear form and local storage
                form.reset();
                localStorage.removeItem('joinFormData');
            } catch (error) {
                console.error('Submission error:', error);
                showErrorMessage(error);
            } finally {
                // Reset button state
                if (submitButton) submitButton.disabled = false;
                if (buttonText) buttonText.textContent = 'Submit Application';
                if (spinner) spinner.classList.add('hidden');
            }
        }
    });
    
    // Helper functions
    function showStep(step) {
        if (!steps || steps.length === 0) return;
        
        // Hide all steps
        steps.forEach(stepElement => stepElement.classList.remove('active'));
        
        // Show current step
        const currentStepElement = steps.find(s => {
            const stepAttr = s.getAttribute('data-step');
            return stepAttr && parseInt(stepAttr) === step;
        });
        
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }
        
        // Update active indicators
        if (stepIndicators && stepIndicators.length > 0) {
            stepIndicators.forEach(indicator => {
                const indicatorStep = parseInt(indicator.getAttribute('data-step'));
                if (!isNaN(indicatorStep)) {
                    indicator.classList.toggle('active', indicatorStep <= step);
                }
            });
        }
        
        // Scroll to form
        if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    function updateProgress() {
        if (!progressFill) return;
        
=======
        });
    });
    
    function showStep(step) {
        // Hide all steps
        steps.forEach(s => s.classList.remove('active'));
        
        // Show current step
        const currentStepElement = form.querySelector(`.form-step[data-step="${step}"]`);
        currentStepElement.classList.add('active');
        
        // Update active indicator
        stepIndicators.forEach(indicator => {
            indicator.classList.remove('active');
            
            const indicatorStep = parseInt(indicator.getAttribute('data-step'));
            if (indicatorStep <= step) {
                indicator.classList.add('active');
            }
        });
        
        // Scroll to top of form
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function updateProgress() {
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    function validateStep(step) {
<<<<<<< HEAD
        clearAllErrors();
        let isValid = true;
        
        // Step 1: Personal Info validation
        if (step === 1) {
            const requiredFields = [
                { id: 'first-name', message: 'First name is required' },
                { id: 'last-name', message: 'Last name is required' },
                { id: 'email', message: 'Valid email is required', validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
                { id: 'university', message: 'University is required' }
            ];
            
            for (const field of requiredFields) {
                const input = form.querySelector(`#${field.id}`);
                if (!input) continue;
                
                const value = input.value.trim();
                
                if (!value || (field.validate && !field.validate(value))) {
                    markFieldAsInvalid(input, field.message);
                    isValid = false;
                }
            }
        }
        
        // Step 3: Review & Submit validation
        if (step === 3) {
            const agreeTerms = form.querySelector('#agree-terms');
            if (agreeTerms && !agreeTerms.checked) {
                markFieldAsInvalid(agreeTerms, 'You must agree to the terms');
                isValid = false;
            }
            
            // Update review section with current data
=======
        let isValid = true;
        
        // Reset errors
        form.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.classList.remove('error');
        });
        
        // Step 1 validation
        if (step === 1) {
            const firstName = form.querySelector('#first-name');
            const lastName = form.querySelector('#last-name');
            const email = form.querySelector('#email');
            
            if (firstName.value.trim() === '') {
                showError(firstName, 'Please enter your first name');
                isValid = false;
            }
            
            if (lastName.value.trim() === '') {
                showError(lastName, 'Please enter your last name');
                isValid = false;
            }
            
            if (email.value.trim() === '') {
                showError(email, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            }
        }
        
        // Step 3 validation
        if (step === 3) {
            const agreeTerms = form.querySelector('#agree-terms');
            
            if (!agreeTerms.checked) {
                showError(agreeTerms.closest('.form-group'), 'You must agree to the terms');
                isValid = false;
            }
            
            // Update review section
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
            updateReviewSection();
        }
        
        return isValid;
    }
    
<<<<<<< HEAD
    function clearAllErrors() {
        if (!form) return;
        
        // Clear error messages
        form.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        // Remove 'has-error' class from form groups
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('has-error');
            group.style.animation = '';
        });
        
        // Clear global error (if any)
        const globalError = form.querySelector('.global-error');
        if (globalError) {
            globalError.remove();
        }
    }
    
    function markFieldAsInvalid(input, message) {
        if (!input || !form) return;
        
        const formGroup = input.closest('.form-group');
        if (!formGroup) return;
        
        formGroup.classList.add('has-error');
        
        let errorMessage = formGroup.querySelector('.error-message');
        if (!errorMessage) {
            errorMessage = createErrorMessageElement(formGroup);
=======
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup ? formGroup.querySelector('.error-message') : null;
        
        if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA' || input.tagName === 'SELECT') {
            input.classList.add('error');
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
        }
        
        if (errorMessage) {
            errorMessage.textContent = message;
        }
        
        // Add shake animation
<<<<<<< HEAD
        formGroup.style.animation = 'none';
        void formGroup.offsetWidth; // Trigger reflow
        formGroup.style.animation = 'shake 0.5s';
    }
    
    function createErrorMessageElement(formGroup) {
        if (!formGroup) return null;
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        formGroup.appendChild(errorMessage);
        return errorMessage;
    }
    
    function collectFormData() {
        if (!form) return {};
        
        const data = {};
        const formElements = Array.from(form.elements);
        
        for (const element of formElements) {
            if (!element || !element.name) continue;
            
            if (element.type === 'checkbox') {
                if (!data[element.name]) data[element.name] = [];
                if (element.checked) data[element.name].push(element.value);
            } 
            else if (element.type === 'radio') {
                if (element.checked) data[element.name] = element.value;
            }
            else if (element.type !== 'submit' && element.type !== 'button') {
                data[element.name] = element.value;
            }
        }
        
        return data;
    }
    
    function updateReviewSection() {
        const formData = collectFormData();
        const personalInfoContainer = document.getElementById('review-personal');
        const skillsContainer = document.getElementById('review-skills');
        
        if (personalInfoContainer) {
            personalInfoContainer.innerHTML = `
                <div class="review-item">
                    <div class="review-label">Name:</div>
                    <div class="review-value">${formData['first_name'] || ''} ${formData['last_name'] || ''}</div>
                </div>
                <div class="review-item">
                    <div class="review-label">Email:</div>
                    <div class="review-value">${formData['email'] || ''}</div>
                </div>
                <div class="review-item">
                    <div class="review-label">Phone:</div>
                    <div class="review-value">${formData['phone'] || 'Not provided'}</div>
                </div>
                <div class="review-item">
                    <div class="review-label">University:</div>
                    <div class="review-value">${formData['university'] || ''}</div>
                </div>
                <div class="review-item">
                    <div class="review-label">Major:</div>
                    <div class="review-value">${formData['major'] || 'Not specified'}</div>
                </div>
            `;
        }
        
        if (skillsContainer) {
            skillsContainer.innerHTML = `
                <div class="review-item">
                    <div class="review-label">Skills:</div>
                    <div class="review-value">${Array.isArray(formData['skills']) ? formData['skills'].join(', ') : 'None selected'}</div>
                </div>
                <div class="review-item">
                    <div class="review-label">Interests:</div>
                    <div class="review-value">${formData['interests'] || 'Not specified'}</div>
                </div>
                <div class="review-item">
                    <div class="review-label">Experience:</div>
                    <div class="review-value">${formData['experience'] || 'Not specified'}</div>
                </div>
            `;
        }
    }
    
    function showSuccessMessage() {
        if (!steps || !form) return;
        
        // Hide all form steps
        steps.forEach(step => step.classList.add('hidden'));
        
        // Show success message
        const successMessage = form.querySelector('.form-success');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            successMessage.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    function showErrorMessage(error) {
        if (!form) return;
        
        // Create or reuse error container
        let errorContainer = form.querySelector('.global-error');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.className = 'global-error';
            form.prepend(errorContainer);
        }
        
        errorContainer.textContent = `Submission failed: ${error.message || 'Please try again later'}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorContainer.classList.add('fade-out');
            setTimeout(() => {
                if (errorContainer && errorContainer.parentNode) {
                    errorContainer.parentNode.removeChild(errorContainer);
                }
            }, 500);
        }, 5000);
    }
    
    // Auto-save form progress
    form.addEventListener('input', debounce(() => {
        const formData = collectFormData();
        if (formData) {
            localStorage.setItem('joinFormData', JSON.stringify(formData));
        }
    }, 500));
    
    // Load saved form data
    const savedFormData = localStorage.getItem('joinFormData');
    if (savedFormData) {
        try {
            const formData = JSON.parse(savedFormData);
            for (const [name, value] of Object.entries(formData)) {
                const element = form.querySelector(`[name="${name}"]`);
                if (!element) continue;
                
                if (element.type === 'checkbox' && Array.isArray(value)) {
                    value.forEach(val => {
                        const checkbox = form.querySelector(`[name="${name}"][value="${val}"]`);
                        if (checkbox) checkbox.checked = true;
                    });
                } else {
                    element.value = value;
                }
            }
        } catch (e) {
            console.warn('Failed to load saved form data:', e);
        }
    }
    
    // Utility functions
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    
    // Add dynamic styles
    const dynamicStyles = document.createElement('style');
    dynamicStyles.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .has-error input,
        .has-error textarea,
        .has-error select {
            border-color: #ff3860 !important;
        }
        
        .error-message {
            color: #ff3860;
            font-size: 0.85rem;
            margin-top: 5px;
            min-height: 18px;
        }
        
        .global-error {
            background: #ff3860;
            color: white;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            animation: fadeIn 0.3s ease;
        }
        
        .fade-out {
            animation: fadeOut 0.5s ease forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .review-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        
        .review-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 5px;
        }
        
        .review-value {
            color: #333;
        }
    `;
    document.head.appendChild(dynamicStyles);
});
=======
        if (formGroup) {
            formGroup.style.animation = 'shake 0.5s';
            setTimeout(() => {
                formGroup.style.animation = '';
            }, 500);
        }
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function updateReviewSection() {
        // Personal Information
        const personalFields = [
            { label: 'First Name', id: 'first-name' },
            { label: 'Last Name', id: 'last-name' },
            { label: 'Email', id: 'email' },
            { label: 'Phone', id: 'phone' },
            { label: 'University', id: 'university' },
            { label: 'Major', id: 'major' }
        ];
        
        const personalReview = document.getElementById('review-personal');
        personalReview.innerHTML = '';
        
        personalFields.forEach(field => {
            const input = form.querySelector(`#${field.id}`);
            if (input.value.trim()) {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.innerHTML = `
                    <div class="review-label">${field.label}</div>
                    <div class="review-value">${input.value.trim()}</div>
                `;
                personalReview.appendChild(reviewItem);
            }
        });
        
        // Skills & Interests
        const skillsReview = document.getElementById('review-skills');
        skillsReview.innerHTML = '';
        
        // Skills
        const checkedSkills = form.querySelectorAll('input[name="skills[]"]:checked');
        if (checkedSkills.length > 0) {
            const skillsItem = document.createElement('div');
            skillsItem.className = 'review-item';
            skillsItem.innerHTML = `
                <div class="review-label">Skills</div>
                <div class="review-value">${Array.from(checkedSkills).map(skill => skill.value).join(', ')}</div>
            `;
            skillsReview.appendChild(skillsItem);
        }
        
        // Interests
        const interests = form.querySelector('#interests');
        if (interests.value.trim()) {
            const interestsItem = document.createElement('div');
            interestsItem.className = 'review-item';
            interestsItem.innerHTML = `
                <div class="review-label">Interests</div>
                <div class="review-value">${interests.value.trim()}</div>
            `;
            skillsReview.appendChild(interestsItem);
        }
        
        // Experience
        const experience = form.querySelector('#experience');
        if (experience.value.trim()) {
            const experienceItem = document.createElement('div');
            experienceItem.className = 'review-item';
            experienceItem.innerHTML = `
                <div class="review-label">Experience</div>
                <div class="review-value">${experience.value.trim()}</div>
            `;
            skillsReview.appendChild(experienceItem);
        }
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateStep(currentStep)) {
            const submitButton = form.querySelector('.submit-button');
            const buttonText = form.querySelector('.button-text');
            const spinner = form.querySelector('.spinner');
            
            // Show loading state
            buttonText.textContent = 'Submitting...';
            spinner.classList.remove('hidden');
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual AJAX call)
            setTimeout(() => {
                // Hide form and show success message
                form.querySelector('.form-step.active').classList.add('hidden');
                form.querySelector('.form-success').classList.remove('hidden');
                
                // Save form data to localStorage
                const formData = {};
                Array.from(form.elements).forEach(element => {
                    if (element.name) {
                        if (element.type === 'checkbox') {
                            if (!formData[element.name]) {
                                formData[element.name] = [];
                            }
                            if (element.checked) {
                                formData[element.name].push(element.value);
                            }
                        } else {
                            formData[element.name] = element.value;
                        }
                    }
                });
                
                localStorage.setItem('joinFormData', JSON.stringify(formData));
                
                // Scroll to success message
                form.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
        }
    });
    
    // Load saved form data if available
    const savedFormData = localStorage.getItem('joinFormData');
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        
        Object.keys(formData).forEach(key => {
            const element = form.querySelector(`[name="${key}"]`);
            
            if (element) {
                if (element.type === 'checkbox' && Array.isArray(formData[key])) {
                    formData[key].forEach(value => {
                        const checkbox = form.querySelector(`[name="${key}"][value="${value}"]`);
                        if (checkbox) {
                            checkbox.checked = true;
                        }
                    });
                } else {
                    element.value = formData[key];
                }
            }
        });
    }
    
    // GSAP Animations
    gsap.from('.join-hero .hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.join-hero .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.step-card', {
        scrollTrigger: {
            trigger: '.join-process',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    gsap.from('.application-form', {
        scrollTrigger: {
            trigger: '.application-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Animate benefits cards with delay
    document.querySelectorAll('.benefit-card').forEach((card, i) => {
        const delay = parseFloat(card.getAttribute('data-delay')) || 0;
        
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: delay,
            ease: 'power2.out'
        });
    });
});

// Add shake animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
>>>>>>> 19292bc67e84896402e0764e371b8c33923c7c7d
