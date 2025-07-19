document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab pane
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Load events data
    fetch('assets/data/events.json')
        .then(response => response.json())
        .then(data => {
            const upcomingGrid = document.querySelector('#upcoming .events-grid');
            const pastGrid = document.querySelector('#past .events-grid');
            
            // Clear existing content
            upcomingGrid.innerHTML = '';
            pastGrid.innerHTML = '';
            
            // Get current date for filtering
            const currentDate = new Date();
            
            data.forEach(event => {
                const eventDate = new Date(event.date);
                const formattedDate = eventDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
                
                const timeOptions = { hour: '2-digit', minute: '2-digit' };
                const startTime = eventDate.toLocaleTimeString('en-US', timeOptions);
                const endTime = new Date(eventDate.getTime() + event.duration * 60000).toLocaleTimeString('en-US', timeOptions);
                
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card glass-card animate-on-scroll';
                eventCard.innerHTML = `
                    <div class="event-badge">${event.type}</div>
                    <div class="event-image">
                        <img src="assets/images/events/${event.image}" alt="${event.title}">
                    </div>
                    <div class="event-content">
                        <div class="event-date">
                            <i class="far fa-calendar-alt"></i>
                            ${formattedDate} • ${startTime} - ${endTime}
                        </div>
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-excerpt">${event.excerpt}</p>
                        <div class="event-meta">
                            <span class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                            <div class="event-actions">
                                <button class="button secondary-button event-details" data-event-id="${event.id}">Details</button>
                                <button class="button primary-button event-register" data-event-id="${event.id}">Register</button>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add to appropriate grid based on date
                if (eventDate >= currentDate) {
                    upcomingGrid.appendChild(eventCard);
                } else {
                    pastGrid.appendChild(eventCard);
                }
            });
            
            // Initialize event details modal
            const eventModal = document.querySelector('.event-modal');
            const modalClose = document.querySelector('.modal-close');
            const eventDetailButtons = document.querySelectorAll('.event-details');
            
            eventDetailButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const eventId = this.getAttribute('data-event-id');
                    const event = data.find(e => e.id == eventId);
                    
                    if (event) {
                        showEventModal(event);
                    }
                });
            });
            
            modalClose.addEventListener('click', closeEventModal);
            eventModal.querySelector('.modal-overlay').addEventListener('click', closeEventModal);
            
            // Search functionality
            const searchInput = document.querySelector('.events-search input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const eventCards = document.querySelectorAll('.event-card');
                
                eventCards.forEach(card => {
                    const title = card.querySelector('.event-title').textContent.toLowerCase();
                    const excerpt = card.querySelector('.event-excerpt').textContent.toLowerCase();
                    const location = card.querySelector('.event-location').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || excerpt.includes(searchTerm) || location.includes(searchTerm)) {
                        card.style.display = 'block';
                        gsap.from(card, {
                            opacity: 0,
                            y: 20,
                            duration: 0.5
                        });
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
            
            // Animate event cards on scroll
            gsap.utils.toArray('.event-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'power2.out'
                });
            });
        });
    
    function showEventModal(event) {
        const modalBody = document.querySelector('.modal-body');
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        const timeOptions = { hour: '2-digit', minute: '2-digit' };
        const startTime = eventDate.toLocaleTimeString('en-US', timeOptions);
        const endTime = new Date(eventDate.getTime() + event.duration * 60000).toLocaleTimeString('en-US', timeOptions);
        
        modalBody.innerHTML = `
            <div class="modal-image">
                <img src="assets/images/events/${event.image}" alt="${event.title}">
            </div>
            <div class="modal-details">
                <h2>${event.title}</h2>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDate}
                    </div>
                    <div class="modal-meta-item">
                        <i class="far fa-clock"></i>
                        ${startTime} - ${endTime}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        ${event.location}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-users"></i>
                        ${event.attendees} attending
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-tag"></i>
                        ${event.type}
                    </div>
                </div>
                <div class="modal-description">
                    ${event.description}
                </div>
                <div class="modal-actions">
                    <button class="button primary-button event-register" data-event-id="${event.id}">Register Now</button>
                    <button class="button secondary-button modal-close">Close</button>
                </div>
            </div>
        `;
        
        // Add event listener to the new close button
        document.querySelector('.modal-body .modal-close').addEventListener('click', closeEventModal);
        
        // Show modal
        document.querySelector('.event-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeEventModal() {
        document.querySelector('.event-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Register button functionality (would be connected to form in real implementation)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('event-register')) {
            const eventId = e.target.getAttribute('data-event-id');
            // In a real implementation, this would open a registration form
            alert(`Registration for event ${eventId} would open here`);
        }
    });
    
    // GSAP Animations
    gsap.from('.events-hero .hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.events-hero .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.tabs-header', {
        scrollTrigger: {
            trigger: '.events-tabs-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
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
});