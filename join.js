document.addEventListener('DOMContentLoaded', function() {
    // Form navigation
    const form = document.getElementById('join-form');
    const steps = form.querySelectorAll('.form-step');
    const stepIndicators = form.querySelectorAll('.step-indicator');
    const progressFill = form.querySelector('.progress-fill');
    const nextButtons = form.querySelectorAll('.next-step');
    const prevButtons = form.querySelectorAll('.prev-step');
    
    let currentStep = 1;
    const totalSteps = steps.length;
    
    // Initialize form
    showStep(currentStep);
    
    // Next button click
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.getAttribute('data-next'));
            
            if (validateStep(currentStep)) {
                currentStep = nextStep;
                showStep(currentStep);
                updateProgress();
            }
        });
    });
    
    // Previous button click
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.getAttribute('data-prev'));
            
            currentStep = prevStep;
            showStep(currentStep);
            updateProgress();
        });
    });
    
    // Step indicator click
    stepIndicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const step = parseInt(this.getAttribute('data-step'));
            
            if (step < currentStep) {
                currentStep = step;
                showStep(currentStep);
                updateProgress();
            }
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
        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    function validateStep(step) {
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
            updateReviewSection();
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup ? formGroup.querySelector('.error-message') : null;
        
        if (input.tagName === 'INPUT' || input.tagName === 'TEXTAREA' || input.tagName === 'SELECT') {
            input.classList.add('error');
        }
        
        if (errorMessage) {
            errorMessage.textContent = message;
        }
        
        // Add shake animation
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