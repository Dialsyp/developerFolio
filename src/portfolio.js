/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syphax Dial",
  title: "Bonjour à tous, je suis Syphax",
  subTitle: emoji(
    "Développeur Full-Stack avec une forte sensibilité DevOps, j’aime concevoir des solutions modernes où automatisation, conteneurisation et intégration continue sont au cœur des projets. J’ai à cœur de simplifier et fiabiliser les processus de développement et de déploiement, tout en restant curieux et ouvert aux nouvelles pratiques."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Laisser vide pour masquer le bouton
  displayGreeting: true // Mettre à false pour masquer cette section
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dialsyp",
  linkedin: "https://www.linkedin.com/in/syphaxdial/",
  gmail: "dialsyphax@gmail.com",
  // gitlab: "https://gitlab.com/dialsyphax",
  // facebook: "https://www.facebook.com/syphax.dial",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je sais faire",
  subTitle: "Développeur Full-Stack passionné par le DevOps, l’automatisation et le Cloud",

  // Compétences principales, adaptées de la section "À propos" et "Compétence" de ton CV
  skills: [
    "Mise en place et gestion de pipelines CI/CD (GitHub Actions, Jenkins, SonarQube)",
    "Conteneurisation et orchestration (Docker, Docker Compose, Docker Swarm, Kubernetes)",
    "Automatisation d'infrastructure (Ansible, Terraform)",
    "Supervision et monitoring (Prometheus, Grafana, Alertmanager)",
    "Intégration d’authentification SSO (Azure AD)",
    "Développement d’applications web en architecture microservices (Java, Spring Boot, Next.js, NestJS)",
    "Gestion et administration de bases de données (MySQL, PostgreSQL, MongoDB)",
    "Configuration de proxys et reverse-proxys (Nginx, Traefik, Apache2)",
    "Utilisation des systèmes Linux (Ubuntu) et Windows",
    "Développement low-code avec Power Platform et solutions Microsoft 365",
    "Méthodologies Agiles (Scrum, Kanban)"
  ],

  // Compétences logicielles et techniques, adaptées et enrichies selon ton CV
  devOpsSkills: [
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Apache2"},
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Caddy", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Grafana", fontAwesomeClassname: "fas fa-chart-line" },
    
  
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "Nginx", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Prometheus", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "SonarQube" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Traefik", fontAwesomeClassname: "fas fa-random" },
    { skillName: "Cypress" },
    { skillName: "Postman" },
    { skillName: "VirtualBox"},
    { skillName: "Vagrant"},


  ],

  devSkills : [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "JavaScript" },
    { skillName: "TypeScript" },
    { skillName: "Go" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "NestJS", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Expo" },
    { skillName: "Power BI" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Windows" },

    { skillName: ".NET" }
  ],

  display: true // Mettre à false pour masquer la section
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "CESI École d’Ingénieurs",
      logo: require("./assets/images/Logo_cesi_2022.png"),
      subHeader:
        "Manager en Architecture et Applications Logicielles des SI (alternance)",
      duration: "Nov 2023 - Oct 2025",
      desc: "Formation en architecture logicielle moderne, DevOps et sécurité des SI.",
      descBullets: [
        "Infrastructure CI/CD, Docker, Kubernetes, monitoring",
        "Cours avancés : IAM, pare-feux, audit réseau",
        "Méthodes Agile, cycle en V, gouvernance IT"
      ]
    },
    {
      schoolName: "Université de Rouen Normandie",
      logo: require("./assets/images/rouenUniv.jpg"),
      subHeader: "Licence en Informatique",
      duration: "Nov 2021 - Oct 2023",
      desc: "Formation orientée algorithmique, base de données et langages.",
      descBullets: [
        "Programmation : Java, C, Caml",
        "Mathématiques appliquées et projets collaboratifs"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "DevOps & Automatisation",
      progressPercentage: "80%" // Bonne maîtrise, mais toujours en apprentissage continu
    },
    {
      Stack: "Conteneurisation & Orchestration",
      progressPercentage: "75%" // Docker, Traefik, début Kubernetes
    },
    {
      Stack: "Backend (Java, Node.js)",
      progressPercentage: "70%" // Compétent, mais en approfondissement continu
    },
    {
      Stack: "Frontend (React / Next.js)",
      progressPercentage: "65%" // Tu as de l'expérience concrète, mais encore perfectible
    },
    {
      Stack: "Cloud & Systèmes",
      progressPercentage: "60%" // Bonne base sur Azure AD, Linux, supervision
    },
    {
      Stack: "Bases de données",
      progressPercentage: "60%" // Bonne polyvalence, usage professionnel
    },
    {
      Stack: "Programmation générale",
      progressPercentage: "55%" // Fondations solides, en amélioration continue
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Développeur Full-Stack / DevOps",
      company: "Maisons & Cités",
      companylogo: require("./assets/images/m&C.jfif"),
      date: "Nov 2023 – Oct 2025",
      desc: "Participation à la conception, au développement et à l’amélioration de solutions numériques, en intégrant des pratiques DevOps et des approches Full Stack.",
      descBullets: [
        "Interventions sur l’ensemble de la chaîne applicative, du front-end au back-end",
        "Mise en œuvre de processus d’automatisation et d’intégration continue",
        "Contribution à l’optimisation et à la sécurisation des environnements techniques",
        "Participation à l’évolution des architectures applicatives",
        "Collaboration avec différentes équipes pour garantir la qualité des livrables",
        "Veille et adaptation aux bonnes pratiques du développement et de l’automatisation",
        "Support technique et accompagnement dans la résolution de problématiques variées",
        "Participation à la gestion des cycles de vie des applications"
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle: "Quelques projets que j'ai réalisés",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Application de gestion de santé pour les entreprises",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: "Certifications techniques en cours de préparation dans l’environnement Microsoft Azure.",

  achievementsCards: [
    {
      title: "AZ-104: Microsoft Azure Administrator",
      subtitle:
        "Gestion des ressources, sécurité, identités et monitoring dans Azure.",
      image: require("./assets/images/microsoftLogo.jfif"), // Remplace par ton propre logo si besoin
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Détails de la certification",
          url: "https://learn.microsoft.com/fr-fr/certifications/exams/az-104/"
        }
      ]
    },
    {
      title: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      subtitle:
        "CI/CD, Infrastructure as Code (IaC), intégration et livraison continues dans un environnement Azure DevOps.",
      image: require("./assets/images/microsoftLogo.jfif"), // Même remarque ici
      imageAlt: "Microsoft Azure Logo",
      footerLink: [
        {
          name: "Détails de la certification",
          url: "https://learn.microsoft.com/fr-fr/certifications/exams/az-400/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle:
    "",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [

  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact 📞"),
  subtitle: "Disponible pour toute opportunité ou collaboration. N'hésitez pas à me contacter !",
  number: "+33 7 49 26 18 05",
  email_address: "dialsyphax@gmail.com",
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
