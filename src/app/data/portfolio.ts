export const profile = {
  name: "Faheem Ahmed",
  title: "Mobile App Engineer (Flutter)",
  location: "Karachi, Pakistan",
  phone: "+92 3033083494",
  email: "faheemahmed.engineer@gmail.com",
  linkedin: "https://www.linkedin.com/in/faheem-ahmed-890ba51a1/",
  github: "https://github.com/fahim-Uni",
  image: "/p.jpg",
  summary:
    "Flutter Mobile Engineer with 3 years of experience building and shipping production mobile applications and pixel-perfect UI implementation. Expert in converting complex Figma designs into scalable mobile architectures. Proven track record in real-time tracking, offline-first functionality, and managing end-to-end app deployment for platforms serving 10,000+ users.",
  about: [
    "I'm a Flutter Mobile Engineer based in Karachi, Pakistan, with 3 years of hands-on experience building and shipping production-grade mobile applications. I specialize in translating complex Figma designs into pixel-perfect, scalable mobile architectures that deliver seamless user experiences.",
    "My expertise spans the full mobile development lifecycle — from architecture and state management with Bloc/GetX to real-time tracking, offline-first functionality, and end-to-end app deployment on both the Play Store and App Store. I've built products serving 10,000+ users across corporate mobility, e-commerce, and social rewards platforms.",
    "Currently working as an Analyst Software Engineer at SNL Data Pvt Ltd, I focus on building robust Flutter applications with clean architecture, RESTful API integration, and real-time capabilities. I'm passionate about writing clean, maintainable code and constantly exploring new tools and patterns to deliver better products.",
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "10K+", label: "App Downloads" },
    { value: "4+", label: "Production Apps" },
  ],
};

export const experiences = [
  {
    title: "Analyst Software Engineer",
    company: "SNL Data Pvt Ltd",
    logo: "/text_a_logo.jpg",
    location: "Karachi",
    period: "Sep 2023",
    bullets: [
      "Built and deployed the BusCaro Passenger App using Flutter, a B2B mobility platform for corporate commuters featuring real-time tracking and payment integration (10,000+ downloads).",
      "Developed the BusCaro Captain App using Native Android (Kotlin), Hilt, and Room Database for driver operations and live trip updates (1,000+ downloads).",
      "Reduced Google Maps API usage by shifting route visualization and place search features.",
      "Implemented distance-based real-time location updates (~50m threshold) using Pusher to reduce unnecessary tracking events and improve battery efficiency.",
      "Built offline-first functionality with local storage and background synchronization for reliable app behavior in low-connectivity environments.",
      "Worked on end-to-end mobile app development from architecture to production deployment.",
    ],
  },
  {
    title: "Junior Flutter Developer",
    company: "Squarenex Technology Pvt Limited",
    logo: "/squarenex_logo.jpg",
    location: "Lahore",
    period: "Dec 2022 – August 2023",
    bullets: [
      "Developed multiple mobile applications using Flutter, integrating Firebase services and RESTful APIs for product and data management.",
      "Built and maintained Carry Mastery, a social-media-style application featuring Firebase Authentication, Cloud Firestore, and push notification functionality for real-time user engagement.",
      "Successfully delivered and deployed 2 production-ready mobile applications within 12 months, ensuring smooth release cycles and post-deployment stability.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Dart", "SQL","React.js","Next.js","HTML","CSS","Basic Java"],
  },
  {
    category: "Mobile Development",
    skills: ["Flutter (Cross-platform)", "Pixel-Perfect UI", "Material Design"],
  },
  {
    category: "Architecture & State Management",
    skills: ["MVC", "Clean Architecture", "Repository Pattern", "Bloc", "GetX"],
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "SQLite (Isar)", "Firebase Firestore","Shared Preference"],
  },
  {
    category: "Networking & Backend",
    skills: ["RESTful APIs", "JSON", "OAuth", "Pusher", "Push Notifications (FCM)", "Payment Gateway Integration"],
  },
  {
    category: "Maps & Location",
    skills: ["Google Maps SDK", "Real-time Location Tracking"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Xcode", "Firebase Console", "Play Console", "App Store Connect", "Git / GitHub", "Postman", "Android Studio", "VS Code"],
  },
];

export interface ProjectLink {
  playStore?: string;
  appStore?: string;
  website?: string;
}

export interface Project {
  name: string;
  slug: string;
  platform: ("android" | "ios" | "web")[];
  period: string;
  description: string;
  details: string;
  images: string[];
  links: ProjectLink;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "BusCaro Passenger App",
    slug: "buscaro-passenger",
    platform: ["android", "ios"],
    period: "Sep 2023",
    description: "Corporate mobility application with real-time tracking and payment integration serving 10,000+ users.",
    details: "Built and deployed the BusCaro Passenger App using Flutter, a B2B mobility platform for corporate commuters. Features include real-time GPS tracking, secure payment gateway integration, route optimization, and a seamless booking experience. The app serves 10,000+ corporate users with offline-first functionality and background synchronization for reliable performance in low-connectivity environments.",
    images: ["/projects/buscaro-passenger-1.jpg", "/projects/buscaro-passenger-2.jpg"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.buscaro.passenger",
      appStore: "https://apps.apple.com/app/buscaro-passenger/id123456789",
    },
    tags: ["Flutter", "Real-time", "Maps", "Payments"],
  },
  {
    name: "BusCaro Captain App",
    slug: "buscaro-captain",
    platform: ["android"],
    period: "Sep 2023",
    description: "Driver application with live location tracking, optimized update handling, and trip management for 1,000+ users.",
    details: "Developed the BusCaro Captain App using Native Android (Kotlin) with Hilt and Room Database. The app enables drivers to manage trips, receive live route updates, and communicate with passengers. Implemented distance-based real-time location updates (~50m threshold) using Pusher to reduce unnecessary tracking events and improve battery efficiency.",
    images: ["/projects/buscaro-captain-1.jpg"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.buscaro.captain",
    },
    tags: ["Flutter", "GPS", "Real-time", "Pusher"],
  },
  {
    name: "BusCaro Portal",
    slug: "buscaro-portal",
    platform: ["web"],
    period: "2023",
    description: "Web-based administration and management portal for the BusCaro ecosystem. Provides trip monitoring, user management, reporting, and operational oversight tools.",
    details: "A comprehensive web portal built with React.js for managing the BusCaro mobility ecosystem. Features include real-time trip monitoring, user management dashboards, detailed reporting and analytics, fleet management, and operational oversight tools for administrators.",
    images: ["/projects/buscaro-portal-1.jpg"],
    links: {
      website: "https://portal.buscaro.com",
    },
    tags: ["React.js", "Dashboard", "Management"],
  },
  {
    name: "Jaib App",
    slug: "jaib-app",
    platform: ["android"],
    period: "2024",
    description: "Social media and rewards platform where users watch advertisements, earn wallet rewards, and engage with sponsored campaigns across mobile and web experiences.",
    details: "A social media and rewards platform built with Flutter for mobile and React.js for the web portal. Users watch advertisements, earn wallet rewards, and engage with sponsored campaigns. Features include Firebase Authentication, Cloud Firestore, push notifications, and a rewards-based engagement system.",
    images: ["/projects/jaib-app-1.jpg"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.jaib.app",
      website: "https://jaib.app",
    },
    tags: ["Flutter", "Wallet", "Rewards"],
  },{
    name: "Jaib Portal",
    slug: "jaib-app",
    platform: ["web"],
    period: "2024",
    description: "Social media and rewards platform where users watch advertisements, earn wallet rewards, and engage with sponsored campaigns across mobile and web experiences.",
    details: "A social media and rewards platform built with Flutter for mobile and React.js for the web portal. Users watch advertisements, earn wallet rewards, and engage with sponsored campaigns. Features include Firebase Authentication, Cloud Firestore, push notifications, and a rewards-based engagement system.",
    images: ["/projects/jaib-app-1.jpg"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.jaib.app",
      website: "https://jaib.app",
    },
    tags: ["Flutter", "Wallet", "Rewards"],
  },
  {
    name: "Market App",
    slug: "market-app",
    platform: ["android","ios"],
    period: "2023",
    description: "E-commerce application with payment integration and API-driven product catalog.",
    details: "A full-featured e-commerce mobile application built with Flutter featuring a comprehensive product catalog, shopping cart, secure payment gateway integration, order tracking, and user account management. The app communicates with a RESTful API for product data and order processing.",
    images: ["/projects/market-app-1.jpg"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.market.app",
    },
    tags: ["Flutter", "E-commerce", "Payments"],
  },
  {
    name: "NETS4U ERP",
    slug: "nets4u-erp",
    platform: ["web"],
    period: "2024",
    description: "Comprehensive ERP system for managing inventory, warehouses, sales, orders, suppliers, customers, and business operations through a centralized platform.",
    details: "A comprehensive ERP system built with React.js for managing end-to-end business operations. Modules include inventory management, warehouse operations, sales tracking, order processing, supplier management, customer relationship management, and centralized business analytics and reporting.",
    images: ["/projects/nets4u-erp-1.jpg"],
    links: {
      website: "https://nets4u.com",
    },
    tags: ["React.js", "ERP", "Inventory"],
  },
  {
    name: "DesolLabs Web",
    slug: "desollabs-web",
    platform: ["web"],
    period: "2024",
    description: "Corporate website built with Next.js focused on performance, responsiveness, SEO optimization, and modern user experience.",
    details: "A corporate website built with Next.js featuring server-side rendering for optimal performance, fully responsive design across all devices, SEO optimization with meta tags and structured data, and a modern, engaging user experience with smooth animations and transitions.",
    images: ["/projects/desollabs-web-1.jpg"],
    links: {
      website: "https://desollabs.com",
    },
    tags: ["Next.js", "SEO", "Responsive"],
  },
];

export const education = [
  {
    degree: "M.E. Software Engineering",
    institution: "NED University of Engineering & Technology",
    location: "Karachi, Pakistan",
    period: "Aug 2025 – Current",
    status: "In Progress",
  },
  {
    degree: "B.E. Computer Systems Engineering",
    institution: "Mehran University of Engineering & Technology",
    location: "Jamshoro, Pakistan",
    period: "Oct 2018 – Dec 2022",
    status: "Completed",
  },
];

export const certifications = [
  { name: "Microsoft Office Specialist", date: "Dec 2020" },
  { name: "Professional Development Participant — Pakistan Engineering Board (PEB)", date: "Nov 2021" },
  { name: "Trainee Android App Developer — BBSHRRDB", date: "Sep 2022" },
  { name: "Event Participant — GitHub Community", date: "Nov 2018" },
  { name: "MS Office — Super Computer Systems", date: "Jun 2017" },
];

export const awards = [
  { name: "MUTA Merit Scholarship (MUET)", date: "Jan 2019" },
  { name: "Ehsaas Undergraduate Scholarship (HEC)", date: "Dec 2019" },
  { name: "1st Position — Mathematics Competition", date: "Mar 2018" },
  { name: "2nd Position — Science Exhibition", date: "Aug 2018" },
];

export const languages = [
  { lang: "Sindhi", level: "Native" },
  { lang: "Urdu", level: "Fluent" },
  { lang: "English", level: "Proficient" },
];

export const references = [
  {
    name: "Dr. Adnan Ashraf",
    role: "Professor, MUET",
    email: "adnan.arain@faculty.muet.edu.pk",
    phone: "+92 300 0221360",
  },
  {
    name: "Basim Afzal",
    role: "Colleague",
    email: "basimafzal65@gmail.com",
    phone: "+92 343 3499229",
  },
];
