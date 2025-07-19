document.addEventListener('DOMContentLoaded', function() {
    // Typewriter Effect
    class Typewriter {
        constructor(element, strings, options = {}) {
            this.element = element;
            this.strings = strings;
            this.options = Object.assign({
                typeSpeed: 50,
                deleteSpeed: 30,
                delayBetween: 1500,
                loop: true,
                cursor: true,
                cursorChar: '|'
            }, options);
            
            this.currentString = 0;
            this.isDeleting = false;
            this.text = '';
            this.init();
        }
        
        init() {
            if (this.options.cursor) {
                this.cursorElement = document.createElement('span');
                this.cursorElement.className = 'typewriter-cursor';
                this.cursorElement.textContent = this.options.cursorChar;
                this.element.appendChild(this.cursorElement);
            }
            
            this.type();
        }
        
        type() {
            const fullString = this.strings[this.currentString];
            
            if (this.isDeleting) {
                this.text = fullString.substring(0, this.text.length - 1);
            } else {
                this.text = fullString.substring(0, this.text.length + 1);
            }
            
            this.element.firstChild.textContent = this.text;
            
            let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
            
            // Random variation to make it look more natural
            typeSpeed = Math.random() * typeSpeed / 2 + typeSpeed * 0.75;
            
            if (!this.isDeleting && this.text === fullString) {
                typeSpeed = this.options.delayBetween;
                this.isDeleting = true;
            } else if (this.isDeleting && this.text === '') {
                this.isDeleting = false;
                this.currentString = (this.currentString + 1) % this.strings.length;
                typeSpeed = 500;
            }
            
            setTimeout(() => this.type(), typeSpeed);
        }
    }
    
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(el => {
        const strings = JSON.parse(el.getAttribute('data-strings'));
        new Typewriter(el, strings);
    });
    
    // Initialize Events Slider
    const eventsSlider = new Swiper('.events-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        }
    });
    
    // Load events data
    fetch('assets/data/events.json')
        .then(response => response.json())
        .then(data => {
            const sliderWrapper = document.querySelector('.events-slider .swiper-wrapper');
            sliderWrapper.innerHTML = '';
            
            data.slice(0, 6).forEach(event => {
                const eventDate = new Date(event.date);
                const formattedDate = eventDate.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
                
                const eventCard = document.createElement('div');
                eventCard.className = 'swiper-slide';
                eventCard.innerHTML = `
                    <div class="event-card glass-card">
                        <div class="event-image">
                            <img src="assets/images/events/${event.image}" alt="${event.title}">
                        </div>
                        <div class="event-content">
                            <span class="event-date">${formattedDate}</span>
                            <h3 class="event-title">${event.title}</h3>
                            <p class="event-excerpt">${event.excerpt}</p>
                            <div class="event-meta">
                                <span class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                                <a href="event-detail.html?id=${event.id}" class="button small-button">Details</a>
                            </div>
                        </div>
                    </div>
                `;
                
                sliderWrapper.appendChild(eventCard);
            });
            
            // Reinitialize slider with new content
            eventsSlider.update();
        });
    
    // Initialize Testimonials Slider
    const testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });
    
    // Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounters = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        });
    };
    
    // Only animate when stats section is in view
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
    
    // GSAP Animations
    gsap.from('.hero-title, .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.4,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-image', {
        duration: 1.5,
        x: 100,
        opacity: 0,
        delay: 0.2,
        ease: 'elastic.out(1, 0.5)'
    });
    
    gsap.from('.scroll-indicator', {
        duration: 1,
        y: 20,
        opacity: 0,
        delay: 1.5,
        ease: 'power2.out'
    });
    
    // Animate elements with delay based on data-delay attribute
    document.querySelectorAll('[data-delay]').forEach(el => {
        const delay = parseFloat(el.getAttribute('data-delay'));
        
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
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
    
    // Parallax effect for hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        gsap.to(heroImage, {
            y: 50,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }
});