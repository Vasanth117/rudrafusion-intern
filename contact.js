document.addEventListener('DOMContentLoaded', () => {

  const emailConfig = {
    publicKey: 'user_vSY5kCTggZE6CNuWO',
    serviceID: 'service_2xaupgd',
    templateID: 'template_9zpnj0k'
  };

  
  emailjs.init(emailConfig.publicKey);

  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  const submitButton = contactForm.querySelector('.submit-button');
  const buttonText = contactForm.querySelector('.button-text');
  const spinner = contactForm.querySelector('.spinner');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoadingState(true);
    
    try {
      await emailjs.sendForm(
        emailConfig.serviceID,
        emailConfig.templateID,
        contactForm
      );
      handleSuccess();
    } catch (error) {
      handleError(error);
    } finally {
      setTimeout(() => setLoadingState(false), 1500);
    }
  });

  // Form Validation
  function validateForm() {
    let isValid = true;
    const fields = {
      name: contactForm.querySelector('#name'),
      email: contactForm.querySelector('#email'),
      subject: contactForm.querySelector('#subject'),
      message: contactForm.querySelector('#message')
    };

    // Reset previous errors
    contactForm.querySelectorAll('.error-message').forEach(el => {
      el.textContent = '';
    });
    contactForm.querySelectorAll('input, textarea').forEach(input => {
      input.classList.remove('error');
    });

    // Validate each field
    if (fields.name.value.trim() === '') {
      showError(fields.name, 'Please enter your name');
      isValid = false;
    }

    if (fields.email.value.trim() === '') {
      showError(fields.email, 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(fields.email.value.trim())) {
      showError(fields.email, 'Please enter a valid email');
      isValid = false;
    }

    if (fields.subject.value.trim() === '') {
      showError(fields.subject, 'Please enter a subject');
      isValid = false;
    }

    if (fields.message.value.trim() === '') {
      showError(fields.message, 'Please enter your message');
      isValid = false;
    } else if (fields.message.value.trim().length < 20) {
      showError(fields.message, 'Message should be at least 20 characters');
      isValid = false;
    }

    return isValid;
  }

  // Helper Functions
  function setLoadingState(isLoading) {
    if (isLoading) {
      buttonText.textContent = 'Sending...';
      spinner.classList.remove('hidden');
      submitButton.disabled = true;
    } else {
      buttonText.textContent = 'Send Message';
      spinner.classList.add('hidden');
      submitButton.disabled = false;
    }
  }

  function handleSuccess() {
    buttonText.textContent = 'Message Sent!';
    showNotification('Your message has been sent successfully!', 'success');
    contactForm.reset();
  }

  function handleError(error) {
    console.error('EmailJS Error:', {
      status: error.status,
      text: error.text,
      details: error
    });
    buttonText.textContent = 'Error Sending';
    showNotification('There was an error sending your message. Please try again.', 'error');
  }

  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    input.classList.add('error');
    errorMessage.textContent = message;
    formGroup.style.animation = 'shake 0.5s';
    setTimeout(() => formGroup.style.animation = '', 500);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-20px)';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // Initialize FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // Initialize Animations
  if (typeof gsap !== 'undefined') {
    initAnimations();
  }

  // Add CSS Styles
  addCustomStyles();
});

function initAnimations() {
  // Hero Animations
  gsap.from('.contact-hero .hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power2.out'
  });

  gsap.from('.contact-hero .hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.2,
    ease: 'power2.out'
  });

  // Section Animations
  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: 'power2.out'
  });

  gsap.from('.contact-form-container', {
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    x: 50,
    opacity: 0,
    delay: 0.2,
    ease: 'power2.out'
  });

  gsap.from('.map-section', {
    scrollTrigger: {
      trigger: '.map-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power2.out'
  });

  // FAQ Animations
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    const delay = parseFloat(item.getAttribute('data-delay')) || 0;
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
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
}

function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .notification {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%) translateY(-20px);
      padding: 15px 25px;
      border-radius: var(--border-radius);
      color: white;
      font-weight: 500;
      box-shadow: var(--box-shadow);
      z-index: 9999;
      opacity: 0;
      transition: all 0.3s ease;
    }
    
    .notification.success {
      background: var(--success-color);
    }
    
    .notification.error {
      background: var(--danger-color);
    }
    
    .spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: spin 1s ease-in-out infinite;
      margin-left: 10px;
      vertical-align: middle;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .hidden {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}