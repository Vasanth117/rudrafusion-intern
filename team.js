document.addEventListener('DOMContentLoaded', function() {
    // Sample talks data
    const talks = [
        {
            id: 1,
            title: "The Future of AI in Healthcare",
            category: "tech",
            format: "live",
            date: "2023-07-18",
            time: "6:00 PM - 7:30 PM",
            location: "Science Building Auditorium",
            image: "talk1.jpg",
            excerpt: "Exploring how artificial intelligence is transforming medical diagnosis and treatment.",
            description: "Dr. Chen will discuss cutting-edge applications of AI in healthcare, from diagnostic tools to personalized treatment plans. She'll share insights from her research at the intersection of machine learning and medicine, and explore ethical considerations in deploying these technologies.",
            speaker: {
                name: "Dr. Lisa Chen",
                image: "speaker1.jpg",
                title: "AI Research Lead, HealthTech Innovations"
            },
            attendees: 120,
            capacity: 150,
            topics: ["Artificial Intelligence", "Healthcare", "Machine Learning"]
        },
        {
            id: 2,
            title: "Building Your Tech Career",
            category: "career",
            format: "recorded",
            date: "2023-06-05",
            time: "5:00 PM - 6:30 PM",
            location: "Online",
            image: "talk2.jpg",
            excerpt: "Strategies for launching and growing your career in the tech industry.",
            description: "Seasoned tech recruiter Jamal Williams shares practical advice for breaking into the tech industry and advancing your career. Learn how to craft your resume, prepare for technical interviews, negotiate offers, and build a professional network that will support your growth.",
            speaker: {
                name: "Jamal Williams",
                image: "speaker2.jpg",
                title: "Senior Tech Recruiter, TalentFinders"
            },
            attendees: 85,
            capacity: 200,
            topics: ["Career Development", "Interviewing", "Networking"]
        },
        {
            id: 3,
            title: "Sustainable Tech Innovations",
            category: "innovation",
            format: "live",
            date: "2023-08-08",
            time: "4:00 PM - 5:30 PM",
            location: "Engineering Hall",
            image: "talk3.jpg",
            excerpt: "How technology can drive environmental sustainability solutions.",
            description: "Environmental engineer and tech entrepreneur Maria Gonzalez discusses innovative technologies being developed to address climate change and promote sustainability. She'll highlight promising startups and research initiatives, and discuss how students can get involved in this growing field.",
            speaker: {
                name: "Maria Gonzalez",
                image: "speaker3.jpg",
                title: "Founder, GreenTech Solutions"
            },
            attendees: 90,
            capacity: 120,
            topics: ["Sustainability", "Clean Tech", "Innovation"]
        },
        {
            id: 4,
            title: "Leading Tech Teams Effectively",
            category: "leadership",
            format: "recorded",
            date: "2023-05-15",
            time: "7:00 PM - 8:30 PM",
            location: "Business School",
            image: "talk4.jpg",
            excerpt: "Principles of technical leadership and team management.",
            description: "Engineering director Sarah Johnson shares lessons from her journey leading teams at both startups and large tech companies. She'll cover strategies for effective communication, conflict resolution, agile team management, and creating inclusive work environments that foster innovation.",
            speaker: {
                name: "Sarah Johnson",
                image: "speaker4.jpg",
                title: "Engineering Director, TechCorp"
            },
            attendees: 65,
            capacity: 80,
            topics: ["Leadership", "Management", "Teamwork"]
        },
        {
            id: 5,
            title: "Cybersecurity in the Modern Age",
            category: "tech",
            format: "live",
            date: "2023-09-12",
            time: "3:00 PM - 4:30 PM",
            location: "Computer Science Building",
            image: "talk5.jpg",
            excerpt: "Emerging threats and defense strategies in cybersecurity.",
            description: "Security expert David Kim explores the evolving landscape of cyber threats and the latest defense mechanisms. He'll discuss real-world case studies, career opportunities in cybersecurity, and practical steps everyone can take to protect their digital assets.",
            speaker: {
                name: "David Kim",
                image: "speaker5.jpg",
                title: "Chief Security Officer, SafeNet"
            },
            attendees: 110,
            capacity: 150,
            topics: ["Cybersecurity", "Privacy", "Hacking"]
        },
        {
            id: 6,
            title: "The Future of Web Development",
            category: "tech",
            format: "live",
            date: "2023-10-05",
            time: "6:00 PM - 7:30 PM",
            location: "Innovation Hub",
            image: "talk6.jpg",
            excerpt: "Exploring upcoming trends and technologies in web development.",
            description: "Frontend architect Priya Patel discusses emerging trends in web development, including new frameworks, performance optimization techniques, and the evolving role of JavaScript. She'll share insights from building large-scale web applications and predictions for where the field is headed.",
            speaker: {
                name: "Priya Patel",
                image: "speaker6.jpg",
                title: "Lead Frontend Architect, WebScale"
            },
            attendees: 95,
            capacity: 120,
            topics: ["Web Development", "JavaScript", "Frontend"]
        }
    ];

    // DOM elements
    const talksGrid = document.querySelector('.talks-grid');
    const categoryFilter = document.getElementById('category-filter');
    const formatFilter = document.getElementById('format-filter');
    const searchInput = document.getElementById('talks-search');
    const loadMoreBtn = document.querySelector('.load-more');
    
    let visibleTalks = 4;
    let filteredTalks = [...talks];

    // Initial load
    renderTalks();

    // Filter functionality
    categoryFilter.addEventListener('change', filterTalks);
    formatFilter.addEventListener('change', filterTalks);
    searchInput.addEventListener('input', filterTalks);

    // Load more button
    loadMoreBtn.addEventListener('click', function() {
        visibleTalks += 4;
        renderTalks();
        
        if (visibleTalks >= filteredTalks.length) {
            this.style.display = 'none';
        }
    });

    // Functions
    function filterTalks() {
        const categoryValue = categoryFilter.value;
        const formatValue = formatFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        
        filteredTalks = talks.filter(talk => {
            const matchesCategory = categoryValue === 'all' || talk.category === categoryValue;
            const matchesFormat = formatValue === 'all' || talk.format === formatValue;
            const matchesSearch = 
                talk.title.toLowerCase().includes(searchValue) ||
                talk.excerpt.toLowerCase().includes(searchValue) ||
                talk.speaker.name.toLowerCase().includes(searchValue) ||
                talk.topics.some(topic => topic.toLowerCase().includes(searchValue));
            
            return matchesCategory && matchesFormat && matchesSearch;
        });
        
        visibleTalks = 4;
        renderTalks();
        
        // Show/hide load more button
        loadMoreBtn.style.display = filteredTalks.length > visibleTalks ? 'inline-block' : 'none';
    }

    function renderTalks() {
        talksGrid.innerHTML = '';
        
        const talksToShow = filteredTalks.slice(0, visibleTalks);
        
        talksToShow.forEach(talk => {
            const talkDate = new Date(talk.date);
            const formattedDate = talkDate.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
            
            const talkCard = document.createElement('div');
            talkCard.className = 'talk-card glass-card animate-on-scroll';
            talkCard.innerHTML = `
                <div class="talk-badge">${
                    talk.format === 'live' ? 'Live' : 'Recorded'
                }</div>
                <div class="talk-image">
                    <img src="assets/images/talks/${talk.image}" alt="${talk.title}">
                </div>
                <div class="talk-content">
                    <div class="talk-date">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDate} • ${talk.time}
                    </div>
                    <h3 class="talk-title">${talk.title}</h3>
                    <div class="talk-speaker">
                        <img src="assets/images/speakers/${talk.speaker.image}" alt="${talk.speaker.name}">
                        <span>${talk.speaker.name}</span>
                    </div>
                    <p class="talk-excerpt">${talk.excerpt}</p>
                    <div class="talk-meta">
                        <span class="talk-meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            ${talk.location}
                        </span>
                        <span class="talk-meta-item">
                            <i class="fas fa-users"></i>
                            ${talk.capacity - talk.attendees} spots left
                        </span>
                        <span class="talk-meta-item">
                            <i class="fas fa-tag"></i>
                            ${talk.topics[0]}
                        </span>
                    </div>
                    <div class="talk-actions">
                        <button class="button primary-button talk-details" data-talk-id="${talk.id}">
                            Details
                        </button>
                    </div>
                </div>
            `;
            
            talksGrid.appendChild(talkCard);
            
            // Add click event to the details button
            const detailsBtn = talkCard.querySelector('.talk-details');
            detailsBtn.addEventListener('click', () => showTalkDetails(talk));
        });
        
        // Animate talk cards
        gsap.utils.toArray('.talk-card').forEach((card, i) => {
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

    // Function to show talk details in a modal
    function showTalkDetails(talk) {
        const talkDate = new Date(talk.date);
        const formattedDate = talkDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        // Create modal HTML
        const modalHTML = `
            <div class="talks-modal active">
                <div class="talks-modal-overlay"></div>
                <div class="talks-modal-content">
                    <button class="talks-modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="talks-modal-body">
                        <div class="talk-modal-image">
                            <img src="assets/images/talks/${talk.image}" alt="${talk.title}">
                        </div>
                        <div class="talk-modal-details">
                            <h2>${talk.title}</h2>
                            <div class="talk-modal-meta">
                                <div class="talk-modal-meta-item">
                                    <i class="far fa-calendar-alt"></i>
                                    ${formattedDate}
                                </div>
                                <div class="talk-modal-meta-item">
                                    <i class="far fa-clock"></i>
                                    ${talk.time}
                                </div>
                                <div class="talk-modal-meta-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    ${talk.location}
                                </div>
                                <div class="talk-modal-meta-item">
                                    <i class="fas fa-users"></i>
                                    ${talk.attendees} attending (${talk.capacity - talk.attendees} spots left)
                                </div>
                                <div class="talk-modal-meta-item">
                                    <i class="fas fa-video"></i>
                                    ${talk.format === 'live' ? 'Live Event' : 'Recorded Session'}
                                </div>
                            </div>
                            <div class="talk-modal-description">
                                <h3>About This Talk</h3>
                                <p>${talk.description}</p>
                            </div>
                            <div class="talk-modal-speaker">
                                <h3>About the Speaker</h3>
                                <div class="speaker-profile">
                                    <img class="speaker-image" src="assets/images/speakers/${talk.speaker.image}" alt="${talk.speaker.name}">
                                    <div class="speaker-info">
                                        <h4>${talk.speaker.name}</h4>
                                        <div class="speaker-title">${talk.speaker.title}</div>
                                        <div class="speaker-social">
                                            <a href="#"><i class="fab fa-linkedin"></i></a>
                                            <a href="#"><i class="fab fa-twitter"></i></a>
                                            <a href="#"><i class="fas fa-globe"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="talk-modal-topics">
                                <h3>Topics Covered</h3>
                                <div class="topics-list">
                                    ${talk.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                                </div>
                            </div>
                            <div class="talk-modal-actions">
                                <button class="button primary-button">
                                    ${talk.format === 'live' ? 'Register Now' : 'Watch Recording'}
                                </button>
                                <button class="button secondary-button">
                                    Add to Calendar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert modal into the DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add close functionality
        const modal = document.querySelector('.talks-modal');
        const closeBtn = document.querySelector('.talks-modal-close');
        const overlay = document.querySelector('.talks-modal-overlay');

        function closeModal() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 300); // Match this with your CSS transition duration
        }

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);

        // Close modal when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Animate modal in
        gsap.from('.talks-modal-content', {
            duration: 0.3,
            opacity: 0,
            y: 20,
            ease: 'power2.out'
        });
    }

    // GSAP Animations
    gsap.from('.talks-hero .hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.talks-hero .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.filter-controls', {
        scrollTrigger: {
            trigger: '.talks-filters',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.talks-cta .cta-content', {
        scrollTrigger: {
            trigger: '.talks-cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
});