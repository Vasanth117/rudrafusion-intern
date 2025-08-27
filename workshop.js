    document.addEventListener('DOMContentLoaded', function() {
        // Sample workshop data (in a real app, this would come from an API)
        const workshops = [
            {
                
                id: 1,
                title: "Introduction to React",
                image:"assets/images/workshops/medium-shot-man-wearing-vr-glasses.jpg",
                category: "web",
                level: "beginner",
                format: "online",
                date: "2023-07-15",
                duration: 3,
                instructor: { 
                    name: "Sarah Johnson",
                    image:"https://randomuser.me/api/portraits/women/44.jpg",
                    title: "Senior Frontend Developer"
                },
                image: "medium-shot-man-wearing-vr-glasses.jpg",
                excerpt: "Learn the fundamentals of React including components, state, and props in this hands-on workshop.",
                description: "This workshop will introduce you to the core concepts of React, a popular JavaScript library for building user interfaces. We'll cover JSX syntax, component architecture, state management, and props. By the end, you'll have built a small interactive application and understand the React ecosystem.",
                price: 49,
                seats: 20,
                enrolled: 15,
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
                ]
            },
            {
                id: 2,
                title: "Advanced Python for Data Science",
                image:"assets/images/workshops/0e1aedc739b0bf7024efa6c2c776a0d5.jpg",
                category: "data",
                level: "advanced",
                format: "in-person",
                date: "2023-07-22",
                duration: 6,
                instructor: {
                    name: "Dr. Michael Chen",
                    image: "instructor2.jpg",
                    title: "Data Science Lead"
                },
                image: "0e1aedc739b0bf7024efa6c2c776a0d5.jpg",
                excerpt: "Master advanced Python techniques for data analysis, visualization, and machine learning.",
                description: "This intensive workshop is designed for Python developers who want to take their data science skills to the next level. We'll cover advanced pandas techniques, efficient data processing with NumPy, visualization with Matplotlib and Seaborn, and an introduction to scikit-learn for machine learning.",
                price: 99,
                seats: 15,
                enrolled: 12,
                schedule: [
                    { time: "9:00 AM - 10:30 AM", activity: "Advanced pandas techniques" },
                    { time: "10:30 AM - 12:00 PM", activity: "NumPy for efficient computing" },
                    { time: "12:00 PM - 1:00 PM", activity: "Lunch break" },
                    { time: "1:00 PM - 2:30 PM", activity: "Data visualization mastery" },
                    { time: "2:30 PM - 4:00 PM", activity: "Machine learning with scikit-learn" }
                ],
                curriculum: [
                    "Advanced pandas indexing and querying",
                    "Memory optimization techniques",
                    "Custom NumPy ufuncs",
                    "Interactive visualizations",
                    "Feature engineering",
                    "Model evaluation",
                    "Hyperparameter tuning"
                ],
                requirements: [
                    "Python intermediate knowledge",
                    "Basic pandas/NumPy experience",
                    "Jupyter Notebook installed",
                    "Familiarity with basic statistics"
                ]
            },
            {
                id: 3,
                title: "Mobile App Development with Flutter",
               image:"assets/images/workshops/4bbb09c509f091bf3de56b2c0866a23c.jpg",
                category: "mobile",
                level: "intermediate",
                format: "hybrid",
                date: "2023-08-05",
                duration: 4,
                instructor: {
                    name: "Alex Rodriguez",
                    image: "instructor3.jpg",
                    title: "Mobile Architect"
                },
                image: "4bbb09c509f091bf3de56b2c0866a23c.jpg",
                excerpt: "Build cross-platform mobile apps with Flutter and Dart from the ground up.",
                description: "Flutter has revolutionized mobile development by enabling beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. In this workshop, you'll learn how to set up your Flutter environment, understand widget composition, manage state effectively, and deploy to both iOS and Android platforms.",
                price: 79,
                seats: 25,
                enrolled: 18,
                schedule: [
                    { time: "1:00 PM - 2:30 PM", activity: "Flutter fundamentals" },
                    { time: "2:30 PM - 4:00 PM", activity: "Building your first app" },
                    { time: "4:00 PM - 4:30 PM", activity: "Break" },
                    { time: "4:30 PM - 6:00 PM", activity: "State management and APIs" }
                ],
                curriculum: [
                    "Flutter architecture overview",
                    "Widget tree and composition",
                    "Material Design and Cupertino widgets",
                    "Navigation and routing",
                    "State management solutions",
                    "Working with REST APIs",
                    "Platform-specific code"
                ],
                requirements: [
                    "Basic programming knowledge",
                    "Dart syntax helpful but not required",
                    "Android Studio/Xcode installed",
                    "Test device or emulator"
                ]
            },
            {
                id: 4,
                title: "Cloud Computing with AWS",
                image:"assets/images/workshops/783655902a5201a9b9ff5918bf48c2a7.jpg",
                category: "cloud",
                level: "beginner",
                format: "online",
                date: "2023-08-12",
                duration: 5,
                instructor: {
                    name: "Priya Patel",
                    image: "instructor4.jpg",
                    title: "Cloud Solutions Architect"
                },
                image: "783655902a5201a9b9ff5918bf48c2a7.jpg",
                excerpt: "Get started with Amazon Web Services and learn to deploy scalable applications.",
                description: "This workshop provides a comprehensive introduction to Amazon Web Services (AWS), the world's leading cloud platform. You'll learn how to set up and configure AWS services, deploy virtual servers, manage storage solutions, and understand security best practices. Hands-on labs will give you practical experience with the AWS console and CLI.",
                price: 89,
                seats: 30,
                enrolled: 22,
                schedule: [
                    { time: "10:00 AM - 11:30 AM", activity: "AWS Fundamentals" },
                    { time: "11:30 AM - 1:00 PM", activity: "EC2 and Virtual Servers" },
                    { time: "1:00 PM - 2:00 PM", activity: "Lunch break" },
                    { time: "2:00 PM - 3:30 PM", activity: "S3 and Storage Solutions" },
                    { time: "3:30 PM - 5:00 PM", activity: "Security and IAM" }
                ],
                curriculum: [
                    "AWS global infrastructure",
                    "Creating and managing EC2 instances",
                    "Elastic Block Store and S3",
                    "Identity and Access Management",
                    "Virtual Private Cloud",
                    "Monitoring with CloudWatch",
                    "Cost optimization strategies"
                ],
                requirements: [
                    "Basic understanding of servers",
                    "Familiarity with command line",
                    "AWS free tier account",
                    "Modern web browser"
                ]
            },
            {
                id: 5,
                title: "Ethical Hacking Fundamentals",
                 image:"assets/images/workshops/dedde8a8376650726e59839b4a03a593.jpg",
                category: "cyber",
                level: "intermediate",
                format: "in-person",
                date: "2023-08-19",
                duration: 6,
                instructor: {
                    name: "James Wilson",
                    image: "instructor5.jpg",
                    title: "Cybersecurity Consultant"
                },
                image: "dedde8a8376650726e59839b4a03a593.jpg",
                excerpt: "Learn penetration testing techniques and how to secure systems against attacks.",
                description: "This hands-on workshop introduces ethical hacking concepts and methodologies. You'll learn how to think like a hacker to better defend systems, covering topics like reconnaissance, scanning networks, vulnerability assessment, exploitation techniques, and post-exploitation activities. All activities will be conducted in a controlled lab environment.",
                price: 129,
                seats: 15,
                enrolled: 10,
                schedule: [
                    { time: "9:00 AM - 10:30 AM", activity: "Ethical hacking overview" },
                    { time: "10:30 AM - 12:00 PM", activity: "Reconnaissance techniques" },
                    { time: "12:00 PM - 1:00 PM", activity: "Lunch break" },
                    { time: "1:00 PM - 2:30 PM", activity: "Scanning and enumeration" },
                    { time: "2:30 PM - 4:00 PM", activity: "Exploitation basics" },
                    { time: "4:00 PM - 5:00 PM", activity: "Defensive strategies" }
                ],
                curriculum: [
                    "Legal and ethical considerations",
                    "Footprinting and reconnaissance",
                    "Network scanning with Nmap",
                    "Vulnerability assessment",
                    "Metasploit framework",
                    "Password cracking",
                    "Social engineering defense"
                ],
                requirements: [
                    "Basic networking knowledge",
                    "Linux command line experience",
                    "Kali Linux VM (provided)",
                    "Ethical mindset"
                ]
            },
            {
                id: 6,
                title: "UI/UX Design Principles",
                 image:"assets/images/workshops/e018365c030b36ef5487d35b6aa22116.jpg",
                category: "design",
                level: "beginner",
                format: "hybrid",
                date: "2023-09-02",
                duration: 4,
                instructor: {
                    name: "Emily Zhang",
                    image: "instructor6.jpg",
                    title: "Lead Product Designer"
                },
                image: "e018365c030b36ef5487d35b6aa22116.jpg",
                excerpt: "Master the fundamentals of user interface and user experience design.",
                description: "This workshop covers the core principles of creating effective, user-friendly interfaces. You'll learn about user research methods, information architecture, interaction design, visual design principles, and usability testing. Through hands-on exercises, you'll create wireframes and prototypes while learning industry-standard tools like Figma.",
                price: 69,
                seats: 20,
                enrolled: 14,
                schedule: [
                    { time: "1:00 PM - 2:30 PM", activity: "UX fundamentals" },
                    { time: "2:30 PM - 4:00 PM", activity: "Wireframing and prototyping" },
                    { time: "4:00 PM - 4:30 PM", activity: "Break" },
                    { time: "4:30 PM - 6:00 PM", activity: "Visual design principles" }
                ],
                curriculum: [
                    "User-centered design process",
                    "Conducting user research",
                    "Creating personas",
                    "Information architecture",
                    "Wireframing techniques",
                    "Prototyping tools",
                    "Usability testing"
                ],
                requirements: [
                    "Laptop with Figma installed",
                    "Creative mindset",
                    "No prior design experience needed",
                    "Interest in user psychology"
                ]
            },
            {
                id: 7,
                title: "Machine Learning with TensorFlow",
                 image:"assets/images/workshops/0f6cb2225078ff395a9084cb3e8c6eb5.jpg",
                category: "ai",
                level: "intermediate",
                format: "online",
                date: "2023-09-09",
                duration: 5,
                instructor: {
                    name: "Dr. Rajesh Kumar",
                    image: "instructor7.jpg",
                    title: "AI Research Scientist"
                },
                image: "0f6cb2225078ff395a9084cb3e8c6eb5.jpg",
                excerpt: "Hands-on introduction to building neural networks with TensorFlow 2.0.",
                description: "This workshop provides a practical introduction to machine learning using TensorFlow. You'll learn how to build, train, and evaluate different types of neural networks, including CNNs for image recognition and RNNs for sequence data. We'll cover the complete workflow from data preparation to model deployment, with hands-on coding exercises throughout.",
                price: 99,
                seats: 25,
                enrolled: 20,
                schedule: [
                    { time: "10:00 AM - 11:30 AM", activity: "TensorFlow basics" },
                    { time: "11:30 AM - 1:00 PM", activity: "Building your first model" },
                    { time: "1:00 PM - 2:00 PM", activity: "Lunch break" },
                    { time: "2:00 PM - 3:30 PM", activity: "Convolutional Neural Networks" },
                    { time: "3:30 PM - 5:00 PM", activity: "Recurrent Neural Networks" }
                ],
                curriculum: [
                    "TensorFlow ecosystem overview",
                    "Keras API fundamentals",
                    "Data preprocessing pipelines",
                    "Training and evaluation",
                    "Image classification with CNNs",
                    "Sequence modeling with RNNs",
                    "Model deployment options"
                ],
                requirements: [
                    "Python programming experience",
                    "Basic linear algebra",
                    "Jupyter Notebook environment",
                    "GPU recommended but not required"
                ]
            },
            {
                id: 8,
                title: "IoT with Raspberry Pi",
                 image:"assets/images/workshops/43b9f00cb347b025a531e7b11a0718eb.jpg",
                category: "iot",
                level: "beginner",
                format: "in-person",
                date: "2023-09-16",
                duration: 6,
                instructor: {
                    name: "David Miller",
                    image: "instructor8.jpg",
                    title: "Embedded Systems Engineer"
                },
                image: "43b9f00cb347b025a531e7b11a0718eb.jpg",
                excerpt: "Build your first Internet of Things project with Raspberry Pi and sensors.",
                description: "This hands-on workshop introduces the exciting world of IoT using Raspberry Pi. You'll learn how to set up your Pi, connect various sensors, collect data, and send it to the cloud. We'll cover both hardware and software aspects, giving you a complete picture of IoT system architecture. By the end, you'll have built a functional environmental monitoring system.",
                price: 119,
                seats: 12,
                enrolled: 8,
                schedule: [
                    { time: "9:00 AM - 10:30 AM", activity: "Raspberry Pi setup" },
                    { time: "10:30 AM - 12:00 PM", activity: "Working with sensors" },
                    { time: "12:00 PM - 1:00 PM", activity: "Lunch break" },
                    { time: "1:00 PM - 2:30 PM", activity: "Data collection and processing" },
                    { time: "2:30 PM - 4:00 PM", activity: "Cloud connectivity" },
                    { time: "4:00 PM - 5:00 PM", activity: "Project showcase" }
                ],
                curriculum: [
                    "Raspberry Pi architecture",
                    "Linux basics for IoT",
                    "GPIO pin configuration",
                    "Sensor interfacing",
                    "Data visualization",
                    "MQTT protocol",
                    "Cloud integration"
                ],
                requirements: [
                    "Raspberry Pi (provided)",
                    "Basic Python knowledge helpful",
                    "No hardware experience needed",
                    "Curiosity about embedded systems"
                ]
            },
            {
                id: 9,
                title: "Advanced JavaScript Patterns",
                 image:"assets/images/workshops/f96c6a78ed29cb0e3ba1d89b61a0e189.jpg",
                category: "web",
                level: "advanced",
                format: "online",
                date: "2023-09-23",
                duration: 4,
                instructor: {
                    name: "Sophia Lee",
                    image: "instructor9.jpg",
                    title: "JavaScript Architect"
                },
                image: "f96c6a78ed29cb0e3ba1d89b61a0e189.jpg",
                excerpt: "Master advanced JavaScript concepts and design patterns for scalable applications.",
                description: "Take your JavaScript skills to expert level with this deep dive into advanced patterns and techniques. We'll cover functional programming concepts, advanced object-oriented patterns, modern ES6+ features, performance optimization, and architectural best practices. Through code reviews and refactoring exercises, you'll learn to write more maintainable and efficient JavaScript.",
                price: 89,
                seats: 20,
                enrolled: 15,
                schedule: [
                    { time: "1:00 PM - 2:30 PM", activity: "Functional programming in JS" },
                    { time: "2:30 PM - 4:00 PM", activity: "Advanced OOP patterns" },
                    { time: "4:00 PM - 4:30 PM", activity: "Break" },
                    { time: "4:30 PM - 6:00 PM", activity: "Performance optimization" }
                ],
                curriculum: [
                    "Pure functions and immutability",
                    "Higher-order functions",
                    "Factory and module patterns",
                    "Decorators and mixins",
                    "Memory management",
                    "Event loop deep dive",
                    "Benchmarking techniques"
                ],
                requirements: [
                    "Strong JavaScript fundamentals",
                    "ES6+ syntax knowledge",
                    "Node.js installed",
                    "Familiarity with basic design patterns"
                ]
            },
            {
                id: 10,
                title: "DevOps with Docker and Kubernetes",
                 image:"assets/images/workshops/736b19cf41c506f51632f66545198b96.jpg",
                category: "cloud",
                level: "intermediate",
                format: "hybrid",
                date: "2023-09-30",
                duration: 6,
                instructor: {
                    name: "Carlos Mendez",
                    image: "instructor10.jpg",
                    title: "DevOps Engineer"
                },
                image: "736b19cf41c506f51632f66545198b96.jpg",
                excerpt: "Learn containerization and orchestration with Docker and Kubernetes.",
                description: "This workshop covers the essential tools and practices of modern DevOps. You'll learn how to containerize applications with Docker, manage multi-container applications with Docker Compose, and orchestrate deployments at scale with Kubernetes. Hands-on labs will give you practical experience with these technologies in realistic scenarios.",
                price: 109,
                seats: 18,
                enrolled: 12,
                schedule: [
                    { time: "9:00 AM - 10:30 AM", activity: "Docker fundamentals" },
                    { time: "10:30 AM - 12:00 PM", activity: "Building custom images" },
                    { time: "12:00 PM - 1:00 PM", activity: "Lunch break" },
                    { time: "1:00 PM - 2:30 PM", activity: "Docker Compose" },
                    { time: "2:30 PM - 4:00 PM", activity: "Kubernetes basics" },
                    { time: "4:00 PM - 5:00 PM", activity: "Deployment strategies" }
                ],
                curriculum: [
                    "Containerization concepts",
                    "Docker architecture",
                    "Image optimization",
                    "Volume management",
                    "Kubernetes clusters",
                    "Pods and services",
                    "Scaling and monitoring"
                ],
                requirements: [
                    "Basic command line skills",
                    "Understanding of web applications",
                    "Docker Desktop installed",
                    "Minikube or Kubernetes cluster access"
                ]
            },
            {
                id: 11,
                title: "SwiftUI for iOS Development",
                 image:"assets/images/workshops/f0013b42c5236a883bad011dd6ce4902.jpg",
                category: "mobile",
                level: "intermediate",
                format: "online",
                date: "2023-10-07",
                duration: 5,
                instructor: {
                    name: "Olivia Smith",
                    image: "instructor11.jpg",
                    title: "iOS Developer"
                },
                image: "f0013b42c5236a883bad011dd6ce4902.jpg",
                excerpt: "Build beautiful iOS apps with SwiftUI's declarative framework.",
                description: "SwiftUI represents a fundamental shift in how we build user interfaces for Apple platforms. This workshop will teach you how to leverage SwiftUI's declarative syntax to build responsive, adaptive interfaces with less code. You'll learn about state management, view composition, animation, and integrating SwiftUI with existing UIKit code.",
                price: 89,
                seats: 20,
                enrolled: 16,
                schedule: [
                    { time: "10:00 AM - 11:30 AM", activity: "SwiftUI essentials" },
                    { time: "11:30 AM - 1:00 PM", activity: "State management" },
                    { time: "1:00 PM - 2:00 PM", activity: "Lunch break" },
                    { time: "2:00 PM - 3:30 PM", activity: "Custom views and modifiers" },
                    { time: "3:30 PM - 5:00 PM", activity: "Animation and transitions" }
                ],
                curriculum: [
                    "Declarative vs imperative UI",
                    "View protocol and modifiers",
                    "@State and @Binding",
                    "ObservableObject and Combine",
                    "Building reusable components",
                    "Animating views",
                    "UIKit interoperability"
                ],
                requirements: [
                    "Basic Swift knowledge",
                    "Xcode 12+ installed",
                    "macOS computer",
                    "iOS simulator experience helpful"
                ]
            },
            {
                id: 12,
                title: "Blockchain Fundamentals",
                 image:"assets/images/workshops/261de4b788a985168579490f30d70321.jpg",
                category: "web",
                level: "beginner",
                format: "in-person",
                date: "2023-10-14",
                duration: 4,
                instructor: {
                    name: "Ethan Brown",
                    image: "instructor12.jpg",
                    title: "Blockchain Developer"
                },
                image: "261de4b788a985168579490f30d70321.jpg",
                excerpt: "Understand blockchain technology and build your first smart contract.",
                description: "This workshop demystifies blockchain technology and its applications beyond cryptocurrency. You'll learn about distributed ledger technology, consensus mechanisms, and smart contracts. Hands-on exercises will guide you through setting up a development environment, writing Solidity code, and deploying to a test network.",
                price: 79,
                seats: 15,
                enrolled: 10,
                schedule: [
                    { time: "1:00 PM - 2:30 PM", activity: "Blockchain concepts" },
                    { time: "2:30 PM - 4:00 PM", activity: "Ethereum and smart contracts" },
                    { time: "4:00 PM - 4:30 PM", activity: "Break" },
                    { time: "4:30 PM - 6:00 PM", activity: "Hands-on development" }
                ],
                curriculum: [
                    "How blockchain works",
                    "Cryptographic foundations",
                    "Consensus algorithms",
                    "Ethereum virtual machine",
                    "Solidity programming",
                    "Truffle development suite",
                    "DeFi concepts"
                ],
                requirements: [
                    "Basic programming knowledge",
                    "JavaScript experience helpful",
                    "Modern web browser",
                    "No prior blockchain knowledge needed"
                ]
            },
            {
                id: 13,
                title: "Natural Language Processing",
                 image:"assets/images/workshops/e29b16959acc3b6c919ccaaa864b4779.jpg",
                category: "ai",
                level: "advanced",
                format: "hybrid",
                date: "2023-10-21",
                duration: 6,
                instructor: {
                    name: "Dr. Lisa Wang",
                    image: "instructor13.jpg",
                    title: "NLP Research Lead"
                },
                image: "e29b16959acc3b6c919ccaaa864b4779.jpg",
                excerpt: "Explore cutting-edge techniques in text processing and language models.",
                description: "This advanced workshop covers state-of-the-art techniques in natural language processing. You'll work with transformer architectures, pretrained language models, and advanced text representation methods. Through hands-on projects, you'll implement sentiment analysis, text classification, named entity recognition, and text generation systems.",
                price: 129,
                seats: 15,
                enrolled: 12,
                schedule: [
                    { time: "9:00 AM - 10:30 AM", activity: "NLP fundamentals review" },
                    { time: "10:30 AM - 12:00 PM", activity: "Word embeddings" },
                    { time: "12:00 PM - 1:00 PM", activity: "Lunch break" },
                    { time: "1:00 PM - 2:30 PM", activity: "Transformer architectures" },
                    { time: "2:30 PM - 4:00 PM", activity: "Pretrained models" },
                    { time: "4:00 PM - 5:00 PM", activity: "Advanced applications" }
                ],
                curriculum: [
                    "Text preprocessing techniques",
                    "Word2Vec and GloVe",
                    "Attention mechanisms",
                    "BERT and GPT models",
                    "Transfer learning for NLP",
                    "Text classification",
                    "Sequence generation"
                ],
                requirements: [
                    "Strong Python skills",
                    "Basic machine learning knowledge",
                    "PyTorch/TensorFlow experience",
                    "GPU recommended"
                ]
            },
            {
                id: 14,
                title: "Game Development with Unity",
                 image:"assets/images/workshops/ddef5b302c7c5efb3189a170cb385c07.jpg",
                category: "web",
                level: "beginner",
                format: "online",
                date: "2023-10-28",
                duration: 5,
                instructor: {
                    name: "Nathan Brooks",
                    image: "instructor14.jpg",
                    title: "Game Developer"
                },
                image: "ddef5b302c7c5efb3189a170cb385c07.jpg",
                excerpt: "Create your first 3D game using Unity and C# programming.",
                description: "This workshop introduces game development using the Unity engine. You'll learn the fundamentals of game design, 3D assets, physics, scripting, and publishing. By the end, you'll have created a complete 3D game with player controls, enemies, scoring, and multiple levels. No prior game development experience is required.",
                price: 89,
                seats: 25,
                enrolled: 18,
                schedule: [
                    { time: "10:00 AM - 11:30 AM", activity: "Unity interface" },
                    { time: "11:30 AM - 1:00 PM", activity: "Game objects and components" },
                    { time: "1:00 PM - 2:00 PM", activity: "Lunch break" },
                    { time: "2:00 PM - 3:30 PM", activity: "C# scripting" },
                    { time: "3:30 PM - 5:00 PM", activity: "Building and publishing" }
                ],
                curriculum: [
                    "Unity editor basics",
                    "3D coordinate systems",
                    "Physics and collisions",
                    "Player input handling",
                    "UI systems",
                    "Audio integration",
                    "Build settings"
                ],
                requirements: [
                    "Unity Hub installed",
                    "Basic programming concepts",
                    "Windows/macOS computer",
                    "3-button mouse recommended"
                ]
            },
        ];

        // DOM elements
        const workshopsGrid = document.querySelector('.workshops-grid');
        const categoryFilter = document.getElementById('category-filter');
        const levelFilter = document.getElementById('level-filter');
        const formatFilter = document.getElementById('format-filter');
        const searchInput = document.getElementById('workshop-search');
        const loadMoreBtn = document.querySelector('.load-more');
        const workshopModal = document.querySelector('.workshop-modal');
        const modalClose = document.querySelector('.modal-close');
        
        let visibleWorkshops = 6;
        let filteredWorkshops = [...workshops];

        // Initial load
        renderWorkshops();

        // Filter functionality
        categoryFilter.addEventListener('change', filterWorkshops);
        levelFilter.addEventListener('change', filterWorkshops);
        formatFilter.addEventListener('change', filterWorkshops);
        searchInput.addEventListener('input', filterWorkshops);

        // Load more button
        loadMoreBtn.addEventListener('click', function() {
            visibleWorkshops += 6;
            renderWorkshops();
            
            if (visibleWorkshops >= filteredWorkshops.length) {
                this.style.display = 'none';
            }
        });

        // Workshop modal
        document.addEventListener('click', function(e) {
            if (e.target.closest('.workshop-details')) {
                const workshopId = parseInt(e.target.closest('.workshop-details').getAttribute('data-workshop-id'));
                const workshop = workshops.find(w => w.id === workshopId);
                
                if (workshop) {
                    showWorkshopModal(workshop);
                }
            }
        });

        modalClose.addEventListener('click', closeWorkshopModal);
        workshopModal.querySelector('.modal-overlay').addEventListener('click', closeWorkshopModal);

        // Functions
        function filterWorkshops() {
            const categoryValue = categoryFilter.value;
            const levelValue = levelFilter.value;
            const formatValue = formatFilter.value;
            const searchValue = searchInput.value.toLowerCase();
            
            filteredWorkshops = workshops.filter(workshop => {
                const matchesCategory = categoryValue === 'all' || workshop.category === categoryValue;
                const matchesLevel = levelValue === 'all' || workshop.level === levelValue;
                const matchesFormat = formatValue === 'all' || workshop.format === formatValue;
                const matchesSearch = 
                    workshop.title.toLowerCase().includes(searchValue) ||
                    workshop.excerpt.toLowerCase().includes(searchValue) ||
                    workshop.instructor.name.toLowerCase().includes(searchValue);
                
                return matchesCategory && matchesLevel && matchesFormat && matchesSearch;
            });
            
            visibleWorkshops = 6;
            renderWorkshops();
            
            // Show/hide load more button
            loadMoreBtn.style.display = filteredWorkshops.length > visibleWorkshops ? 'inline-block' : 'none';
        }

        function renderWorkshops() {
            workshopsGrid.innerHTML = '';
            
            const workshopsToShow = filteredWorkshops.slice(0, visibleWorkshops);
            
            workshopsToShow.forEach(workshop => {
                const workshopDate = new Date(workshop.date);
                const formattedDate = workshopDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                });
                
                const startTime = "10:00 AM"; // In a real app, this would come from data
                const endTime = new Date(workshopDate.getTime() + workshop.duration * 60 * 60 * 1000)
                    .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                
                const workshopCard = document.createElement('div');
                workshopCard.className = 'workshop-card glass-card animate-on-scroll';
                workshopCard.innerHTML = `
                    <div class="workshop-badge">${workshop.category === 'web' ? 'Web Dev' : 
                    workshop.category === 'mobile' ? 'Mobile' : 
                    workshop.category === 'data' ? 'Data' : 
                    workshop.category === 'ai' ? 'AI/ML' : 
                    workshop.category === 'cloud' ? 'Cloud' : 
                    workshop.category === 'cyber' ? 'Security' : 
                    workshop.category === 'design' ? 'Design' : 'IoT'}</div>
                    <div class="workshop-image">
                        <img src="assets/images/workshops/${workshop.image}" alt="${workshop.title}">
                    </div>
                    <div class="workshop-content">
                        <div class="workshop-date">
                            <i class="far fa-calendar-alt"></i>
                            ${formattedDate} • ${startTime} - ${endTime}
                        </div>
                        <h3 class="workshop-title">${workshop.title}</h3>
                        <div class="workshop-instructor">
                            <img src="assets/images/instructors/${workshop.instructor.image}" alt="${workshop.instructor.name}">
                            <span>${workshop.instructor.name}</span>
                        </div>"}
                        <p class="workshop-excerpt">${workshop.excerpt}</p>
                        <div class="workshop-meta">
                            <span class="workshop-meta-item">
                                <i class="fas fa-signal"></i>
                                ${workshop.level.charAt(0).toUpperCase() + workshop.level.slice(1)}
                            </span>
                            <span class="workshop-meta-item">
                                <i class="fas fa-${workshop.format === 'in-person' ? 'map-marker-alt' : 
                                workshop.format === 'online' ? 'laptop' : 'sync'}"></i>
                                ${workshop.format === 'in-person' ? 'In-Person' : 
                                workshop.format === 'online' ? 'Online' : 'Hybrid'}
                            </span>
                            <span class="workshop-meta-item">
                                <i class="fas fa-users"></i>
                                ${workshop.seats - workshop.enrolled} seats left
                            </span>
                        </div>
                        <div class="workshop-actions">
                            <div class="workshop-price ${workshop.price === 0 ? 'free' : ''}">
                                ${workshop.price === 0 ? 'FREE' : `$${workshop.price}`}
                            </div>
                            <button class="button primary-button workshop-details" data-workshop-id="${workshop.id}">
                                Details
                            </button>
                        </div>
                    </div>
                `;
                
                workshopsGrid.appendChild(workshopCard);
            });
            
            // Animate workshop cards
            gsap.utils.toArray('.workshop-card').forEach((card, i) => {
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

        function showWorkshopModal(workshop) {
            const modalBody = document.querySelector('.modal-body');
            const workshopDate = new Date(workshop.date);
            const formattedDate = workshopDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            
            const startTime = "10:00 AM"; // In a real app, this would come from data
            const endTime = new Date(workshopDate.getTime() + workshop.duration * 60 * 60 * 1000)
                .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            
            modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="assets/images/workshops/${workshop.image}" alt="${workshop.title}">
                </div>
                <div class="modal-details">
                    <h2>${workshop.title}</h2>
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
                            <i class="fas fa-signal"></i>
                            ${workshop.level.charAt(0).toUpperCase() + workshop.level.slice(1)}
                        </div>
                        <div class="modal-meta-item">
                            <i class="fas fa-${workshop.format === 'in-person' ? 'map-marker-alt' : 
                            workshop.format === 'online' ? 'laptop' : 'sync'}"></i>
                            ${workshop.format === 'in-person' ? 'In-Person' : 
                            workshop.format === 'online' ? 'Online' : 'Hybrid'}
                        </div>
                        <div class="modal-meta-item">
                            <i class="fas fa-users"></i>
                            ${workshop.enrolled}/${workshop.seats} enrolled
                        </div>
                        <div class="modal-meta-item">
                            <i class="fas fa-tag"></i>
                            ${workshop.category === 'web' ? 'Web Development' : 
                            workshop.category === 'mobile' ? 'Mobile Development' : 
                            workshop.category === 'data' ? 'Data Science' : 
                            workshop.category === 'ai' ? 'AI & Machine Learning' : 
                            workshop.category === 'cloud' ? 'Cloud Computing' : 
                            workshop.category === 'cyber' ? 'Cybersecurity' : 
                            workshop.category === 'design' ? 'UI/UX Design' : 'IoT'}
                        </div>
                    </div>
                    
                    <div class="modal-description">
                        <h3>About This Workshop</h3>
                        <p>${workshop.description}</p>
                        
                        <h3>What You'll Learn</h3>
                        <ul>
                            ${workshop.curriculum.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        
                        <h3>Requirements</h3>
                        <ul>
                            ${workshop.requirements.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-schedule">
                        <h3>Schedule</h3>
                        ${workshop.schedule.map(item => `
                            <div class="schedule-item">
                                <div class="schedule-time">${item.time}</div>
                                <div class="schedule-activity">${item.activity}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="modal-instructor">
                        <h3>About the Instructor</h3>
                        <div class="instructor-profile">
                            <img src="assets/images/instructors/${workshop.instructor.image}" alt="${workshop.instructor.name}" class="instructor-image">
                            <div class="instructor-info">
                                <h4>${workshop.instructor.name}</h4>
                                <div class="instructor-title">${workshop.instructor.title}</div>
                                <div class="instructor-social">
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fas fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="button primary-button">Register Now</button>
                        <button class="button secondary-button">Add to Calendar</button>
                    </div>
                </div>
            `;
            
            // Show modal
            workshopModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeWorkshopModal() {
            workshopModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // GSAP Animations
        gsap.from('.workshops-hero .hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
        
        gsap.from('.workshops-hero .hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.2,
            ease: 'power2.out'
        });
        
        gsap.from('.filter-controls', {
            scrollTrigger: {
                trigger: '.workshops-filters',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
        
        gsap.from('.workshop-cta .cta-content', {
            scrollTrigger: {
                trigger: '.workshop-cta',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
    });