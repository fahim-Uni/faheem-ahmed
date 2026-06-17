module.exports = [
"[project]/src/app/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "awards",
    ()=>awards,
    "certifications",
    ()=>certifications,
    "education",
    ()=>education,
    "experiences",
    ()=>experiences,
    "languages",
    ()=>languages,
    "profile",
    ()=>profile,
    "projects",
    ()=>projects,
    "references",
    ()=>references,
    "skillGroups",
    ()=>skillGroups
]);
const profile = {
    name: "Faheem Ahmed",
    title: "Mobile App Engineer (Flutter)",
    location: "Karachi, Pakistan",
    phone: "+92 3033083494",
    email: "faheemahmed.engineer@gmail.com",
    linkedin: "https://www.linkedin.com/in/faheem-ahmed-890ba51a1/",
    github: "https://github.com/fahim-Uni",
    image: "/p.jpg",
    summary: "Flutter Mobile Engineer with 3 years of experience building and shipping production mobile applications and pixel-perfect UI implementation. Expert in converting complex Figma designs into scalable mobile architectures. Proven track record in real-time tracking, offline-first functionality, and managing end-to-end app deployment for platforms serving 10,000+ users.",
    about: [
        "I'm a Flutter Mobile Engineer based in Karachi, Pakistan, with 3 years of hands-on experience building and shipping production-grade mobile applications. I specialize in translating complex Figma designs into pixel-perfect, scalable mobile architectures that deliver seamless user experiences.",
        "My expertise spans the full mobile development lifecycle — from architecture and state management with Bloc/GetX to real-time tracking, offline-first functionality, and end-to-end app deployment on both the Play Store and App Store. I've built products serving 10,000+ users across corporate mobility, e-commerce, and social rewards platforms.",
        "Currently working as an Analyst Software Engineer at SNL Data Pvt Ltd, I focus on building robust Flutter applications with clean architecture, RESTful API integration, and real-time capabilities. I'm passionate about writing clean, maintainable code and constantly exploring new tools and patterns to deliver better products."
    ],
    stats: [
        {
            value: "3+",
            label: "Years Experience"
        },
        {
            value: "10K+",
            label: "App Downloads"
        },
        {
            value: "4+",
            label: "Production Apps"
        }
    ]
};
const experiences = [
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
            "Worked on end-to-end mobile app development from architecture to production deployment."
        ]
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
            "Successfully delivered and deployed 2 production-ready mobile applications within 12 months, ensuring smooth release cycles and post-deployment stability."
        ]
    }
];
const skillGroups = [
    {
        category: "Programming Languages",
        skills: [
            "Dart",
            "SQL",
            "React.js",
            "Next.js",
            "HTML",
            "CSS",
            "Basic Java"
        ]
    },
    {
        category: "Mobile Development",
        skills: [
            "Flutter (Cross-platform)",
            "Pixel-Perfect UI",
            "Material Design"
        ]
    },
    {
        category: "Architecture & State Management",
        skills: [
            "MVC",
            "Clean Architecture",
            "Repository Pattern",
            "Bloc",
            "GetX"
        ]
    },
    {
        category: "Databases & Storage",
        skills: [
            "MySQL",
            "PostgreSQL",
            "SQLite (Isar)",
            "Firebase Firestore",
            "Shared Preference"
        ]
    },
    {
        category: "Networking & Backend",
        skills: [
            "RESTful APIs",
            "JSON",
            "OAuth",
            "Pusher",
            "Push Notifications (FCM)",
            "Payment Gateway Integration"
        ]
    },
    {
        category: "Maps & Location",
        skills: [
            "Google Maps SDK",
            "Real-time Location Tracking"
        ]
    },
    {
        category: "Tools & Platforms",
        skills: [
            "Xcode",
            "Firebase Console",
            "Play Console",
            "App Store Connect",
            "Git / GitHub",
            "Postman",
            "Android Studio",
            "VS Code"
        ]
    }
];
const projects = [
    {
        name: "BusCaro Passenger App",
        slug: "buscaro-passenger",
        platform: [
            "android",
            "ios"
        ],
        period: "Sep 2023",
        description: "Corporate mobility application with real-time tracking and payment integration serving 10,000+ users.",
        details: "Built and deployed the BusCaro Passenger App using Flutter, a B2B mobility platform for corporate commuters. Features include real-time GPS tracking, secure payment gateway integration, route optimization, and a seamless booking experience. The app serves 10,000+ corporate users with offline-first functionality and background synchronization for reliable performance in low-connectivity environments.",
        images: [
            "/projects/buscaro-passenger-1.jpg",
            "/projects/buscaro-passenger-2.jpg"
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.buscaro.passenger",
            appStore: "https://apps.apple.com/app/buscaro-passenger/id123456789"
        },
        tags: [
            "Flutter",
            "Real-time",
            "Maps",
            "Payments"
        ]
    },
    {
        name: "BusCaro Captain App",
        slug: "buscaro-captain",
        platform: [
            "android"
        ],
        period: "Sep 2023",
        description: "Driver application with live location tracking, optimized update handling, and trip management for 1,000+ users.",
        details: "Developed the BusCaro Captain App using Native Android (Kotlin) with Hilt and Room Database. The app enables drivers to manage trips, receive live route updates, and communicate with passengers. Implemented distance-based real-time location updates (~50m threshold) using Pusher to reduce unnecessary tracking events and improve battery efficiency.",
        images: [
            "/projects/buscaro-captain-1.jpg"
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.buscaro.captain"
        },
        tags: [
            "Flutter",
            "GPS",
            "Real-time",
            "Pusher"
        ]
    },
    {
        name: "BusCaro Portal",
        slug: "buscaro-portal",
        platform: [
            "web"
        ],
        period: "2023",
        description: "Web-based administration and management portal for the BusCaro ecosystem. Provides trip monitoring, user management, reporting, and operational oversight tools.",
        details: "A comprehensive web portal built with React.js for managing the BusCaro mobility ecosystem. Features include real-time trip monitoring, user management dashboards, detailed reporting and analytics, fleet management, and operational oversight tools for administrators.",
        images: [
            "/projects/buscaro-portal-1.jpg"
        ],
        links: {
            website: "https://portal.buscaro.com"
        },
        tags: [
            "React.js",
            "Dashboard",
            "Management"
        ]
    },
    {
        name: "Jaib App",
        slug: "jaib-app",
        platform: [
            "android"
        ],
        period: "2024",
        description: "Social media and rewards platform where users watch advertisements, earn wallet rewards, and engage with sponsored campaigns across mobile and web experiences.",
        details: "A social media and rewards platform built with Flutter for mobile and React.js for the web portal. Users watch advertisements, earn wallet rewards, and engage with sponsored campaigns. Features include Firebase Authentication, Cloud Firestore, push notifications, and a rewards-based engagement system.",
        images: [
            "/projects/jaib-app-1.jpg"
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.jaib.app",
            website: "https://jaib.app"
        },
        tags: [
            "Flutter",
            "Wallet",
            "Rewards"
        ]
    },
    {
        name: "Jaib Portal",
        slug: "jaib-app",
        platform: [
            "web"
        ],
        period: "2024",
        description: "Social media and rewards platform where users watch advertisements, earn wallet rewards, and engage with sponsored campaigns across mobile and web experiences.",
        details: "A social media and rewards platform built with Flutter for mobile and React.js for the web portal. Users watch advertisements, earn wallet rewards, and engage with sponsored campaigns. Features include Firebase Authentication, Cloud Firestore, push notifications, and a rewards-based engagement system.",
        images: [
            "/projects/jaib-app-1.jpg"
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.jaib.app",
            website: "https://jaib.app"
        },
        tags: [
            "Flutter",
            "Wallet",
            "Rewards"
        ]
    },
    {
        name: "Market App",
        slug: "market-app",
        platform: [
            "android",
            "ios"
        ],
        period: "2023",
        description: "E-commerce application with payment integration and API-driven product catalog.",
        details: "A full-featured e-commerce mobile application built with Flutter featuring a comprehensive product catalog, shopping cart, secure payment gateway integration, order tracking, and user account management. The app communicates with a RESTful API for product data and order processing.",
        images: [
            "/projects/market-app-1.jpg"
        ],
        links: {
            playStore: "https://play.google.com/store/apps/details?id=com.market.app"
        },
        tags: [
            "Flutter",
            "E-commerce",
            "Payments"
        ]
    },
    {
        name: "NETS4U ERP",
        slug: "nets4u-erp",
        platform: [
            "web"
        ],
        period: "2024",
        description: "Comprehensive ERP system for managing inventory, warehouses, sales, orders, suppliers, customers, and business operations through a centralized platform.",
        details: "A comprehensive ERP system built with React.js for managing end-to-end business operations. Modules include inventory management, warehouse operations, sales tracking, order processing, supplier management, customer relationship management, and centralized business analytics and reporting.",
        images: [
            "/projects/nets4u-erp-1.jpg"
        ],
        links: {
            website: "https://nets4u.com"
        },
        tags: [
            "React.js",
            "ERP",
            "Inventory"
        ]
    },
    {
        name: "DesolLabs Web",
        slug: "desollabs-web",
        platform: [
            "web"
        ],
        period: "2024",
        description: "Corporate website built with Next.js focused on performance, responsiveness, SEO optimization, and modern user experience.",
        details: "A corporate website built with Next.js featuring server-side rendering for optimal performance, fully responsive design across all devices, SEO optimization with meta tags and structured data, and a modern, engaging user experience with smooth animations and transitions.",
        images: [
            "/projects/desollabs-web-1.jpg"
        ],
        links: {
            website: "https://desollabs.com"
        },
        tags: [
            "Next.js",
            "SEO",
            "Responsive"
        ]
    }
];
const education = [
    {
        degree: "M.E. Software Engineering",
        institution: "NED University of Engineering & Technology",
        location: "Karachi, Pakistan",
        period: "Aug 2025 – Current",
        status: "In Progress"
    },
    {
        degree: "B.E. Computer Systems Engineering",
        institution: "Mehran University of Engineering & Technology",
        location: "Jamshoro, Pakistan",
        period: "Oct 2018 – Dec 2022",
        status: "Completed"
    }
];
const certifications = [
    {
        name: "Microsoft Office Specialist",
        date: "Dec 2020"
    },
    {
        name: "Professional Development Participant — Pakistan Engineering Board (PEB)",
        date: "Nov 2021"
    },
    {
        name: "Trainee Android App Developer — BBSHRRDB",
        date: "Sep 2022"
    },
    {
        name: "Event Participant — GitHub Community",
        date: "Nov 2018"
    },
    {
        name: "MS Office — Super Computer Systems",
        date: "Jun 2017"
    }
];
const awards = [
    {
        name: "MUTA Merit Scholarship (MUET)",
        date: "Jan 2019"
    },
    {
        name: "Ehsaas Undergraduate Scholarship (HEC)",
        date: "Dec 2019"
    },
    {
        name: "1st Position — Mathematics Competition",
        date: "Mar 2018"
    },
    {
        name: "2nd Position — Science Exhibition",
        date: "Aug 2018"
    }
];
const languages = [
    {
        lang: "Sindhi",
        level: "Native"
    },
    {
        lang: "Urdu",
        level: "Fluent"
    },
    {
        lang: "English",
        level: "Proficient"
    }
];
const references = [
    {
        name: "Dr. Adnan Ashraf",
        role: "Professor, MUET",
        email: "adnan.arain@faculty.muet.edu.pk",
        phone: "+92 300 0221360"
    },
    {
        name: "Basim Afzal",
        role: "Colleague",
        email: "basimafzal65@gmail.com",
        phone: "+92 343 3499229"
    }
];
}),
"[project]/src/app/projects/[slug]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const storeIcons = {
    playStore: {
        label: "Play Store",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    appStore: {
        label: "App Store",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"]
    },
    website: {
        label: "Website",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    }
};
function ProjectDetail() {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === slug);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/#projects",
                        className: "inline-flex items-center gap-2 transition-colors",
                        style: {
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "12px",
                            letterSpacing: "0.1em",
                            color: "#A3A3A3"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            "BACK TO PROJECTS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-8 mb-10",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-3 py-1 rounded-full mb-4",
                            style: {
                                background: "rgba(212,175,55,0.15)",
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "10px",
                                letterSpacing: "0.12em",
                                color: "#D4AF37"
                            },
                            children: project.period
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                                fontWeight: 700,
                                color: "#F5F5F5",
                                letterSpacing: "-0.02em",
                                lineHeight: 1.1
                            },
                            children: project.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex gap-4 overflow-x-auto pb-4 mb-10",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    },
                    style: {
                        scrollbarWidth: "thin",
                        scrollbarColor: "rgba(212,175,55,0.3) transparent"
                    },
                    children: project.images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden",
                            style: {
                                border: "1px solid rgba(255,255,255,0.08)",
                                background: "#161616"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img,
                                alt: `${project.name} screenshot ${i + 1}`,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "lg:col-span-2",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.4rem",
                                        fontWeight: 600,
                                        color: "#F5F5F5",
                                        marginBottom: "1rem"
                                    },
                                    children: "About this project"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "15px",
                                        lineHeight: 1.8,
                                        color: "#A3A3A3"
                                    },
                                    children: project.details
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-8",
                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.08em",
                                                color: "#D4AF37",
                                                background: "rgba(212,175,55,0.15)",
                                                padding: "4px 10px",
                                                borderRadius: "6px",
                                                border: "1px solid rgba(212,175,55,0.25)"
                                            },
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.35
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-6",
                                style: {
                                    background: "#161616",
                                    border: "1px solid rgba(255,255,255,0.08)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.18em",
                                            color: "#D4AF37",
                                            marginBottom: "1rem"
                                        },
                                        children: "LINKS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: Object.entries(project.links).map(([key, url])=>{
                                            if (!url) return null;
                                            const store = storeIcons[key];
                                            const Icon = store?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:-translate-y-0.5",
                                                style: {
                                                    background: "rgba(255,255,255,0.05)",
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                    textDecoration: "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        size: 16,
                                                        style: {
                                                            color: "#D4AF37",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'DM Sans', sans-serif",
                                                            fontSize: "13px",
                                                            color: "#F5F5F5"
                                                        },
                                                        children: store?.label || key
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        size: 12,
                                                        style: {
                                                            color: "#A3A3A3",
                                                            marginLeft: "auto",
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/[slug]/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_03zwrmv._.js.map