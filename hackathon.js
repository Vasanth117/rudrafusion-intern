document.addEventListener('DOMContentLoaded', function() {
    // Sample hackathon data
    const hackathons = [
        {
            id: 1,
            title: "Global AI Hackathon",
            image: "5fd2d01856ad680ed6ccf72037ea50eb.jpg",
            status: "upcoming",
            theme: "ai",
            date: "2023-11-15",
            endDate: "2023-11-17",
            location: "Virtual",
            prize: "$10,000",
            participants: 250,
            teams: 50,
            excerpt: "Build innovative AI solutions to solve real-world problems.",
            description: "Join developers, data scientists, and innovators from around the world to create cutting-edge AI solutions. This 48-hour hackathon will challenge you to build applications that leverage machine learning, computer vision, or natural language processing to address pressing global issues.",
            schedule: [
                { time: "Day 1: 9:00 AM", activity: "Opening ceremony & team formation" },
                { time: "Day 1: 12:00 PM", activity: "Hacking begins" },
                { time: "Day 2: 6:00 PM", activity: "Midpoint check-in" },
                { time: "Day 3: 12:00 PM", activity: "Hacking ends" },
                { time: "Day 3: 2:00 PM", activity: "Project presentations" },
                { time: "Day 3: 6:00 PM", activity: "Awards ceremony" }
            ],
            judges: [
                { name: "Dr. Sarah Chen", title: "AI Research Lead at TechCorp" },
                { name: "James Wilson", title: "Founder of AI Startup" },
                { name: "Priya Patel", title: "Senior Data Scientist" }
            ],
            sponsors: ["Google Cloud", "NVIDIA", "AWS", "Microsoft"],
            requirements: [
                "Team of 2-5 members",
                "Basic programming knowledge",
                "Interest in AI/ML"
            ]
        },
        {
            id: 2,
            title: "Web3 Innovation Challenge",
            image: "61d94d0c8646db8ae01dae806ea2710c.jpg",
            status: "ongoing",
            theme: "web",
            date: "2023-11-10",
            endDate: "2023-11-12",
            location: "San Francisco, CA",
            prize: "5 ETH + Incubation",
            participants: 180,
            teams: 45,
            excerpt: "Build decentralized applications for the future of the internet.",
            description: "This hackathon focuses on creating innovative Web3 solutions using blockchain technology. Participants will work on projects involving DeFi, NFTs, DAOs, or other decentralized technologies with mentorship from industry experts.",
            schedule: [
                { time: "Day 1: 8:00 AM", activity: "Registration & breakfast" },
                { time: "Day 1: 10:00 AM", activity: "Keynote & hacking begins" },
                { time: "Day 2: 12:00 PM", activity: "Mentorship sessions" },
                { time: "Day 3: 10:00 AM", activity: "Submission deadline" },
                { time: "Day 3: 2:00 PM", activity: "Demo presentations" }
            ],
            judges: [
                { name: "Ethan Brown", title: "Blockchain Architect" },
                { name: "Lisa Zhang", title: "DeFi Protocol Lead" },
                { name: "Carlos Mendez", title: "Web3 Investor" }
            ],
            sponsors: ["Ethereum Foundation", "Polygon", "Coinbase", "Chainlink"],
            requirements: [
                "Team of 1-4 members",
                "Basic blockchain knowledge",
                "Web3 development experience helpful"
            ]
        },
        {
            id: 3,
            title: "Social Impact Hackathon",
            image: "55363525f4601cd6a9eff0884ff59845.jpg",
            status: "past",
            theme: "social",
            date: "2023-10-20",
            endDate: "2023-10-22",
            location: "New York, NY",
            prize: "$5,000 + Grants",
            participants: 300,
            teams: 75,
            excerpt: "Create tech solutions for social and environmental challenges.",
            description: "This hackathon brought together developers, designers, and social entrepreneurs to build technology solutions addressing pressing social issues like education inequality, climate change, and healthcare access.",
            schedule: [
                { time: "Day 1: 9:00 AM", activity: "Problem statements presentation" },
                { time: "Day 1: 11:00 AM", activity: "Team formation & ideation" },
                { time: "Day 2: 2:00 PM", activity: "Mentor checkpoints" },
                { time: "Day 3: 10:00 AM", activity: "Final submissions" },
                { time: "Day 3: 3:00 PM", activity: "Community showcase" }
            ],
            judges: [
                { name: "Dr. Michael Johnson", title: "Nonprofit Director" },
                { name: "Sophia Lee", title: "Impact Investor" },
                { name: "David Kim", title: "Social Entrepreneur" }
            ],
            sponsors: ["Google.org", "Salesforce", "IBM", "UN Foundation"],
            requirements: [
                "Team of 3-6 members",
                "Passion for social impact",
                "All skill levels welcome"
            ],
            winners: [
                { name: "EduTech Team", project: "Literacy App for Underserved Communities" },
                { name: "Green Warriors", project: "Carbon Footprint Tracker" }
            ]
        },
        {
            id: 4,
            title: "Healthcare Innovation Challenge",
            image: "ad209623ada41dead4e9f0ab65ff5b0b.jpg",
            status: "upcoming",
            theme: "iot",
            date: "2023-12-05",
            endDate: "2023-12-07",
            location: "Boston, MA",
            prize: "$15,000 + Pilot Opportunity",
            participants: 200,
            teams: 50,
            excerpt: "Develop IoT solutions to transform healthcare delivery.",
            description: "This hackathon focuses on creating IoT-enabled solutions for healthcare challenges. Participants will work on projects involving remote patient monitoring, medical device innovation, hospital operations, or public health tracking.",
            schedule: [
                { time: "Day 1: 8:30 AM", activity: "Registration & opening remarks" },
                { time: "Day 1: 10:00 AM", activity: "Hacking begins" },
                { time: "Day 2: 10:00 AM", activity: "Mentor office hours" },
                { time: "Day 3: 9:00 AM", activity: "Submission deadline" },
                { time: "Day 3: 1:00 PM", activity: "Judging & awards" }
            ],
            judges: [
                { name: "Dr. Lisa Wang", title: "Chief Medical Officer" },
                { name: "Raj Patel", title: "HealthTech Investor" },
                { name: "Emily Chen", title: "Medical Device Engineer" }
            ],
            sponsors: ["Medtronic", "Boston Scientific", "Mayo Clinic", "MIT"],
            requirements: [
                "Team of 2-5 members",
                "Interest in healthcare technology",
                "Hardware experience optional"
            ]
        },
        {
            id: 5,
            title: "FinTech Hackathon",
            image: "16781442751ca65e99d16458f2637f0c.jpg",
            status: "past",
            theme: "web",
            date: "2023-09-15",
            endDate: "2023-09-17",
            location: "London, UK",
            prize: "£8,000 + Incubation",
            participants: 220,
            teams: 55,
            excerpt: "Build the future of financial technology solutions.",
            description: "This hackathon challenged participants to create innovative financial technology solutions in areas like digital banking, investment platforms, payment systems, or regulatory technology.",
            schedule: [
                { time: "Day 1: 9:00 AM", activity: "Keynote speeches" },
                { time: "Day 1: 11:00 AM", activity: "Hacking begins" },
                { time: "Day 2: 4:00 PM", activity: "Progress presentations" },
                { time: "Day 3: 10:00 AM", activity: "Final submissions" },
                { time: "Day 3: 4:00 PM", activity: "Awards ceremony" }
            ],
            judges: [
                { name: "Olivia Smith", title: "FinTech Founder" },
                { name: "Nathan Brooks", title: "Banking Executive" },
                { name: "Sophie Martin", title: "VC Partner" }
            ],
            sponsors: ["Barclays", "Revolut", "Stripe", "Plaid"],
            requirements: [
                "Team of 1-4 members",
                "Finance knowledge helpful",
                "All technical levels welcome"
            ],
            winners: [
                { name: "PayFlow", project: "Cross-border payment solution" },
                { name: "CreditAI", project: "Alternative credit scoring" }
            ]
        },
        {
            id: 6,
            title: "Climate Tech Hackathon",
            image: "678c09482a3b64d395923888450b8ecd.jpg",
            status: "upcoming",
            theme: "social",
            date: "2023-12-10",
            endDate: "2023-12-12",
            location: "Virtual",
            prize: "$7,500 + Mentorship",
            participants: 350,
            teams: 80,
            excerpt: "Develop technology solutions to combat climate change.",
            description: "This virtual hackathon brings together developers, scientists, and entrepreneurs to build solutions addressing climate change mitigation, adaptation, or education. Projects can focus on energy, agriculture, transportation, or other critical areas.",
            schedule: [
                { time: "Day 1: 10:00 AM", activity: "Opening ceremony" },
                { time: "Day 1: 12:00 PM", activity: "Hacking begins" },
                { time: "Day 2: 8:00 PM", activity: "Mentor check-ins" },
                { time: "Day 3: 12:00 PM", activity: "Submission deadline" },
                { time: "Day 3: 4:00 PM", activity: "Virtual showcase" }
            ],
            judges: [
                { name: "Dr. Emma Wilson", title: "Climate Scientist" },
                { name: "James Lee", title: "CleanTech Investor" },
                { name: "Sophia Martinez", title: "Sustainability Director" }
            ],
            sponsors: ["Tesla", "Patagonia", "WWF", "NASA"],
            requirements: [
                "Team of 2-6 members",
                "Passion for environmental issues",
                "All technical levels welcome"
            ]
        }
    ];

    // DOM elements
    const hackathonGrid = document.querySelector('.hackathon-grid');
    const statusFilter = document.getElementById('status-filter');
    const themeFilter = document.getElementById('theme-filter');
    const searchInput = document.getElementById('hackathon-search');
    const loadMoreBtn = document.querySelector('.load-more');
    const hackathonModal = document.querySelector('.hackathon-modal');
    const modalClose = document.querySelector('.modal-close');
    
    let visibleHackathons = 6;
    let filteredHackathons = [...hackathons];

    // Initial load
    renderHackathons();

    // Filter functionality
    statusFilter.addEventListener('change', filterHackathons);
    themeFilter.addEventListener('change', filterHackathons);
    searchInput.addEventListener('input', filterHackathons);

    // Load more button
    loadMoreBtn.addEventListener('click', function() {
        visibleHackathons += 6;
        renderHackathons();
        
        if (visibleHackathons >= filteredHackathons.length) {
            this.style.display = 'none';
        }
    });

    // Hackathon modal
    document.addEventListener('click', function(e) {
        if (e.target.closest('.hackathon-details')) {
            const hackathonId = parseInt(e.target.closest('.hackathon-details').getAttribute('data-hackathon-id'));
            const hackathon = hackathons.find(h => h.id === hackathonId);
            
            if (hackathon) {
                showHackathonModal(hackathon);
            }
        }
    });

    modalClose.addEventListener('click', closeHackathonModal);
    hackathonModal.querySelector('.modal-overlay').addEventListener('click', closeHackathonModal);

    // Functions
    function filterHackathons() {
        const statusValue = statusFilter.value;
        const themeValue = themeFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        
        filteredHackathons = hackathons.filter(hackathon => {
            const matchesStatus = statusValue === 'all' || hackathon.status === statusValue;
            const matchesTheme = themeValue === 'all' || hackathon.theme === themeValue;
            const matchesSearch = 
                hackathon.title.toLowerCase().includes(searchValue) ||
                hackathon.excerpt.toLowerCase().includes(searchValue) ||
                hackathon.location.toLowerCase().includes(searchValue);
            
            return matchesStatus && matchesTheme && matchesSearch;
        });
        
        visibleHackathons = 6;
        renderHackathons();
        
        // Show/hide load more button
        loadMoreBtn.style.display = filteredHackathons.length > visibleHackathons ? 'inline-block' : 'none';
    }

    function renderHackathons() {
        hackathonGrid.innerHTML = '';
        
        const hackathonsToShow = filteredHackathons.slice(0, visibleHackathons);
        
        hackathonsToShow.forEach(hackathon => {
            const startDate = new Date(hackathon.date);
            const endDate = new Date(hackathon.endDate);
            
            const formattedDate = startDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
            
            const formattedDuration = `${startDate.getDate()} - ${endDate.getDate()} ${endDate.toLocaleDateString('en-US', { month: 'short' })}`;
            
            const hackathonCard = document.createElement('div');
            hackathonCard.className = 'hackathon-card glass-card animate-on-scroll';
            hackathonCard.innerHTML = `
                ${hackathon.status === 'upcoming' ? '<div class="hackathon-badge">Upcoming</div>' : 
                  hackathon.status === 'ongoing' ? '<div class="hackathon-badge">Ongoing</div>' : ''}
                <div class="hackathon-image">
                    <img src="assets/images/hackathons/${hackathon.image}" alt="${hackathon.title}">
                </div>
                <div class="hackathon-content">
                    <div class="hackathon-date">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDate} • ${formattedDuration}
                    </div>
                    <h3 class="hackathon-title">${hackathon.title}</h3>
                    <p class="hackathon-excerpt">${hackathon.excerpt}</p>
                    <div class="hackathon-meta">
                        <span class="hackathon-meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            ${hackathon.location}
                        </span>
                        <span class="hackathon-meta-item">
                            <i class="fas fa-trophy"></i>
                            ${hackathon.prize}
                        </span>
                        <span class="hackathon-meta-item">
                            <i class="fas fa-users"></i>
                            ${hackathon.teams} teams
                        </span>
                    </div>
                    <div class="hackathon-actions">
                        <button class="button primary-button hackathon-details" data-hackathon-id="${hackathon.id}">
                            View Details
                        </button>
                    </div>
                </div>
            `;
            
            hackathonGrid.appendChild(hackathonCard);
        });
        
        // Animate hackathon cards
        gsap.utils.toArray('.hackathon-card').forEach((card, i) => {
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

    function showHackathonModal(hackathon) {
        const modalBody = document.querySelector('.modal-body');
        const startDate = new Date(hackathon.date);
        const endDate = new Date(hackathon.endDate);
        
        const formattedDate = startDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        
        const formattedDuration = `${startDate.getDate()} - ${endDate.getDate()} ${endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}`;
        
        modalBody.innerHTML = `
            <div class="modal-image">
                <img src="assets/images/hackathons/${hackathon.image}" alt="${hackathon.title}">
            </div>
            <div class="modal-details">
                <h2>${hackathon.title}</h2>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDuration}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        ${hackathon.location}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-trophy"></i>
                        Prize: ${hackathon.prize}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-users"></i>
                        ${hackathon.participants} participants
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-tag"></i>
                        ${hackathon.theme === 'web' ? 'Web Development' : 
                         hackathon.theme === 'mobile' ? 'Mobile' : 
                         hackathon.theme === 'ai' ? 'AI/ML' : 
                         hackathon.theme === 'iot' ? 'IoT' : 'Social Good'}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-info-circle"></i>
                        Status: ${hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}
                    </div>
                </div>
                
                <div class="modal-description">
                    <h3>About This Hackathon</h3>
                    <p>${hackathon.description}</p>
                    
                    <h3>Requirements</h3>
                    <ul>
                        ${hackathon.requirements.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="modal-schedule">
                    <h3>Schedule</h3>
                    ${hackathon.schedule.map(item => `
                        <div class="schedule-item">
                            <div class="schedule-time">${item.time}</div>
                            <div class="schedule-activity">${item.activity}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="modal-judges">
                    <h3>Judges</h3>
                    <div class="judges-grid">
                        ${hackathon.judges.map(judge => `
                            <div class="judge-card">
                                <h4 class="judge-name">${judge.name}</h4>
                                <div class="judge-title">${judge.title}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                ${hackathon.sponsors ? `
                <div class="modal-sponsors">
                    <h3>Sponsors</h3>
                    <div class="sponsors-list">
                        ${hackathon.sponsors.map(sponsor => `
                            <span class="sponsor-badge">${sponsor}</span>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                
                ${hackathon.status === 'past' && hackathon.winners ? `
                <div class="modal-winners">
                    <h3>Winners</h3>
                    <ul>
                        ${hackathon.winners.map(winner => `
                            <li><strong>${winner.name}:</strong> ${winner.project}</li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
                
                <div class="modal-actions">
                    ${hackathon.status === 'upcoming' || hackathon.status === 'ongoing' ? `
                    <button class="button primary-button">Register Now</button>
                    ` : ''}
                    <button class="button secondary-button">View Gallery</button>
                </div>
            </div>
        `;
        
        // Show modal
        hackathonModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeHackathonModal() {
        hackathonModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // GSAP Animations
    gsap.from('.hackathon-hero .hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.hackathon-hero .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.filter-controls', {
        scrollTrigger: {
            trigger: '.hackathon-filters',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.hackathon-cta .cta-content', {
        scrollTrigger: {
            trigger: '.hackathon-cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
});