document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('join-form');
    if (!form) return;

    const steps = form.querySelectorAll('.form-step') || [];
    const stepIndicators = form.querySelectorAll('.step-indicator') || [];
    const progressFill = form.querySelector('.progress-fill');
    const nextButtons = form.querySelectorAll('.next-step') || [];
    const prevButtons = form.querySelectorAll('.prev-step') || [];
    const successScreen = form.querySelector('.form-success'); // ✅ success section

    let currentStep = 1;
    const totalSteps = steps.length;

    // --- Init ---
    if (totalSteps > 0) {
        showStep(currentStep);
    }

    // ✅ hide success screen on page load
    if (successScreen) {
        successScreen.classList.add('hidden');
    }

    loadSavedData();

    // --- Navigation ---
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextStep = parseInt(button.dataset.next);
            if (validateStep(currentStep)) {
                currentStep = nextStep;
                showStep(currentStep);
                updateProgress();
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const prevStep = parseInt(button.dataset.prev);
            currentStep = prevStep;
            showStep(currentStep);
            updateProgress();
        });
    });

    stepIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const step = parseInt(indicator.dataset.step);
            if (step < currentStep) {
                currentStep = step;
                showStep(currentStep);
                updateProgress();
            }
        });
    });

    // --- Show Step ---
    function showStep(step) {
        steps.forEach(s => s.classList.remove('active'));
        const target = form.querySelector(`.form-step[data-step="${step}"]`);
        if (target) target.classList.add('active');

        stepIndicators.forEach(ind =>
            ind.classList.toggle('active', parseInt(ind.dataset.step) <= step)
        );

        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Progress ---
    function updateProgress() {
        if (progressFill && totalSteps > 1) {
            const percent = ((currentStep - 1) / (totalSteps - 1)) * 100;
            progressFill.style.width = `${percent}%`;
        }
    }

    // --- Validation ---
    function validateStep(step) {
        let isValid = true;

        form.querySelectorAll('.error-message').forEach(el => (el.textContent = ''));
        form.querySelectorAll('input, textarea, select').forEach(el => el.classList.remove('error'));

        if (step === 1) {
            isValid &= checkRequired('#first-name', 'Please enter your first name');
            isValid &= checkRequired('#last-name', 'Please enter your last name');

            const email = form.querySelector('#email');
            if (!email?.value.trim()) {
                showError(email, 'Please enter your email');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            }
        }

        if (step === 3) {
            const agreeTerms = form.querySelector('#agree-terms');
            if (agreeTerms && !agreeTerms.checked) {
                showError(agreeTerms.closest('.form-group') || agreeTerms, 'You must agree to the terms');
                isValid = false;
            }
            updateReviewSection();
        }

        return !!isValid;
    }

    function checkRequired(selector, msg) {
        const el = form.querySelector(selector);
        if (!el || !el.value.trim()) {
            showError(el, msg);
            return false;
        }
        return true;
    }

    function showError(input, msg) {
        if (!input) return;
        const group = input.closest('.form-group') || input;
        const error = group.querySelector('.error-message');
        if (input.tagName?.match(/INPUT|TEXTAREA|SELECT/)) input.classList.add('error');
        if (error) error.textContent = msg;

        group.style.animation = 'shake 0.5s';
        setTimeout(() => (group.style.animation = ''), 500);
    }

    // --- Review Section ---
    function updateReviewSection() {
        const personalFields = [
            { label: 'First Name', id: 'first-name' },
            { label: 'Last Name', id: 'last-name' },
            { label: 'Email', id: 'email' },
            { label: 'Phone', id: 'phone' },
            { label: 'University', id: 'university' },
            { label: 'Major', id: 'major' }
        ];

        const personalReview = document.getElementById('review-personal');
        if (personalReview) {
            personalReview.innerHTML = '';
            personalFields.forEach(f => {
                const input = form.querySelector(`#${f.id}`);
                if (input?.value.trim()) {
                    personalReview.innerHTML += `
                        <div class="review-item">
                            <div class="review-label">${f.label}</div>
                            <div class="review-value">${input.value.trim()}</div>
                        </div>`;
                }
            });
        }

        const skillsReview = document.getElementById('review-skills');
        if (skillsReview) {
            skillsReview.innerHTML = '';

            const checkedSkills = form.querySelectorAll('input[name="skills[]"]:checked');
            if (checkedSkills.length) {
                skillsReview.innerHTML += `
                    <div class="review-item">
                        <div class="review-label">Skills</div>
                        <div class="review-value">${Array.from(checkedSkills).map(s => s.value).join(', ')}</div>
                    </div>`;
            }

            const interests = form.querySelector('#interests');
            if (interests?.value.trim()) {
                skillsReview.innerHTML += `
                    <div class="review-item">
                        <div class="review-label">Interests</div>
                        <div class="review-value">${interests.value.trim()}</div>
                    </div>`;
            }

            const experience = form.querySelector('#experience');
            if (experience?.value.trim()) {
                skillsReview.innerHTML += `
                    <div class="review-item">
                        <div class="review-label">Experience</div>
                        <div class="review-value">${experience.value.trim()}</div>
                    </div>`;
            }
        }
    }

    // --- Submit ---
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!validateStep(currentStep)) return;

        const btn = form.querySelector('.submit-button');
        const btnText = form.querySelector('.button-text');
        const spinner = form.querySelector('.spinner');

        if (btnText) btnText.textContent = 'Submitting...';
        if (spinner) spinner.classList.remove('hidden');
        if (btn) btn.disabled = true;

        setTimeout(() => {
            // ✅ hide all form steps
            steps.forEach(s => s.classList.add('hidden'));

            // ✅ show success screen
            if (successScreen) successScreen.classList.remove('hidden');

            saveData();
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1500);
    });

    // --- Save/Load ---
    function saveData() {
        const data = {};
        Array.from(form.elements).forEach(el => {
            if (!el.name) return;
            if (el.type === 'checkbox') {
                data[el.name] = data[el.name] || [];
                if (el.checked) data[el.name].push(el.value);
            } else {
                data[el.name] = el.value;
            }
        });
        localStorage.setItem('joinFormData', JSON.stringify(data));
    }

    function loadSavedData() {
        const saved = localStorage.getItem('joinFormData');
        if (!saved) return;
        const data = JSON.parse(saved);
        Object.keys(data).forEach(key => {
            const el = form.querySelector(`[name="${key}"]`);
            if (!el) return;
            if (el.type === 'checkbox' && Array.isArray(data[key])) {
                data[key].forEach(val => {
                    const cb = form.querySelector(`[name="${key}"][value="${val}"]`);
                    if (cb) cb.checked = true;
                });
            } else {
                el.value = data[key];
            }
        });
    }

    // --- GSAP Animations ---
    if (typeof gsap !== 'undefined') {
        if (document.querySelector('.join-hero .hero-title')) {
            gsap.from('.join-hero .hero-title', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' });
        }
        if (document.querySelector('.join-hero .hero-subtitle')) {
            gsap.from('.join-hero .hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 0.2, ease: 'power2.out' });
        }

        document.querySelectorAll('.step-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 80%' },
                duration: 0.8, y: 50, opacity: 0, stagger: 0.1, ease: 'power2.out'
            });
        });

        document.querySelectorAll('.application-form').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 80%' },
                duration: 0.8, y: 50, opacity: 0, ease: 'power2.out'
            });
        });

        document.querySelectorAll('.benefit-card').forEach(card => {
            const delay = parseFloat(card.dataset.delay) || 0;
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 80%' },
                opacity: 0, y: 50, duration: 0.8, delay, ease: 'power2.out'
            });
        });
    }
});

// --- Shake animation CSS ---
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%,100%{transform:translateX(0)}
    10%,30%,50%,70%,90%{transform:translateX(-5px)}
    20%,40%,60%,80%{transform:translateX(5px)}
}`;
document.head.appendChild(style);
