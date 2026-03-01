export const portfolioData = {
  hero: {
    name: "Chandru S L",
    title: "UI UX Designer | Data Analyst | AI Developer",
    tagline: "Final-year B.Tech engineer bringing ideas to life through intuitive design, data-driven insights, and scalable AI applications.",
    availability: "Available for opportunities · 2026",
    cta_primary: { label: "View Projects", link: "#projects" },
    cta_secondary: { label: "Get in Touch", link: "#contact" },
    stats: [
      { value: "4+", label: "Projects" },
      { value: "82%", label: "B.Tech Score" },
      { value: "6+", label: "Certifications" },
    ],
  },

  about: {
    bio: [
      "I am a versatile tech enthusiast specializing in Artificial Intelligence & Data Science at KGiSL Institute of Technology (graduating May 2026). My work sits at the intersection of beautiful user experiences, deep data analytics, and intelligent machine learning systems.",
      "As a UI/UX Designer, I focus on crafting pixel-perfect, accessible, and user-centric interfaces. As a Data Analyst and AI Developer, I build robust pipelines that cut estimation errors and optimize real-world processes—like a constraint-solving timetable generator with 100% conflict-free output.",
      "Beyond coding, I am an active hackathon leader, peer mentor, and hold a Design Patent registered with the Government of India. I thrive on bridging the gap between complex backend logic and seamless frontend design."
    ],
    details: {
      location: "Coimbatore, Tamil Nadu, India",
      degree: "B.Tech AI & Data Science · May 2026",
      email: "chandruselvarsu@gmail.com",
      phone: "+91 9750462204",
      github: "https://github.com/chandruSL",
      linkedin: "https://linkedin.com/in/chandru-sl",
      languages: "Tamil (Native) · English (Professional)",
    },
  },

  skills: {
    Frontend: ["React.js", "HTML", "CSS", "JavaScript", "Figma"],
    "Backend & Databases": ["Python", "Flask", "SQL", "MongoDB"],
    "AI / ML": ["Machine Learning", "Pandas", "NumPy", "Jupyter Notebook", "Gen-AI", "Prompt Engineering"],
    "DevOps & Tools": ["Git", "GitHub", "Jenkins", "Linux", "AWS", "Power BI", "Excel"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Teamwork", "Time Management", "Accountability"],
  },

  projects: [
    {
      id: 1,
      title: "AI-Based Crop Prediction & Recommendation",
      category: "AI · Machine Learning",
      description: "ML-based crop yield prediction system using historical crop and weather data with high accuracy and reduced estimation errors.",
      highlights: [
        "88–92% prediction accuracy",
        "35% reduction in yield estimation errors",
        "Data cleaning, feature selection, model training & evaluation",
      ],
      tech_stack: ["React.js", "Python", "Jupyter Notebook", "Machine Learning"],
    },
    {
      id: 2,
      title: "AI-Based Class Timetable Generator",
      category: "AI · Optimization",
      description: "Automated timetable generator using constraint satisfaction, backtracking algorithms, and scheduling heuristics.",
      highlights: [
        "100% conflict-free timetable generation",
        "70% reduction in manual scheduling effort",
        "Handles faculty availability and classroom allocation",
      ],
      tech_stack: ["React.js", "Python", "API", "Algorithms"],
    },
    {
      id: 3,
      title: "Bus Smart App — College Bus Tracker",
      category: "UI/UX · UI Design",
      description: "Real-time inter-district bus schedule web app featuring a modern, responsive UI design.",
      highlights: [
        "Less than 2-second user flow completion",
        "50% reduction in commuter planning time",
        "Clean administrative dashboard design",
      ],
      tech_stack: ["Figma"],
    },
    {
      id: 4,
      title: "A2CL Flight Booking Application UI",
      category: "UI/UX · UI Design",
      description: "Complete UI design for a flight booking application with clean user flows and a responsive layout.",
      highlights: [
        "Responsive, accessible design",
        "Clean user flow and intuitive interaction",
      ],
      tech_stack: ["Figma"],
    },
    {
      id: 5,
      title: "Nyaya: AI-Based Legal Assistant",
      category: "AI · Full-Stack",
      description: "AI-powered legal assistant designed to accelerate document analysis and provide intelligent query resolution.",
      highlights: [
        "Contextual question-answering for legal documents",
        "Automated document processing and insight generation",
        "Scalable database backend for efficient data retrieval"
      ],
      tech_stack: ["React.js", "Python", "SQL"],
    },
  ],

  experience: [
    {
      role: "React.js Developer Intern",
      company: "Knovative Technology",
      location: "Coimbatore",
      duration: "Aug 2024 – Sep 2024",
      certificate: "/certs/Knovative tech Internship - 16_9_24 to 16_10_24.pdf",
      responsibilities: [
        "Built a responsive Bus Ticket Booking App using React.js with component-based architecture",
        "Implemented state management, form handling, and UI debugging",
        "Used Git for version control in collaborative development workflows",
        "Gained hands-on experience in real-world deployment practices",
      ],
    },
  ],

  certifications: [
    { title: "Version Control System", issuer: "Atlassian", date: "Mar 2025", certificate: "/cert-git.pdf" },
    { title: "Jenkins for Beginners", issuer: "KodeKloud", date: "Apr 2025", certificate: "/certs/jenkins for beginners.pdf" },
    { title: "Introduction to Linux", issuer: "The Linux Foundation", date: "Feb 2025", certificate: "/certs/Linux for beginners with Hands-on labs.pdf" },
    { title: "Hackathon 2025", issuer: "OASYS Institute of Technology", date: "Feb 2025", certificate: "/certs/OASYS Hackathon - 7_2_25.jpg" },
    { title: "Introduction to Git & GitHub", issuer: "Infosys Springboard", date: "2024", certificate: "/certs/introduction to git and github.pdf" },
    { title: "Ethical AI", issuer: "Infosys Springboard", date: "2024", certificate: "/certs/chandru-infosys-ethical AI.pdf" },
    { title: "Google UX Design Certificate", issuer: "Google", date: "2024", certificate: "/certs/uiux certificate.pdf" },
    { title: "AWS DeepRacer 3.0 League", issuer: "AWS & KGiSL Institute", date: "Apr 2024", certificate: "/certs/Deep racer 3.0 - 28_4_24" },
    { title: "Idea Spear 2024", issuer: "Park Institute of Technology", date: "Oct 2024", certificate: "/certs/Park college - Idea Sphere - 22_10_24.jpg" },
    { title: "Design Patent Registration", issuer: "Patent Office, Government of India", date: "2024", certificate: "/certs/the patent office.pdf" },
  ],

  achievements: [
    {
      year: "2025",
      event: "Hackathon 2025",
      organization: "OASYS Institute of Technology, Trichy",
      role: "Team Lead",
      description: "Led Gen-AI model training and prompt engineering in a 3-member team",
      certificate: "/certs/OASYS Hackathon - 7_2_25.jpg"
    },
    {
      year: "2024",
      event: "AWS DeepRacer 3.0 League",
      organization: "KGiSL Institute of Technology",
      role: "Model Trainer",
      description: "Trained autonomous car driving prototype on AWS Cloud in a 3-member team",
      certificate: "/certs/Deep racer 3.0 - 28_4_24"
    },
    {
      year: "2024",
      event: "Idea Spear 2024",
      organization: "Park Institute of Technology, Coimbatore",
      role: "Presenter",
      description: "Presented Women Safety System concept — contributed to idea validation and system design",
      certificate: "/certs/Park college - Idea Sphere - 22_10_24.jpg"
    },
    {
      year: "2023",
      event: "PyExpo 2023",
      organization: "KGiSL Institute of Technology",
      role: "Mentor",
      description: "Mentored juniors on Number Plate Detection System design and implementation",
    },
    {
      year: "2022",
      event: "PyExpo 2022",
      organization: "KGiSL Institute of Technology",
      role: "Frontend Developer",
      description: "Built front-end of College Out-pass System as part of a 4-member team",
    },
  ],

  contact: {
    heading: "Get in Touch",
    subtext: "Open to AI Developer roles, internships, and interesting collaborations. Let's build something intelligent together.",
    email: "chandruselvarsu@gmail.com",
    phone: "+91 9750462204",
    linkedin: "https://linkedin.com/in/chandru-sl",
    github: "https://github.com/chandruSL",
  },
};
