document.addEventListener('DOMContentLoaded', function() {
    // Sample event data
    const events = [
        {
            id: 1,
            title: "Global Hackathon 2023",
            image: "5fd2d01856ad680ed6ccf72037ea50eb.jpg",
            category: "hackathon",
            year: "2023",
            description: "48-hour coding marathon with participants from 30+ countries",
            date: "2023-11-18",
            location: "Virtual",
            participants: 350,
            winners: ["Team Quantum", "Team Innovate", "Team Visionaries"],
            tags: ["coding", "marathon", "innovation"],
            schedule: [
                { time: "10:00 AM", activity: "Opening Ceremony" },
                { time: "11:00 AM", activity: "Coding Begins" },
                { time: "2:00 PM", activity: "Lunch Break" }
            ],
            prizes: ["$10,000 Cash Prize", "Mentorship Opportunities", "Job Offers"]
        },
        {
            id: 2,
            title: "AI Innovation Challenge",
            image: "55363525f4601cd6a9eff0884ff59845.jpg",
            category: "hackathon",
            year: "2023",
            description: "Building AI solutions for real-world problems",
            date: "2023-09-15",
            location: "Tech Campus",
            participants: 120,
            winners: ["Neural Ninjas", "Deep Learners", "AI Pioneers"],
            tags: ["AI", "machine learning", "innovation"],
            schedule: [
                { time: "9:00 AM", activity: "Keynote Speech" },
                { time: "10:00 AM", activity: "Team Formation" },
                { time: "11:00 AM", activity: "Hacking Begins" } 
            ],
            prizes: ["$5,000 Cash Prize", "Cloud Credits", "Incubation Support"]
        },
        {
            id: 3,
            title: "FinTech Hackathon",
            image: "61d94d0c8646db8ae01dae806ea2710c.jpg",
            category: "hackathon",
            year: "2023",
            description: "Innovate in financial technology solutions",
            date: "2023-08-12",
            location: "Finance District",
            participants: 180,
            winners: ["Block Builders", "Crypto Kings", "FinTech Wizards"],
            tags: ["finance", "blockchain", "payments"],
            schedule: [
                { time: "9:30 AM", activity: "Registration" },
                { time: "10:30 AM", activity: "Problem Statements" },
                { time: "12:00 PM", activity: "Hacking Begins" }
            ],
            prizes: ["$8,000 Cash Prize", "Bank Partnerships", "VC Meetings"]
        },
        {
            id: 4,
            title: "HealthTech Hack",
            image: "c3745cc83a7317b0b8ed6975eeb6aac2.jpg",
            category: "hackathon",
            year: "2023",
            description: "Creating solutions for healthcare challenges",
            date: "2023-07-22",
            location: "Medical Center",
            participants: 150,
            winners: ["MediCoders", "Health Heroes", "BioTech"],
            tags: ["healthcare", "medical", "biotech"],
            schedule: [
                { time: "8:00 AM", activity: "Check-in" },
                { time: "9:00 AM", activity: "Keynote" },
                { time: "10:00 AM", activity: "Hacking Starts" }
            ],
            prizes: ["$7,500 Cash Prize", "Hospital Pilots", "Research Grants"]
        },
        {
            id: 5,
            title: "Climate Change Hack",
            image: "f21323f7e7e99e49dbfc69cebad6dea4.jpg",
            category: "hackathon",
            year: "2023",
            description: "Tech solutions for environmental sustainability",
            date: "2023-06-10",
            location: "Green Innovation Hub",
            participants: 200,
            winners: ["Eco Warriors", "Green Tech", "Sustainable Coders"],
            tags: ["sustainability", "climate", "environment"],
            schedule: [
                { time: "10:00 AM", activity: "Opening Remarks" },
                { time: "11:00 AM", activity: "Team Formation" },
                { time: "12:00 PM", activity: "Coding Starts" }
            ],
            prizes: ["$6,000 Cash Prize", "Sustainability Grants", "Government Partnerships"]
        },
        {
            id: 6,
            title: "Education Hackathon",
            image: "678c09482a3b64d395923888450b8ecd.jpg",
            category: "hackathon",
            year: "2022",
            description: "Innovating learning technologies",
            date: "2022-11-12",
            location: "University Campus",
            participants: 220,
            winners: ["EduTech", "Learnify", "Smart Class"],
            tags: ["education", "e-learning", "edtech"],
            schedule: [
                { time: "9:00 AM", activity: "Registration" },
                { time: "10:00 AM", activity: "Challenge Announcement" },
                { time: "11:00 AM", activity: "Hacking Begins" }
            ],
            prizes: ["$5,000 Cash Prize", "School Pilots", "Publishing Deals"]
        },
        {
            id: 7,
            title: "Smart Cities Hack",
            image: "3267d49179882892d645745f80eaec07.jpg",
            category: "hackathon",
            year: "2022",
            description: "Building IoT solutions for urban challenges",
            date: "2022-09-08",
            location: "City Innovation Lab",
            participants: 190,
            winners: ["Urban Tech", "City Solutions", "Smart Living"],
            tags: ["IoT", "smart cities", "urban"],
            schedule: [
                { time: "8:30 AM", activity: "Check-in" },
                { time: "9:30 AM", activity: "Keynote" },
                { time: "10:30 AM", activity: "Coding Starts" }
            ],
            prizes: ["$7,000 Cash Prize", "City Contracts", "Tech Grants"]
        },
        {
            id: 8,
            title: "Blockchain Hackathon",
            image: "d4d9b071cef3d4e1eabe205da3f8d01b.jpg",
            category: "hackathon",
            year: "2022",
            description: "Developing decentralized applications",
            date: "2022-07-15",
            location: "Crypto Hub",
            participants: 170,
            winners: ["Chain Gang", "Decentralized", "Web3 Builders"],
            tags: ["blockchain", "web3", "crypto"],
            schedule: [
                { time: "10:00 AM", activity: "Opening" },
                { time: "11:00 AM", activity: "Team Building" },
                { time: "12:00 PM", activity: "Hacking Starts" }
            ],
            prizes: ["$9,000 Cash Prize", "VC Funding", "Exchange Listings"]
        },
        {
            id: 9,
            title: "Gaming Hackathon",
            image: "da61606b5c06cbac4330860b17ee6ad2.jpg",
            category: "hackathon",
            year: "2022",
            description: "Creating innovative gaming experiences",
            date: "2022-05-20",
            location: "Game Dev Studio",
            participants: 140,
            winners: ["Game Changers", "Pixel Perfect", "VR Masters"],
            tags: ["gaming", "VR", "AR"],
            schedule: [
                { time: "9:00 AM", activity: "Registration" },
                { time: "10:00 AM", activity: "Theme Announcement" },
                { time: "11:00 AM", activity: "Development Starts" }
            ],
            prizes: ["$6,500 Cash Prize", "Studio Contracts", "Publishing Deals"]
        },
        {
            id: 10,
            title: "Women in Tech Hackathon",
            image: "9a8b237b81f19fed6a78bd60058be803.jpg",
            category: "hackathon",
            year: "2022",
            description: "Empowering women through technology innovation",
            date: "2022-03-08",
            location: "Women's Tech Center",
            participants: 250,
            winners: ["Code Queens", "Tech Divas", "Digital Sisters"],
            tags: ["women", "diversity", "empowerment"],
            schedule: [
                { time: "9:00 AM", activity: "Welcome" },
                { time: "10:00 AM", activity: "Mentor Matching" },
                { time: "11:00 AM", activity: "Hacking Begins" }
            ],
            prizes: ["$8,000 Cash Prize", "Mentorship", "Job Offers"]
        },
        {
            id: 11,
            title: "Junior Hackathon",
            image:"73ea0a10b09f1af036eb2f2bbd315f08.jpg",
            category: "hackathon",
            year: "2021",
            description: "High school students showcase coding skills",
            date: "2021-12-10",
            location: "High School",
            participants: 100,
            winners: ["Young Coders", "Tech Teens", "Future Devs"],
            tags: ["students", "education", "beginners"],
            schedule: [
                { time: "10:00 AM", activity: "Check-in" },
                { time: "11:00 AM", activity: "Challenge Reveal" },
                { time: "12:00 PM", activity: "Coding Starts" }
            ],
            prizes: ["Scholarships", "Tech Kits", "Internships"]
        },
        {
            id: 12,
            title: "Open Source Hack",
            image: "f78ce74c8c2cd9dbe95fd7460c45dbad.jpg",
            category: "hackathon",
            year: "2021",
            description: "Contributing to open source projects",
            date: "2021-10-15",
            location: "Developer Hub",
            participants: 180,
            winners: ["Open Heroes", "Source Masters", "Git Gurus"],
            tags: ["open source", "github", "collaboration"],
            schedule: [
                { time: "9:00 AM", activity: "Registration" },
                { time: "10:00 AM", activity: "Project Selection" },
                { time: "11:00 AM", activity: "Coding Begins" }
            ],
            prizes: ["GitHub Swag", "Conference Tickets", "Job Offers"]
        },
        

        // Workshops (15 events)
        {
            id: 16,
            title: "Introduction to React",
            image: "fd368ad80043b1b22109dde71765eaa1.jpg",
            category: "workshop",
            year: "2023",
            description: "Learn the fundamentals of React including components, state, and props",
            date: "2023-07-15",
            location: "Online",
            instructor: {
                name: "Sarah Johnson",
                image: "instructor1.jpg",
                title: "Senior Frontend Developer"
            },
            duration: 3,
            seats: 20,
            enrolled: 15,
            tags: ["web", "react", "frontend"],
            curriculum: [
                "Understanding the Virtual DOM",
                "Creating your first component",
                "Working with JSX",
                "Managing component state",
                "Passing data with props"
            ],
            requirements: [
                "Basic HTML/CSS knowledge",
                "JavaScript fundamentals",
                "Node.js installed",
                "Code editor (VS Code recommended)"
            ]
        },
        {
            id: 17,
            title: "Advanced Python for Data Science",
            image: "0940eab18d017b60211ba42e01afbda4.jpg",
            category: "workshop",
            year: "2023",
            description: "Master advanced Python techniques for data analysis",
            date: "2023-07-22",
            location: "Data Lab",
            instructor: {
                name: "Dr. Michael Chen",
                image: "instructor2.jpg",
                title: "Data Science Lead"
            },
            duration: 6,
            seats: 15,
            enrolled: 12,
            tags: ["data", "python", "analysis"],
            curriculum: [
                "Advanced pandas techniques",
                "NumPy for efficient computing",
                "Data visualization mastery",
                "Machine learning with scikit-learn"
            ],
            requirements: [
                "Python intermediate knowledge",
                "Basic pandas/NumPy experience",
                "Jupyter Notebook installed",
                "Familiarity with basic statistics"
            ]
        },
        {
            id: 18,
            title: "Mobile App Development with Flutter",
            image: "812973f7f02964c31f0825f427060a11.jpg",
            category: "workshop",
            year: "2023",
            description: "Build cross-platform mobile apps with Flutter and Dart",
            date: "2023-08-05",
            location: "Mobile Lab",
            instructor: {
                name: "Alex Rodriguez",
                image: "instructor3.jpg",
                title: "Mobile Architect"
            },
            duration: 4,
            seats: 25,
            enrolled: 18,
            tags: ["mobile", "flutter", "apps"],
            curriculum: [
                "Flutter fundamentals",
                "Building your first app",
                "State management",
                "Working with APIs"
            ],
            requirements: [
                "Basic programming knowledge",
                "Dart syntax helpful",
                "Android Studio/Xcode installed"
            ]
        },
        {
            id: 19,
            title: "Cloud Computing with AWS",
            image: "401950f6f52e0594cb763ae089bce8a9.jpg",
            category: "workshop",
            year: "2023",
            description: "Get started with Amazon Web Services",
            date: "2023-08-12",
            location: "Cloud Lab",
            instructor: {
                name: "Priya Patel",
                image: "instructor4.jpg",
                title: "Cloud Solutions Architect"
            },
            duration: 5,
            seats: 30,
            enrolled: 22,
            tags: ["cloud", "aws", "devops"],
            curriculum: [
                "AWS Fundamentals",
                "EC2 and Virtual Servers",
                "S3 and Storage",
                "Security and IAM"
            ],
            requirements: [
                "Basic understanding of servers",
                "Familiarity with command line",
                "AWS free tier account"
            ]
        },
        {
            id: 20,
            title: "Ethical Hacking Fundamentals",
            image: "7f839d49a85793bfc330384ffae762c2.jpg",
            category: "workshop",
            year: "2023",
            description: "Learn penetration testing techniques",
            date: "2023-08-19",
            location: "Security Lab",
            instructor: {
                name: "James Wilson",
                image: "instructor5.jpg",
                title: "Cybersecurity Consultant"
            },
            duration: 6,
            seats: 15,
            enrolled: 10,
            tags: ["security", "cyber", "hacking"],
            curriculum: [
                "Ethical hacking overview",
                "Reconnaissance techniques",
                "Scanning and enumeration",
                "Exploitation basics"
            ],
            requirements: [
                "Basic networking knowledge",
                "Linux command line experience",
                "Kali Linux VM (provided)"
            ]
        },
        {
            id: 21,
            title: "UI/UX Design Principles",
            image: "fca53f924cc366f40a5f6cd8edead5dd.jpg",
            category: "workshop",
            year: "2023",
            description: "Master UI/UX design fundamentals",
            date: "2023-09-02",
            location: "Design Studio",
            instructor: {
                name: "Emily Zhang",
                image: "instructor6.jpg",
                title: "Lead Product Designer"
            },
            duration: 4,
            seats: 20,
            enrolled: 14,
            tags: ["design", "ux", "ui"],
            curriculum: [
                "UX fundamentals",
                "Wireframing and prototyping",
                "Visual design principles",
                "Usability testing"
            ],
            requirements: [
                "Laptop with Figma installed",
                "Creative mindset",
                "No prior design experience needed"
            ]
        },
        {
            id: 22,
            title: "Machine Learning with TensorFlow",
            image: "3ca164677a3a37a8da7409c4f08e1569.jpg",
            category: "workshop",
            year: "2023",
            description: "Hands-on introduction to building neural networks",
            date: "2023-09-09",
            location: "AI Lab",
            instructor: {
                name: "Dr. Rajesh Kumar",
                image: "instructor7.jpg",
                title: "AI Research Scientist"
            },
            duration: 5,
            seats: 25,
            enrolled: 20,
            tags: ["AI", "ml", "tensorflow"],
            curriculum: [
                "TensorFlow basics",
                "Building your first model",
                "Convolutional Neural Networks",
                "Recurrent Neural Networks"
            ],
            requirements: [
                "Python programming experience",
                "Basic linear algebra",
                "Jupyter Notebook environment"
            ]
        },
        {
            id: 23,
            title: "IoT with Raspberry Pi",
            image: "b258eb269a6922aee057e38e77905e42.jpg",
            category: "workshop",
            year: "2023",
            description: "Build your first IoT project",
            date: "2023-09-16",
            location: "IoT Lab",
            instructor: {
                name: "David Miller",
                image: "instructor8.jpg",
                title: "Embedded Systems Engineer"
            },
            duration: 6,
            seats: 12,
            enrolled: 8,
            tags: ["iot", "raspberry", "embedded"],
            curriculum: [
                "Raspberry Pi setup",
                "Working with sensors",
                "Data collection",
                "Cloud connectivity"
            ],
            requirements: [
                "Raspberry Pi (provided)",
                "Basic Python knowledge helpful",
                "No hardware experience needed"
            ]
        },

        // Meetups (15 events)
        {
            id: 31,
            title: "Tech Networking Night",
            image: "678c09482a3b64d395923888450b8ecd.jpg",
            category: "meetup",
            year: "2023",
            description: "Connect with tech professionals and enthusiasts",
            date: "2023-10-20",
            location: "Innovation Hub",
            attendees: 120,
            speakers: ["Local Tech Leaders"],
            tags: ["networking", "career", "community"],
            agenda: [
                { time: "6:00 PM", activity: "Registration & Networking" },
                { time: "7:00 PM", activity: "Panel Discussion" },
                { time: "8:00 PM", activity: "Open Networking" }
            ]
        },
        {
            id: 32,
            title: "Women in Tech Panel",
            image: "603526b4f0de2e717d154c55e210a3ac.jpg",
            category: "meetup",
            year: "2023",
            description: "Discussion on diversity in technology",
            date: "2023-09-25",
            location: "Diversity Center",
            attendees: 150,
            speakers: ["Female Tech Executives"],
            tags: ["women", "diversity", "leadership"],
            agenda: [
                { time: "5:30 PM", activity: "Registration" },
                { time: "6:00 PM", activity: "Keynote Address" },
                { time: "7:00 PM", activity: "Panel Discussion" }
            ]
        },
        {
            id: 33,
            title: "Startup Pitch Night",
            image: "1ad927b967575cdc282302579aa019af.jpg",
            category: "meetup",
            year: "2023",
            description: "Emerging startups present their ideas",
            date: "2023-08-30",
            location: "Entrepreneur Space",
            attendees: 200,
            speakers: ["Startup Founders", "Investors"],
            tags: ["startups", "entrepreneurship", "pitching"],
            agenda: [
                { time: "6:00 PM", activity: "Registration" },
                { time: "7:00 PM", activity: "Pitch Presentations" },
                { time: "8:30 PM", activity: "Networking" }
            ]
        },
        {
            id: 34,
            title: "AI Roundtable",
            image: "c467d83c6ff4936ad9adc4cb8fde3ba0.jpg",
            category: "meetup",
            year: "2023",
            description: "Experts discuss AI trends and ethics",
            date: "2023-07-15",
            location: "AI Research Center",
            attendees: 90,
            speakers: ["AI Researchers", "Ethicists"],
            tags: ["AI", "ethics", "future"],
            agenda: [
                { time: "5:00 PM", activity: "Registration" },
                { time: "6:00 PM", activity: "Keynote" },
                { time: "7:00 PM", activity: "Roundtable Discussion" }
            ]
        },
        {
            id: 35,
            title: "Blockchain Community Meet",
            image: "e509eeb54b0f9f30c77b7d9283c4d8f3.jpg",
            category: "meetup",
            year: "2023",
            description: "Latest in blockchain and decentralized tech",
            date: "2023-06-10",
            location: "Crypto Hub",
            attendees: 110,
            speakers: ["Blockchain Developers"],
            tags: ["blockchain", "web3", "crypto"],
            agenda: [
                { time: "6:30 PM", activity: "Registration" },
                { time: "7:00 PM", activity: "Tech Talks" },
                { time: "8:00 PM", activity: "Networking" }
            ]
        },
        {
            id: 36,
            title: "Tech Career Fair",
            image: "8e071e1f164b2ac5922d7fb571b21a54.jpg",
            category: "meetup",
            year: "2022",
            description: "Connect with tech companies hiring",
            date: "2022-12-05",
            location: "Convention Center",
            attendees: 300,
            speakers: ["HR Representatives"],
            tags: ["career", "jobs", "recruiting"],
            agenda: [
                { time: "10:00 AM", activity: "Registration" },
                { time: "11:00 AM", activity: "Company Booths" },
                { time: "2:00 PM", activity: "Interview Sessions" }
            ]
        },
        {
            id: 37,
            title: "Open Source Contributors",
            image: "b510d9940599a2e70380856f504e5c22.jpg",
            category: "meetup",
            year: "2022",
            description: "Celebrating open source contributions",
            date: "2022-11-15",
            location: "Developer Space",
            attendees: 80,
            speakers: ["Maintainers", "Contributors"],
            tags: ["open source", "github", "collaboration"],
            agenda: [
                { time: "6:00 PM", activity: "Registration" },
                { time: "7:00 PM", activity: "Lightning Talks" },
                { time: "8:00 PM", activity: "Networking" }
            ]
        },
        {
            id: 38,
            title: "Tech for Social Good",
            image: "a6575d1a90c41afd34181f20585c6f5d.jpg",
            category: "meetup",
            year: "2022",
            description: "Using technology to solve social issues",
            date: "2022-10-20",
            location: "Community Center",
            attendees: 120,
            speakers: ["Social Entrepreneurs"],
            tags: ["social", "impact", "nonprofit"],
            agenda: [
                { time: "5:30 PM", activity: "Registration" },
                { time: "6:30 PM", activity: "Case Studies" },
                { time: "7:30 PM", activity: "Networking" }
            ]
        },
        {
            id: 39,
            title: "DevOps Community Meet",
            image: "398bb0df12de03c82f4edf2e7f0bcb29.jpg",
            category: "meetup",
            year: "2022",
            description: "Sharing best practices in DevOps",
            date: "2022-09-12",
            location: "Cloud Center",
            attendees: 70,
            speakers: ["DevOps Engineers"],
            tags: ["devops", "cloud", "automation"],
            agenda: [
                { time: "6:00 PM", activity: "Registration" },
                { time: "7:00 PM", activity: "Tech Talks" },
                { time: "8:00 PM", activity: "Q&A" }
            ]
        },
        // Conferences (15 events)
        {
            id: 46,
            title: "Annual Tech Summit",
            image: "597e46de24369e04307fed64d22062a8.jpg",
            category: "conference",
            year: "2023",
            description: "Premier technology conference with industry leaders",
            date: "2023-11-15",
            location: "Convention Center",
            attendees: 1000,
            speakers: ["Tech CEOs", "Innovators"],
            duration: "3 days",
            tags: ["summit", "keynote", "innovation"],
            schedule: [
                { day: "Day 1", activities: ["Opening Keynote", "Technical Sessions"] },
                { day: "Day 2", activities: ["Workshops", "Panel Discussions"] },
                { day: "Day 3", activities: ["Closing Ceremony", "Awards"] }
            ]
        },
        {
            id: 47,
            title: "Future of AI Conference",
            image: "cfc9c1b8ee34b1f6257ae5dea684dffa.jpg",
            category: "conference",
            year: "2023",
            description: "Exploring AI advancements and applications",
            date: "2023-10-10",
            location: "AI Research Park",
            attendees: 800,
            speakers: ["AI Researchers", "Industry Experts"],
            duration: "2 days",
            tags: ["AI", "future", "research"],
            schedule: [
                { day: "Day 1", activities: ["Keynote: AI Trends", "Technical Sessions"] },
                { day: "Day 2", activities: ["Hands-on Workshops", "Closing Remarks"] }
            ]
        },
        {
            id: 48,
            title: "Web Development Conference",
            image: "1bfad14c1b75fd565a82a7233cf0b638.jpg",
            category: "conference",
            year: "2023",
            description: "Latest trends in web technologies",
            date: "2023-09-05",
            location: "Tech Campus",
            attendees: 600,
            speakers: ["Web Developers", "Framework Creators"],
            duration: "2 days",
            tags: ["web", "development", "frontend"],
            schedule: [
                { day: "Day 1", activities: ["Keynote", "Framework Deep Dives"] },
                { day: "Day 2", activities: ["Workshops", "Lightning Talks"] }
            ]
        },
        {
            id: 49,
            title: "Cloud Native Conference",
            image: "b6005a461776531e60a7ea3121768ace.jpg",
            category: "conference",
            year: "2023",
            description: "Building scalable cloud applications",
            date: "2023-08-15",
            location: "Cloud Center",
            attendees: 700,
            speakers: ["Cloud Architects"],
            duration: "2 days",
            tags: ["cloud", "kubernetes", "microservices"],
            schedule: [
                { day: "Day 1", activities: ["Keynote", "Architecture Sessions"] },
                { day: "Day 2", activities: ["Hands-on Labs", "Case Studies"] }
            ]
        },
        {
            id: 50,
            title: "Mobile World Conference",
            image: "597e46de24369e04307fed64d22062a8.jpg",
            category: "conference",
            year: "2023",
            description: "Future of mobile technology",
            date: "2023-07-20",
            location: "Mobile Innovation Hub",
            attendees: 900,
            speakers: ["Mobile Executives"],
            duration: "3 days",
            tags: ["mobile", "apps", "devices"],
            schedule: [
                { day: "Day 1", activities: ["Keynote", "Platform Updates"] },
                { day: "Day 2", activities: ["Developer Sessions", "Design Talks"] },
                { day: "Day 3", activities: ["Startup Pitches", "Closing"] }
            ]
        },
        {
            id: 51,
            title: "Data Science Summit",
            image: "f0106274dc5b6aaafc818fe1ac071a6c.jpg",
            category: "conference",
            year: "2022",
            description: "Advancements in data analytics and ML",
            date: "2022-12-10",
            location: "Data Science Center",
            attendees: 750,
            speakers: ["Data Scientists"],
            duration: "2 days",
            tags: ["data", "analytics", "machine learning"],
            schedule: [
                { day: "Day 1", activities: ["Keynote", "Technical Sessions"] },
                { day: "Day 2", activities: ["Workshops", "Poster Session"] }
            ]
        },
        {
            id: 52,
            title: "Cybersecurity Conference",
            image: "ea068a2fb7720f1ffcfe86bf7fcdcd3a.jpg",
            category: "conference",
            year: "2022",
            description: "Latest in security threats and defenses",
            date: "2022-11-15",
            location: "Security Center",
            attendees: 650,
            speakers: ["Security Experts"],
            duration: "2 days",
            tags: ["security", "cyber", "hacking"],
            schedule: [
                { day: "Day 1", activities: ["Keynote", "Threat Briefings"] },
                { day: "Day 2", activities: ["Hands-on Labs", "Panel Discussion"] }
            ]
        },
    ];

    // Functions
    const galleryGrid = document.querySelector('.gallery-grid');
    const categoryFilter = document.getElementById('category-filter');
    const yearFilter = document.getElementById('year-filter');
    const searchInput = document.getElementById('gallery-search');
    const loadMoreBtn = document.querySelector('.load-more');
    const eventModal = document.querySelector('.event-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!galleryGrid || !categoryFilter || !yearFilter || !searchInput || !loadMoreBtn || !eventModal || !modalClose) {
        console.error('One or more required DOM elements not found!');
        return;
    }
    
    let visibleEvents = 12;
    let filteredEvents = [...events];

    // Initial load
    renderEvents();

    // Filter functionality
    categoryFilter.addEventListener('change', filterEvents);
    yearFilter.addEventListener('change', filterEvents);
    searchInput.addEventListener('input', filterEvents);

    // Load more button
    loadMoreBtn.addEventListener('click', function() {
        visibleEvents += 12;
        renderEvents();
        
        if (visibleEvents >= filteredEvents.length) {
            this.style.display = 'none';
        }
    });

    // Event modal
    document.addEventListener('click', function(e) {
        if (e.target.closest('.view-gallery')) {
            const eventId = parseInt(e.target.closest('.gallery-item').getAttribute('data-event-id'));
            const event = events.find(e => e.id === eventId);
            
            if (event) {
                showEventModal(event);
            }
        }
    });

    modalClose.addEventListener('click', closeEventModal);
    if (eventModal.querySelector('.modal-overlay')) {
        eventModal.querySelector('.modal-overlay').addEventListener('click', closeEventModal);
    }

    function filterEvents() {
        const categoryValue = categoryFilter.value;
        const yearValue = yearFilter.value;
        const searchValue = searchInput.value.toLowerCase();
        
        filteredEvents = events.filter(event => {
            const matchesCategory = categoryValue === 'all' || event.category === categoryValue;
            const matchesYear = yearValue === 'all' || event.year === yearValue;
            const matchesSearch = 
                event.title.toLowerCase().includes(searchValue) ||
                event.description.toLowerCase().includes(searchValue) ||
                event.location.toLowerCase().includes(searchValue);
            
            return matchesCategory && matchesYear && matchesSearch;
        });
        
        visibleEvents = 12;
        renderEvents();
        
        loadMoreBtn.style.display = filteredEvents.length > visibleEvents ? 'inline-block' : 'none';
    }

    function renderEvents() {
        galleryGrid.innerHTML = '';
        
        const eventsToShow = filteredEvents.slice(0, visibleEvents);
        
        if (eventsToShow.length === 0) {
            galleryGrid.innerHTML = '<div class="no-events">No events found matching your criteria</div>';
            return;
        }
        
        eventsToShow.forEach(event => {
            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
            
            const eventCard = document.createElement('div');
            eventCard.className = 'gallery-item';
            eventCard.setAttribute('data-event-id', event.id);
            eventCard.innerHTML = `
                <div class="gallery-badge ${event.category}-badge">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
                <div class="gallery-image-container">
                    <img src="assets/images/gallery/${event.image}" alt="${event.title}" class="gallery-image">
                </div>
                <div class="gallery-content">
                    <div class="gallery-date">
                        <i class="far fa-calendar-alt"></i> ${formattedDate}
                    </div>
                    <h3 class="gallery-title">${event.title}</h3>
                    <p class="gallery-description">${event.description.substring(0, 100)}...</p>
                    <div class="gallery-meta">
                        ${getMetaContent(event)}
                    </div>
                    <button class="button button-outline view-gallery">
                        View Photos
                    </button>
                </div>
            `;
            
            galleryGrid.appendChild(eventCard);
        });
    }

    function getMetaContent(event) {
        switch(event.category) {
            case 'hackathon':
                return `
                    <span class="gallery-meta-item">
                        <i class="fas fa-users"></i>
                        ${event.participants} participants
                    </span>
                    <span class="gallery-meta-item">
                        <i class="fas fa-trophy"></i>
                        ${event.winners.length} winning teams
                    </span>
                `;
            case 'workshop':
                return `
                    <span class="gallery-meta-item">
                        <i class="fas fa-user"></i>
                        ${event.instructor.name}
                    </span>
                    <span class="gallery-meta-item">
                        <i class="fas fa-clock"></i>
                        ${event.duration} hours
                    </span>
                `;
            case 'meetup':
                return `
                    <span class="gallery-meta-item">
                        <i class="fas fa-users"></i>
                        ${event.attendees} attendees
                    </span>
                `;
            case 'conference':
                return `
                    <span class="gallery-meta-item">
                        <i class="fas fa-users"></i>
                        ${event.attendees} attendees
                    </span>
                    <span class="gallery-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        ${event.duration}
                    </span>
                `;
        }
    }

    function showEventModal(event) {
        const modalBody = document.querySelector('.modal-body');
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });

        let modalContent = `
            <img src="assets/images/gallery/${event.image}" alt="${event.title}" class="modal-image">
            <div class="modal-details">
                <h2 class="modal-title">${event.title}</h2>
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <i class="far fa-calendar-alt"></i>
                        ${formattedDate}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        ${event.location}
                    </div>
                    <div class="modal-meta-item">
                        <i class="fas fa-tag"></i>
                        ${event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </div>
                </div>
                
                <div class="modal-description">
                    <h3>About This Event</h3>
                    <p>${event.description}</p>
        `;

        // Add category-specific details
        switch(event.category) {
            case 'hackathon':
                modalContent += `
                    <h3>Hackathon Details</h3>
                    <p><strong>Participants:</strong> ${event.participants}</p>
                    
                    <h3>Schedule</h3>
                    <ul>
                        ${event.schedule.map(item => `<li><strong>${item.time}:</strong> ${item.activity}</li>`).join('')}
                    </ul>
                    
                    <h3>Prizes</h3>
                    <ul>
                        ${event.prizes.map(prize => `<li>${prize}</li>`).join('')}
                    </ul>
                    
                    <h3>Winning Teams</h3>
                    <ol>
                        ${event.winners.map(winner => `<li>${winner}</li>`).join('')}
                    </ol>
                `;
                break;
                
            case 'workshop':
                modalContent += `
                    <h3>Workshop Details</h3>
                    <div class="instructor-info">
                        <img src="assets/images/instructors/${event.instructor.image}" alt="${event.instructor.name}">
                        <div>
                            <h4>${event.instructor.name}</h4>
                            <p>${event.instructor.title}</p>
                        </div>
                    </div>
                    <p><strong>Duration:</strong> ${event.duration} hours</p>
                    <p><strong>Seats:</strong> ${event.enrolled}/${event.seats} enrolled</p>
                    
                    <h3>Curriculum</h3>
                    <ul>
                        ${event.curriculum.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    
                    <h3>Requirements</h3>
                    <ul>
                        ${event.requirements.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `;
                break;
                
            case 'meetup':
                modalContent += `
                    <h3>Meetup Details</h3>
                    <p><strong>Attendees:</strong> ${event.attendees}</p>
                    <p><strong>Speakers:</strong> ${event.speakers.join(', ')}</p>
                    
                    <h3>Agenda</h3>
                    <ul>
                        ${event.agenda.map(item => `<li><strong>${item.time}:</strong> ${item.activity}</li>`).join('')}
                    </ul>
                `;
                break;
                
            case 'conference':
                modalContent += `
                    <h3>Conference Details</h3>
                    <p><strong>Duration:</strong> ${event.duration}</p>
                    <p><strong>Attendees:</strong> ${event.attendees}</p>
                    <p><strong>Speakers:</strong> ${event.speakers.join(', ')}</p>
                    
                    <h3>Schedule</h3>
                    <ul>
                        ${event.schedule.map(item => `
                            <li>
                                <strong>${item.day}:</strong>
                                <ul>
                                    ${item.activities.map(activity => `<li>${activity}</li>`).join('')}
                                </ul>
                            </li>
                        `).join('')}
                    </ul>
                `;
                break;
        }

        modalContent += `
                    <div class="modal-tags">
                        <h3>Tags</h3>
                        <div class="tags-list">
                            ${event.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        modalBody.innerHTML = modalContent;
        eventModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeEventModal() {
        eventModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.from('.gallery-hero .hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
        
        gsap.from('.gallery-hero .hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.2,
            ease: 'power2.out'
        });
        
        gsap.from('.gallery-filters', {
            scrollTrigger: {
                trigger: '.gallery-filters',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
    }
});