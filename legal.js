document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('.legal-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Highlight current section in nav
    const sections = document.querySelectorAll('.legal-text section');
    const navLinks = document.querySelectorAll('.legal-nav a');
    
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Run once on load
    
    // GSAP Animations
    gsap.from('.legal-hero .hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.legal-hero .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.legal-nav', {
        scrollTrigger: {
            trigger: '.legal-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.legal-text', {
        scrollTrigger: {
            trigger: '.legal-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        x: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    // Animate sections as they come into view
    sections.forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: i * 0.05,
            ease: 'power2.out'
        });
    });
});