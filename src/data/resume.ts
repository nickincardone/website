export interface Resume {
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
  education: {
    school: string;
    date: string;
    degree: string;
    concentration: string;
  };
  experience: Array<{
    title: string;
    company: string;
    dates: string;
    collapsed: boolean;
    bullets: string[];
  }>;
  languages: Array<{
    name: string;
    subSkills?: string[];
  }>;
  skills?: Array<{
    name: string;
    subSkills?: string[];
  }>;
}

const resume = {
  contact: {
    email: "nickincardone@gmail.com",
    linkedIn: "https://www.linkedin.com/in/nickincardone",
    github: "https://github.com/nickincardone",
  },
  education: {
    school: "Georgia Institute of Technology",
    date: "12/2014",
    degree: "Bachelor of Science, Computer Science",
    concentration: "Focused on Data Science and Artificial Intelligence",
  },
  experience: [
    {
      title: "Senior Fullstack Engineer",
      company: "SBLive Sports",
      dates: "06/2020-09/2024",
      collapsed: false,
      bullets: [
        "Developed an internal admin portal to enable Athletic Directors to manage school, team, and roster data, using React.js on the frontend and a GraphQL API powered by Ruby on Rails.",
        "Contributed to the development of an iOS fan-facing application built with React Native, enhancing user engagement and expanding platform reach.",
        "Led the UI implementation of a major frontend overhaul, coordinating closely with design and backend teams to deliver a cohesive, modernized user experience.",
        "Owned the deployment and maintenance of the frontend platform, leveraging a hybrid architecture combining React and Rails.",
        "Spearheaded the development of new fan engagement features, including interactive game pick'em tracking and dynamic tournament brackets.",
      ],
    },
    {
      title: "Consulting Software Engineer",
      company: "Influur",
      dates: "06/2021-05/2023, 11/2023-08/2024",
      collapsed: false,
      bullets: [
        "Re-engaged to lead three high-impact initiatives across mobile and web platforms.",
        "Headed a major UI and data layer transformation in the Flutter mobile application to revamp how jobs were created, displayed, and managed by users.",
        "Implemented in-app purchases and subscription flows, integrating with both the Apple App Store and Google Play Store to enable monetization and manage user entitlements.",
        "Led the development of a new customer-facing web application using Next.js, bringing responsive design, server-side rendering, and performance optimization to the forefront.",
        "Joined as the third developer and played the lead role in evolving the product from a minimum viable product (MVP) to a fully functional, production-ready mobile application launched on the App Store, built using Flutter.",
        "Led a small team of five developers, driving code quality, implementing best practices, and ensuring consistent development standards across the codebase while working part-time.",
        "Architected and implemented a new backend system, migrating from a legacy PHP REST API to a modern TypeScript/Express/GraphQL stack, significantly improving scalability and developer experience.",
        "Designed and deployed the backend infrastructure on AWS, incorporating robust monitoring and alerting systems to enhance observability and accelerate issue resolution.",
        "Spearheaded DevOps automation initiatives to streamline deployment workflows and improve system reliability.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Home Depot",
      dates: "08/2015-08/2019",
      collapsed: false,
      bullets: [
        "2016 Employee of the Year for Store Operations Software (~200 employees).",
        "Served as technical lead for store returns, which handles ~$11 billion worth of returns a year. Led redesign of the system, moving away from ~2000 store boxes (with legacy Tomcat containers) into a centralized cloud architecture. Supported 20+ store mobile applications, including legacy applications in Backbone.js and newer ones in Angular.",
        "Led development for a labeling system upgrade. The upgrade was a centralized application that provided logging, alerts, and improved performance over previous in-store solutions. Reduced software footprint from installations on ~2000 stores to four centralized instances.",
        "Produced store-facing proof of concept projects, including digital labels, online pickup lockers, smart home experience, and faucet finder applications. Worked with several vendors to adapt their technologies to Home Depot infrastructure and practices. Developed mobile applications utilizing Cordova and Angular with Spring backends.",
        "Led a team of three developers to create the Store Supervisor tablet application. Designed and built a hybrid application from scratch with Ionic (Cordova), TypeScript/Angular, and a Sinatra backend.",
        "Took over a Tomcat-based Java project that required weekly war room calls and architected and implemented safeguards to prevent system failures.",
      ],
    },
    {
      title: "Web Developer",
      company: "Mother Nature Network",
      dates: "09/2014-08/2015",
      collapsed: true,
      bullets: [
        "Designed and built an in-house analytics dashboard, utilizing Django, PostgreSQL, and Angular.js.",
        "Migrated a large Drupal site to a Django back-end, including 1000+ articles of 20+ different types.",
        "Led complete redesign of our largest property (MNN.com) and built individualized widgets for advertising spaces.",
        "Maintained several web properties that accumulate approximately 30 million monthly views.",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Procur",
      dates: "05/2014-09/2014",
      collapsed: true,
      bullets: [
        "Helped develop a large-scale Node.js web application with an Angular.js front end from scratch in a remote startup environment.",
        "Created and implemented the application's mobile design.",
      ],
    },
  ],
  languages: [
    {
      name: "JavaScript",
      subSkills: ["React/React Native", "Next.js", "Node.js", "TypeScript"],
    },
    {
      name: "Dart",
      subSkills: ["Flutter"],
    },
    {
      name: "Ruby",
      subSkills: ["Ruby on Rails", "React Rails"],
    },
    {
      name: "Java",
      subSkills: ["Spring", "Tomcat"],
    },
    {
      name: "Python",
      subSkills: ["Django", "FastAPI"],
    },
    {
      name: "Perl",
    },
  ],
  skills: [
    {
      name: "Spoken Languages",
      subSkills: [
        "English (Native)",
        "Spanish (Conversational)",
        "French (Basic Proficiency)",
      ],
    },
    {
      name: "Mobile Development",
      subSkills: ["Flutter", "React Native", "Cordova", "Ionic"],
    },
    {
      name: "API and Database Design",
    },
    {
      name: "Cloud Architecture",
      subSkills: ["AWS"],
    },
    {
      name: "Legacy Code Improvement",
    },
  ],
};

export default resume;
