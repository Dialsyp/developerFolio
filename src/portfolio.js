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
  title: "Bonjour à tous, je suis Syphax ",
  subTitle: emoji(
    "Développeur Full-Stack passionné par le DevOps et l’automatisation. J’intègre conteneurisation, CI/CD et infrastructure as code dans mes projets pour optimiser les processus de développement et de déploiement."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
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
  title: "Ce que je fais",
  subTitle: "FULL-STACK DEVELOPER avec un fort intérêt pour DevOps & Cloud",
  skills: [
    emoji("Mise en place de pipelines CI/CD (GitHub Actions, Jenkins)"),
    emoji("Conteneurisation avec Docker, orchestration avec Kubernetes"),
    emoji("Automatisation d'infrastructure avec Ansible et Terraform"),
    emoji("Supervision avec Prometheus, Grafana, Alertmanager"),
    emoji("Intégration d’authentification SSO (Azure AD)")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
  { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
  { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
  { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
  { skillName: "NestJS", fontAwesomeClassname: "fas fa-code" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-project-diagram" },
  { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
  { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
  { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "CESI École d’Ingénieurs",
      logo: require("./assets/images/cesi.jpg"), 
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
      role: "Assistant Concepteur Développeur (alternance)",
      company: "Maisons & Cités",
      companylogo: require("./assets/images/m&C.jfif"),
      date: "Nov 2023 – Oct 2025",
      desc: "Développement de plusieurs solutions métiers et DevOps.",
      descBullets: [
        "Microservices React.js + Spring Boot, SSO Azure AD",
        "Conteneurisation Docker + orchestration Traefik",
        "Automatisation de reporting avec Power Automate"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  display: true // Set false to hide this section, defaults to true
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
