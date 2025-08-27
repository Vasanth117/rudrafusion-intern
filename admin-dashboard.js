// Dummy Data for Testing
const applications =[
    {
        "name": "Sundar Arunachalam",
        "email": "sundar.arunachalam0@example.com",
        "university": "Sathyabama University",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Nithya S",
        "email": "nithya.s1@example.com",
        "university": "Karunya University",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Prakash Vel",
        "email": "prakash.vel2@example.com",
        "university": "Karunya University",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "approved",
        "appliedOn": "2025-08-15"
    },
    {
        "name": "Sowmiya Venkatesh",
        "email": "sowmiya.venkatesh3@example.com",
        "university": "Bharathiar University",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Sowmiya Venkatesh",
        "email": "sowmiya.venkatesh4@example.com",
        "university": "VIT Vellore",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Meena Kumar",
        "email": "meena.kumar5@example.com",
        "university": "SRM University",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Meena Selvam",
        "email": "meena.selvam6@example.com",
        "university": "SRM University",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-16"
    },
    {
        "name": "Janani Selvam",
        "email": "janani.selvam7@example.com",
        "university": "VIT Vellore",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-15"
    },
    {
        "name": "Subha M",
        "email": "subha.m8@example.com",
        "university": "SRM University",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Divya R",
        "email": "divya.r9@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Meena M",
        "email": "meena.m10@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-12"
    },
    {
        "name": "Deepa Sankar",
        "email": "deepa.sankar11@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "pending",
        "appliedOn": "2025-08-13"
    },
    {
        "name": "Revathi Palanisamy",
        "email": "revathi.palanisamy12@example.com",
        "university": "Karunya University",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "pending",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Revathi Pandian",
        "email": "revathi.pandian13@example.com",
        "university": "VIT Vellore",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "approved",
        "appliedOn": "2025-08-27"
    },
    {
        "name": "Ravi Arunachalam",
        "email": "ravi.arunachalam14@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Sowmiya Kumar",
        "email": "sowmiya.kumar15@example.com",
        "university": "Sathyabama University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Anitha Selvam",
        "email": "anitha.selvam16@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "AI",
            "ML",
            "TensorFlow"
        ],
        "status": "approved",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Ramesh Sankar",
        "email": "ramesh.sankar17@example.com",
        "university": "VIT Vellore",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "approved",
        "appliedOn": "2025-08-15"
    },
    {
        "name": "Murugan Sankar",
        "email": "murugan.sankar18@example.com",
        "university": "SRM University",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Lakshmi Gopal",
        "email": "lakshmi.gopal19@example.com",
        "university": "Annamalai University",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "approved",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Manoj Selvam",
        "email": "manoj.selvam20@example.com",
        "university": "Annamalai University",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Divya Chidambaram",
        "email": "divya.chidambaram21@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-15"
    },
    {
        "name": "Ganesh Narayanan",
        "email": "ganesh.narayanan22@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Arun Arunachalam",
        "email": "arun.arunachalam23@example.com",
        "university": "PSG College of Technology",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-20"
    },
    {
        "name": "Manoj Narayanan",
        "email": "manoj.narayanan24@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Sowmiya Kumar",
        "email": "sowmiya.kumar25@example.com",
        "university": "Annamalai University",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Sundar Pandian",
        "email": "sundar.pandian26@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-16"
    },
    {
        "name": "Uma Krishnan",
        "email": "uma.krishnan27@example.com",
        "university": "Periyar University",
        "skills": [
            "AI",
            "ML",
            "TensorFlow"
        ],
        "status": "approved",
        "appliedOn": "2025-08-23"
    },
    {
        "name": "Ramesh M",
        "email": "ramesh.m28@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "approved",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Gowtham Chidambaram",
        "email": "gowtham.chidambaram29@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Arun Selvam",
        "email": "arun.selvam30@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Janani Sankar",
        "email": "janani.sankar31@example.com",
        "university": "Bharathiar University",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "approved",
        "appliedOn": "2025-08-16"
    },
    {
        "name": "Hari Krishnan",
        "email": "hari.krishnan32@example.com",
        "university": "PSG College of Technology",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "pending",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Sathish Venkatesh",
        "email": "sathish.venkatesh33@example.com",
        "university": "PSG College of Technology",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Uma Raj",
        "email": "uma.raj34@example.com",
        "university": "PSG College of Technology",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "pending",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Manoj Vel",
        "email": "manoj.vel35@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "pending",
        "appliedOn": "2025-08-24"
    },
    {
        "name": "Ravi Shree",
        "email": "ravi.shree36@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "approved",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Balaji Arunachalam",
        "email": "balaji.arunachalam37@example.com",
        "university": "Sathyabama University",
        "skills": [
            "Python",
            "Django",
            "ML"
        ],
        "status": "approved",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Subha R",
        "email": "subha.r38@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Priya Gopal",
        "email": "priya.gopal39@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Arun Arunachalam",
        "email": "arun.arunachalam40@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-20"
    },
    {
        "name": "Lakshmi Perumal",
        "email": "lakshmi.perumal41@example.com",
        "university": "Anna University",
        "skills": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        "status": "approved",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Nithya Vel",
        "email": "nithya.vel42@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "pending",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Revathi S",
        "email": "revathi.s43@example.com",
        "university": "Annamalai University",
        "skills": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        "status": "approved",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Prakash Vel",
        "email": "prakash.vel44@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Ramesh R",
        "email": "ramesh.r45@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-27"
    },
    {
        "name": "Sathish Gopal",
        "email": "sathish.gopal46@example.com",
        "university": "Periyar University",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Gowtham Lakshmi",
        "email": "gowtham.lakshmi47@example.com",
        "university": "Periyar University",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-23"
    },
    {
        "name": "Revathi Kumar",
        "email": "revathi.kumar48@example.com",
        "university": "Annamalai University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Deepa Shree",
        "email": "deepa.shree49@example.com",
        "university": "Annamalai University",
        "skills": [
            "AI",
            "ML",
            "TensorFlow"
        ],
        "status": "approved",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Hari Gopal",
        "email": "hari.gopal50@example.com",
        "university": "VIT Vellore",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Ramesh Raj",
        "email": "ramesh.raj51@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "pending",
        "appliedOn": "2025-08-16"
    },
    {
        "name": "Janani Gopal",
        "email": "janani.gopal52@example.com",
        "university": "Bharathiar University",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "pending",
        "appliedOn": "2025-08-20"
    },
    {
        "name": "Prakash R",
        "email": "prakash.r53@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-13"
    },
    {
        "name": "Meena Krishnan",
        "email": "meena.krishnan54@example.com",
        "university": "Sathyabama University",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Anitha Gopal",
        "email": "anitha.gopal55@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Subha Narayanan",
        "email": "subha.narayanan56@example.com",
        "university": "Madras Institute of Technology",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-24"
    },
    {
        "name": "Meena Mohan",
        "email": "meena.mohan57@example.com",
        "university": "VIT Vellore",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-21"
    },
    {
        "name": "Balaji Kumar",
        "email": "balaji.kumar58@example.com",
        "university": "Anna University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-20"
    },
    {
        "name": "Senthil Gopal",
        "email": "senthil.gopal59@example.com",
        "university": "Periyar University",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "pending",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Manoj Mohan",
        "email": "manoj.mohan60@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "pending",
        "appliedOn": "2025-08-20"
    },
    {
        "name": "Kavitha Raj",
        "email": "kavitha.raj61@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "AI",
            "ML",
            "TensorFlow"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-15"
    },
    {
        "name": "Vignesh S",
        "email": "vignesh.s62@example.com",
        "university": "PSG College of Technology",
        "skills": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        "status": "approved",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Manoj R",
        "email": "manoj.r63@example.com",
        "university": "VIT Vellore",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-20"
    },
    {
        "name": "Saravanan Gopal",
        "email": "saravanan.gopal64@example.com",
        "university": "Annamalai University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "pending",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Hari Raj",
        "email": "hari.raj65@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Hari Lakshmi",
        "email": "hari.lakshmi66@example.com",
        "university": "Karunya University",
        "skills": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        "status": "approved",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Arun Vel",
        "email": "arun.vel67@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "approved",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Subha R",
        "email": "subha.r68@example.com",
        "university": "Karunya University",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "pending",
        "appliedOn": "2025-08-12"
    },
    {
        "name": "Sundar M",
        "email": "sundar.m69@example.com",
        "university": "Bharathiar University",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "pending",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Priya Gopal",
        "email": "priya.gopal70@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "approved",
        "appliedOn": "2025-08-21"
    },
    {
        "name": "Murugan Palanisamy",
        "email": "murugan.palanisamy71@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "Kotlin",
            "Android",
            "Firebase"
        ],
        "status": "pending",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Bhuvana Selvam",
        "email": "bhuvana.selvam72@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-12"
    },
    {
        "name": "Ganesh Perumal",
        "email": "ganesh.perumal73@example.com",
        "university": "Annamalai University",
        "skills": [
            "Python",
            "Django",
            "ML"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Sundar M",
        "email": "sundar.m74@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Priya Gopal",
        "email": "priya.gopal75@example.com",
        "university": "Karunya University",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "approved",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Prakash Selvam",
        "email": "prakash.selvam76@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-24"
    },
    {
        "name": "Priya Palanisamy",
        "email": "priya.palanisamy77@example.com",
        "university": "SRM University",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "approved",
        "appliedOn": "2025-08-13"
    },
    {
        "name": "Bhuvana Narayanan",
        "email": "bhuvana.narayanan78@example.com",
        "university": "Madras Institute of Technology",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-15"
    },
    {
        "name": "Divya Narayanan",
        "email": "divya.narayanan79@example.com",
        "university": "Karunya University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "pending",
        "appliedOn": "2025-08-18"
    },
    {
        "name": "Divya Krishnan",
        "email": "divya.krishnan80@example.com",
        "university": "Karunya University",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "approved",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Ganesh Selvam",
        "email": "ganesh.selvam81@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Vignesh M",
        "email": "vignesh.m82@example.com",
        "university": "Periyar University",
        "skills": [
            "Python",
            "Django",
            "ML"
        ],
        "status": "pending",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Ramesh Arunachalam",
        "email": "ramesh.arunachalam83@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "PHP",
            "Laravel",
            "MySQL"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-19"
    },
    {
        "name": "Sathish Mohan",
        "email": "sathish.mohan84@example.com",
        "university": "SRM University",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-16"
    },
    {
        "name": "Arun Arunachalam",
        "email": "arun.arunachalam85@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "Swift",
            "iOS",
            "UI/UX"
        ],
        "status": "pending",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Meena Narayanan",
        "email": "meena.narayanan86@example.com",
        "university": "Amrita Vishwa Vidyapeetham",
        "skills": [
            "Cloud",
            "AWS",
            "DevOps"
        ],
        "status": "pending",
        "appliedOn": "2025-08-12"
    },
    {
        "name": "Gowtham Lakshmi",
        "email": "gowtham.lakshmi87@example.com",
        "university": "Periyar University",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-22"
    },
    {
        "name": "Bhuvana Palanisamy",
        "email": "bhuvana.palanisamy88@example.com",
        "university": "Sathyabama University",
        "skills": [
            "AI",
            "ML",
            "TensorFlow"
        ],
        "status": "pending",
        "appliedOn": "2025-08-27"
    },
    {
        "name": "Anitha Venkatesh",
        "email": "anitha.venkatesh89@example.com",
        "university": "Coimbatore Institute of Technology",
        "skills": [
            "Java",
            "Spring",
            "SQL"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-21"
    },
    {
        "name": "Karthik Narayanan",
        "email": "karthik.narayanan90@example.com",
        "university": "Anna University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "approved",
        "appliedOn": "2025-08-24"
    },
    {
        "name": "Senthil Krishnan",
        "email": "senthil.krishnan91@example.com",
        "university": "Annamalai University",
        "skills": [
            "JavaScript",
            "React",
            "CSS"
        ],
        "status": "approved",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Ramesh Krishnan",
        "email": "ramesh.krishnan92@example.com",
        "university": "Bharathiar University",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "pending",
        "appliedOn": "2025-08-21"
    },
    {
        "name": "Arun Arunachalam",
        "email": "arun.arunachalam93@example.com",
        "university": "SRM University",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "approved",
        "appliedOn": "2025-08-17"
    },
    {
        "name": "Hari Pandian",
        "email": "hari.pandian94@example.com",
        "university": "Hindustan Institute of Technology",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "pending",
        "appliedOn": "2025-08-27"
    },
    {
        "name": "Bhuvana Kumar",
        "email": "bhuvana.kumar95@example.com",
        "university": "Sathyabama University",
        "skills": [
            "C++",
            "DSA",
            "Algorithms"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-25"
    },
    {
        "name": "Arun Kumar",
        "email": "arun.kumar96@example.com",
        "university": "Madras Institute of Technology",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB"
        ],
        "status": "rejected",
        "appliedOn": "2025-08-16"
    },
    {
        "name": "Priya Venkatesh",
        "email": "priya.venkatesh97@example.com",
        "university": "VIT Vellore",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "pending",
        "appliedOn": "2025-08-14"
    },
    {
        "name": "Sathish Raj",
        "email": "sathish.raj98@example.com",
        "university": "Thiagarajar College of Engineering",
        "skills": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        "status": "approved",
        "appliedOn": "2025-08-26"
    },
    {
        "name": "Hari Lakshmi",
        "email": "hari.lakshmi99@example.com",
        "university": "Annamalai University",
        "skills": [
            "Data Science",
            "Pandas",
            "NumPy"
        ],
        "status": "approved",
        "appliedOn": "2025-08-23"
    }
]


// Global Variables
let currentPage = 1;
const itemsPerPage = 5;

// DOM Elements
const applicationsTableBody = document.getElementById("applicationsTableBody");
const pendingCount = document.getElementById("pendingCount");
const approvedCount = document.getElementById("approvedCount");
const rejectedCount = document.getElementById("rejectedCount");
const searchInput = document.getElementById("searchApplications");
const filterStatus = document.getElementById("filterStatus");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const currentPageDisplay = document.getElementById("currentPage");

const modal = document.getElementById("applicationModal");
const modalDetails = document.getElementById("applicationDetails");
const closeModalBtn = document.querySelector(".close-modal");

// Helper Functions
function renderCounts() {
    pendingCount.textContent = applications.filter(a => a.status === "pending").length;
    approvedCount.textContent = applications.filter(a => a.status === "approved").length;
    rejectedCount.textContent = applications.filter(a => a.status === "rejected").length;
}

function renderTable() {
    const searchTerm = searchInput.value.toLowerCase();
    const filter = filterStatus.value;

    let filteredApps = applications.filter(app => {
        const matchesSearch =
            app.name.toLowerCase().includes(searchTerm) ||
            app.email.toLowerCase().includes(searchTerm) ||
            app.university.toLowerCase().includes(searchTerm);
        const matchesFilter = filter === "all" || app.status === filter;
        return matchesSearch && matchesFilter;
    });

    const totalPages = Math.ceil(filteredApps.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedApps = filteredApps.slice(start, end);

    applicationsTableBody.innerHTML = "";
    paginatedApps.forEach((app, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${app.name}</td>
            <td>${app.email}</td>
            <td>${app.university}</td>
            <td>${app.skills.join(", ")}</td>
            <td><span class="status-badge status-${app.status}">${app.status}</span></td>
            <td>${app.appliedOn}</td>
            <td>
                <div class="action-buttons">
                    <button class="view-button" data-index="${applications.indexOf(app)}"><i class="fas fa-eye"></i></button>
                </div>
            </td>
        `;
        applicationsTableBody.appendChild(tr);
    });

    currentPageDisplay.textContent = currentPage;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Event Listeners
searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderTable();
});

filterStatus.addEventListener("change", () => {
    currentPage = 1;
    renderTable();
});

prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

nextPageBtn.addEventListener("click", () => {
    currentPage++;
    renderTable();
});

// Modal Functionality
applicationsTableBody.addEventListener("click", (e) => {
    if (e.target.closest(".view-button")) {
        const index = e.target.closest(".view-button").dataset.index;
        const app = applications[index];
        showModal(app);
    }
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
});

function showModal(app) {
    modalDetails.innerHTML = `
        <div class="app-detail">
            <h3>${app.name}</h3>
            <div class="detail-grid">
                <div class="detail-label">Email:</div><div class="detail-value">${app.email}</div>
                <div class="detail-label">University:</div><div class="detail-value">${app.university}</div>
                <div class="detail-label">Skills:</div><div class="detail-value">${app.skills.join(", ")}</div>
                <div class="detail-label">Status:</div><div class="detail-value">${app.status}</div>
                <div class="detail-label">Applied On:</div><div class="detail-value">${app.appliedOn}</div>
            </div>
        </div>
    `;
    modal.classList.add("active");
}

// Logout Button
document.getElementById("logoutButton").addEventListener("click", () => {
    alert("Logged out successfully!");
    // You can redirect to login page if needed
    // window.location.href = "login.html";
});

// Initial Render
renderCounts();
renderTable();
