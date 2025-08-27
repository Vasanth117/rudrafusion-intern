document.addEventListener('DOMContentLoaded', function() {
    // Sample networking events data
    const networkingEvents = [
        {
            id: 1,
            title: "Tech Industry Meetup",
            type: "meetup",
            date: "2023-07-20",
            time: "6:00 PM - 9:00 PM",
            location: "Tech Hub Downtown",
            image: "assets/images/Networking/40abf88d1f9b4ee94b05a677d0224d48.jpg",
            image: "40abf88d1f9b4ee94b05a677d0224d48.jpg",
            excerpt: "Casual meetup with professionals from various tech companies.",
            description: "Join us for an evening of networking with professionals from leading tech companies in the area. This is a great opportunity to make connections, learn about different career paths, and get advice from experienced individuals in the industry.",
            attendees: 45,
            capacity: 80,
            organizer: {
                name: "Tech Professionals Association",
                image: "organizer1.jpg"
            },
            topics: ["Career growth", "Industry trends", "Company cultures"],
            registrationLink: "#"
        },
        {
            id: 2,
            title: "Annual Career Fair",
            type: "career",
            date: "2023-08-05",
            time: "10:00 AM - 4:00 PM",
            location: "University Conference Center",
            image: "c9a2e37ce95e36aaa867f56103b299ba.jpg",
            excerpt: "Connect with recruiters from top tech companies looking for talent.",
            description: "Our annual career fair brings together recruiters from over 50 tech companies looking to hire students and recent graduates. Bring your resume, dress professionally, and be ready to make a great impression!",
            attendees: 120,
            capacity: 200,
            organizer: {
                name: "University Career Services",
                image: "organizer2.jpg"
            },
            topics: ["Job opportunities", "Resume reviews", "Interview prep"],
            registrationLink: "#"
        },
        {
            id: 3,
            title: "Mentorship Mixer",
            type: "mentorship",
            date: "2023-08-15",
            time: "5:30 PM - 7:30 PM",
            location: "Innovation Center",
            image: "f9b41a74850ea578351c119852a41a14.jpg",
            excerpt: "Meet potential mentors from various tech disciplines.",
            description: "This special event connects students with experienced professionals who are willing to serve as mentors. You'll have the opportunity to meet mentors from software engineering, data science, product management, and other tech fields.",
            attendees: 30,
            capacity: 50,
            organizer: {
                name: "Tech Mentorship Program",
                image: "organizer3.jpg"
            },
            topics: ["Career guidance", "Skill development", "Professional growth"],
            registrationLink: "#"
        },
        {
            id: 4,
            title: "Startup Founder Social",
            type: "social",
            date: "2023-08-25",
            time: "7:00 PM - 10:00 PM",
            location: "The Foundry",
            image: "68d1c54da383abc8f63845ebe96318e3.jpg",
            excerpt: "Connect with local startup founders and entrepreneurs.",
            description: "An evening of drinks and conversation with founders of local tech startups. Learn about their journeys, challenges they've faced, and opportunities in the startup ecosystem.",
            attendees: 25,
            capacity: 40,
            organizer: {
                name: "Startup Community",
                image: "organizer4.jpg"
            },
            topics: ["Entrepreneurship", "Startup culture", "Funding"],
            registrationLink: "#"
        },
        {
            id: 5,
            title: "Women in Tech Networking",
            type: "meetup",
            date: "2023-09-10",
            time: "6:00 PM - 8:00 PM",
            location: "Women's Tech Center",
            image: "60780da56e80ec4df76889d4dd6f7aa2.jpg",
            excerpt: "Networking event for women in technology fields.",
            description: "This event brings together women at all stages of their tech careers - from students to executives. Share experiences, advice, and build your professional network in a supportive environment.",
            attendees: 60,
            capacity: 80,
            organizer: {
                name: "Women in Tech Organization",
                image: "organizer5.jpg"
            },
            topics: ["Diversity in tech", "Career challenges", "Leadership"],
            registrationLink: "#"
        },
        {
            id: 6,
            title: "Alumni Networking Night",
            type: "social",
            date: "2023-09-20",
            time: "6:30 PM - 9:00 PM",
            location: "Alumni Hall",
            image: "abfadb4a70b0706608c36707e17889b7.jpg",
            excerpt: "Connect with alumni working in tech industries.",
            description: "Our alumni have gone on to work at companies like Google, Amazon, and Microsoft. Come hear their stories, get career advice, and expand your professional network.",
            attendees: 50,
            capacity: 75,
            organizer: {
                name: "Alumni Association",
                image: "organizer6.jpg"
            },
            topics: ["Alumni connections", "Industry insights", "Career paths"],
            registrationLink: "#"
        },
        {
            id: 7,
            title: "Introduction to React",
            type: "workshop",  // added type to match existing structure
            date: "2023-07-15",
            time: "10:00 AM - 3:00 PM",  // derived from schedule
            location: "Online",  // based on format: "online"
            image: "815cab098daa5929eb1361d3884cb7ce.jpg",
            excerpt: "Learn the fundamentals of React including components, state, and props in this hands-on workshop.",
            description: "This workshop will introduce you to the core concepts of React, a popular JavaScript library for building user interfaces. We'll cover JSX syntax, component architecture, state management, and props. By the end, you'll have built a small interactive application and understand the React ecosystem.",
            attendees: 15,  // from enrolled
            capacity: 20,   // from seats
            organizer: {
                name: "Sarah Johnson",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                title: "Senior Frontend Developer"
            },
            topics: [
                "Virtual DOM",
                "React Components",
                "JSX",
                "State Management",
                "Props"
            ],
            schedule: [
                { time: "10:00 AM - 11:00 AM", activity: "Introduction to React concepts" },
                { time: "11:00 AM - 12:30 PM", activity: "Hands-on coding: Building components" },
                { time: "12:30 PM - 1:00 PM", activity: "Lunch break" },
                { time: "1:00 PM - 2:30 PM", activity: "State and props deep dive" },
                { time: "2:30 PM - 3:00 PM", activity: "Q&A and next steps" }
            ],
            curriculum: [
                "Understanding the Virtual DOM",
                "Creating your first component",
                "Working with JSX",
                "Managing component state",
                "Passing data with props",
                "Handling events",
                "Component lifecycle methods"
            ],
            requirements: [
                "Basic HTML/CSS knowledge",
                "JavaScript fundamentals",
                "Node.js installed",
                "Code editor (VS Code recommended)"
            ],
            price: 49,
            registrationLink: "#"
        }
    ];

    // DOM elements
    const networkingGrid = document.querySelector('.networking-grid');
    const typeFilter = document.getElementById('type-filter');
    const dateFilter = document.getElementById('date-filter');
    const searchInput = document.getElementById('networking-search');
    const loadMoreBtn = document.querySelector('.networking-load-more');
    const networkingModal = document.querySelector('.networking-modal');
    const modalClose = document.querySelector('.networking-modal-close');
    const modalOverlay = document.querySelector('.networking-modal-overlay');
    
    let visibleEvents = 4;
    let filteredEvents = [...networkingEvents];

    // Initial load
    renderEvents();

    // Event listeners
    typeFilter.addEventListener('change', filterEvents);
    dateFilter.addEventListener('change', filterEvents);
    searchInput.addEventListener('input', filterEvents);
    loadMoreBtn.addEventListener('click', loadMoreEvents);
    modalClose.addEventListener('click', closeEventModal);
    modalOverlay.addEventListener('click', closeEventModal);

    // Event delegation for details buttons
    document.addEventListener('click', function(e) {
        const detailsBtn = e.target.closest('.networking-details');
        if (detailsBtn) {
            e.preventDefault();
            const eventId = parseInt(detailsBtn.dataset.eventId);
            const event = networkingEvents.find(ev => ev.id === eventId);
            if (event) showEventModal(event);
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && networkingModal.classList.contains('active')) {
            closeEventModal();
        }
    });

    // Filter events based on selections
    function filterEvents() {
        const typeValue = typeFilter.value;
        const dateValue = dateFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        const today = new Date();
        
        filteredEvents = networkingEvents.filter(event => {
            const matchesType = typeValue === 'all' || event.type === typeValue;
            const matchesSearch = 
                event.title.toLowerCase().includes(searchValue) ||
                event.excerpt.toLowerCase().includes(searchValue) ||
                event.organizer.name.toLowerCase().includes(searchValue);
            
            if (dateValue === 'all') {
                return matchesType && matchesSearch;
            } else {
                const eventDate = new Date(event.date);
                if (dateValue === 'upcoming') {
                    return matchesType && matchesSearch && eventDate >= today;
                } else {
                    return matchesType && matchesSearch && eventDate < today;
                }
            }
        });
        
        visibleEvents = 4;
        renderEvents();
        loadMoreBtn.style.display = filteredEvents.length > visibleEvents ? 'inline-block' : 'none';
    }

    // Render events to the grid
    function renderEvents() {
        networkingGrid.innerHTML = '';
        
        const eventsToShow = filteredEvents.slice(0, visibleEvents);
        
        eventsToShow.forEach(event => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });
            
            const eventCard = document.createElement('div');
            eventCard.className = 'networking-card';
            eventCard.innerHTML = `
                <div class="networking-badge">${
                    event.type === 'meetup' ? 'Meetup' : 
                    event.type === 'career' ? 'Career Fair' : 
                    event.type === 'social' ? 'Social' : 'Mentorship'
                }</div>
                <div class="networking-image">
                    <img src="assets/images/networking/${event.image}" alt="${event.title}" loading="lazy">
                </div>
                <div class="networking-content">
                    <div class="networking-date">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDate} • ${event.time}
                    </div>
                    <h3 class="networking-title">${event.title}</h3>
                    <p class="networking-excerpt">${event.excerpt}</p>
                    <div class="networking-meta">
                        <span class="networking-meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            ${event.location}
                        </span>
                        <span class="networking-meta-item">
                            <i class="fas fa-users"></i>
                            ${event.capacity - event.attendees} spots left
                        </span>
                    </div>
                    <div class="networking-actions">
                        <button class="button primary-button networking-details" data-event-id="${event.id}">
                            Details
                        </button>
                    </div>
                </div>
            `;
            
            networkingGrid.appendChild(eventCard);
        });
        
        // Animate event cards
        animateCards();
    }

    // Load more events
    function loadMoreEvents() {
        visibleEvents += 4;
        renderEvents();
        if (visibleEvents >= filteredEvents.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Show event details modal
    function showEventModal(event) {
        const modalBody = document.querySelector('.networking-modal-body');
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        modalBody.innerHTML = `
            <div class="networking-modal-image">
                <img src="assets/images/networking/${event.image}" alt="${event.title}" loading="lazy">
            </div>
            <div class="networking-modal-details">
                <h2>${event.title}</h2>
                <div class="networking-modal-meta">
                    <div class="networking-modal-meta-item">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDate}
                    </div>
                    <div class="networking-modal-meta-item">
                        <i class="far fa-clock"></i>
                        ${event.time}
                    </div>
                    <div class="networking-modal-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        ${event.location}
                    </div>
                    <div class="networking-modal-meta-item">
                        <i class="fas fa-users"></i>
                        ${event.attendees}/${event.capacity} registered
                    </div>
                    <div class="networking-modal-meta-item">
                        <i class="fas fa-tag"></i>
                        ${event.type === 'meetup' ? 'Networking Meetup' : 
                         event.type === 'career' ? 'Career Fair' : 
                         event.type === 'social' ? 'Social Event' : 'Mentorship Program'}
                    </div>
                </div>
                
                <div class="networking-modal-description">
                    <h3>About This Event</h3>
                    <p>${event.description}</p>
                    
                    <h3>Discussion Topics</h3>
                    <ul>
                        ${event.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="networking-modal-host">
                    <h3>Event Organizer</h3>
                    <div class="networking-host-profile">
                        <img src="assets/images/organizers/${event.organizer.image}" alt="${event.organizer.name}" class="networking-host-image">
                        <div class="networking-host-info">
                            <h4>${event.organizer.name}</h4>
                            <div class="networking-host-social">
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fas fa-globe"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="networking-modal-actions">
                    <a href="${event.registrationLink}" class="button primary-button">Register Now</a>
                    <button class="button secondary-button">Add to Calendar</button>
                </div>
            </div>
        `;
        
        // Show modal
        networkingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close event modal
    function closeEventModal() {
        networkingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Animate cards on scroll
    function animateCards() {
        gsap.utils.toArray('.networking-card').forEach((card, i) => {
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
    }

    // Initial animations
    gsap.from('.networking-hero .hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.networking-hero .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.filter-controls', {
        scrollTrigger: {
            trigger: '.networking-filters',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.networking-cta .cta-content', {
        scrollTrigger: {
            trigger: '.networking-cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
});