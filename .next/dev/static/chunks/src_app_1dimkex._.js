(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    linkedin: "https://www.linkedin.com/in/faheemahmed98",
    github: "https://github.com/faheemahmed98",
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
        location: "Karachi",
        period: "Sep 2023 – Present",
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
            "SQL"
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
            "MVVM",
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
            "Firebase Firestore"
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
        period: "Sep 2023 – Present",
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
        period: "Sep 2023 – Present",
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
        name: "Jaib App & Portal",
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
        name: "Market App",
        slug: "market-app",
        platform: [
            "android"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const navItems = [
    {
        label: "Profile",
        href: "profile"
    },
    {
        label: "About",
        href: "about"
    },
    {
        label: "Experience",
        href: "experience"
    },
    {
        label: "Skills",
        href: "skills"
    },
    {
        label: "Projects",
        href: "projects"
    },
    {
        label: "Education",
        href: "education"
    },
    {
        label: "References",
        href: "references"
    },
    {
        label: "Contact",
        href: "contact"
    }
];
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("profile");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const handler = {
                "Nav.useEffect.handler": ()=>setScrolled(window.scrollY > 60)
            }["Nav.useEffect.handler"];
            window.addEventListener("scroll", handler);
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", handler)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Nav.useEffect": (entries)=>{
                    entries.forEach({
                        "Nav.useEffect": (entry)=>{
                            if (entry.isIntersecting) setActive(entry.target.id);
                        }
                    }["Nav.useEffect"]);
                }
            }["Nav.useEffect"], {
                rootMargin: "-40% 0px -55% 0px"
            });
            navItems.forEach({
                "Nav.useEffect": ({ href })=>{
                    const el = document.getElementById(href);
                    if (el) observer.observe(el);
                }
            }["Nav.useEffect"]);
            return ({
                "Nav.useEffect": ()=>observer.disconnect()
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    const handleNav = (href)=>{
        setMenuOpen(false);
        document.getElementById(href)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        style: {
            background: scrolled ? "rgba(11,11,11,0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 lg:px-0 flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNav("profile"),
                        className: "flex items-center gap-2",
                        style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-7 rounded-lg flex items-center justify-center",
                                style: {
                                    background: "#D4AF37"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        color: "#F5F5F5"
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name.split(" ").map((n)=>n[0]).join("")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Nav.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Nav.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            scrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#F5F5F5"
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Nav.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Nav.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-1",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNav(item.href),
                                className: "px-4 py-2 rounded-lg transition-all duration-200",
                                style: {
                                    fontFamily: "'DM Mono', monospace",
                                    fontSize: "10px",
                                    letterSpacing: "0.12em",
                                    color: active === item.href ? "#F5F5F5" : "#A3A3A3",
                                    background: active === item.href ? "rgba(212,175,55,0.25)" : "transparent",
                                    border: "none",
                                    cursor: "pointer"
                                },
                                children: item.label.toUpperCase()
                            }, item.href, false, {
                                fileName: "[project]/src/app/components/Nav.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Nav.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden flex flex-col gap-1 p-2",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer"
                        },
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-px w-5",
                                style: {
                                    background: "#A3A3A3"
                                }
                            }, i, false, {
                                fileName: "[project]/src/app/components/Nav.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Nav.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Nav.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden px-6 pb-6 flex flex-col gap-1",
                style: {
                    background: "rgba(11,11,11,0.97)"
                },
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNav(item.href),
                        className: "text-left px-4 py-3 rounded-lg transition-all",
                        style: {
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "11px",
                            letterSpacing: "0.12em",
                            color: active === item.href ? "#F5F5F5" : "#A3A3A3",
                            background: active === item.href ? "rgba(212,175,55,0.2)" : "transparent",
                            border: "none",
                            cursor: "pointer"
                        },
                        children: item.label.toUpperCase()
                    }, item.href, false, {
                        fileName: "[project]/src/app/components/Nav.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Nav.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Nav.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Nav, "7fey+EoZiQDt4z/wSoN6XVbHS0Q=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "profile",
        className: "relative min-h-screen flex flex-col justify-center px-6 py-24 overflow-hidden",
        style: {
            background: "#0B0B0B"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
                    backgroundSize: "40px 40px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none",
                style: {
                    background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
                    filter: "blur(40px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex-1",
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.7,
                                ease: "easeOut"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border",
                                    style: {
                                        borderColor: "rgba(212,175,55,0.4)",
                                        background: "rgba(212,175,55,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-1.5 h-1.5 rounded-full",
                                            style: {
                                                background: "#D4AF37"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "11px",
                                                letterSpacing: "0.15em",
                                                color: "#D4AF37"
                                            },
                                            children: "AVAILABLE FOR OPPORTUNITIES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "clamp(3rem, 8vw, 6rem)",
                                        fontWeight: 700,
                                        color: "#F5F5F5",
                                        lineHeight: 1.05,
                                        letterSpacing: "-0.02em"
                                    },
                                    children: (()=>{
                                        const first = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name.split(" ")[0];
                                        const last = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name.split(" ")[1];
                                        const total = first.length + 1 + last.length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                first.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "inline-block",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        animate: {
                                                            opacity: [
                                                                0,
                                                                1,
                                                                1,
                                                                0
                                                            ],
                                                            y: [
                                                                20,
                                                                0,
                                                                0,
                                                                20
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 4.5,
                                                            times: [
                                                                0,
                                                                0.07,
                                                                0.82,
                                                                1
                                                            ],
                                                            repeat: Infinity,
                                                            delay: i * 0.12,
                                                            ease: "easeOut"
                                                        },
                                                        children: char
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/components/Hero.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/components/Hero.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                last.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "inline-block",
                                                        style: {
                                                            color: "#D4AF37"
                                                        },
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        animate: {
                                                            opacity: [
                                                                0,
                                                                1,
                                                                1,
                                                                0
                                                            ],
                                                            y: [
                                                                20,
                                                                0,
                                                                0,
                                                                20
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 4.5,
                                                            times: [
                                                                0,
                                                                0.07,
                                                                0.82,
                                                                1
                                                            ],
                                                            repeat: Infinity,
                                                            delay: (first.length + 1 + i) * 0.12,
                                                            ease: "easeOut"
                                                        },
                                                        children: char
                                                    }, i, false, {
                                                        fileName: "[project]/src/app/components/Hero.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true);
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5",
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "1.1rem",
                                        color: "#A3A3A3",
                                        letterSpacing: "0.02em"
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-xl",
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "15px",
                                        lineHeight: 1.8,
                                        color: "#A3A3A3"
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].summary
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5",
                                            style: {
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                size: 16,
                                                style: {
                                                    color: "#D4AF37"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Hero.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5",
                                            style: {
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                size: 16,
                                                style: {
                                                    color: "#D4AF37"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Hero.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`,
                                            className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5",
                                            style: {
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 16,
                                                style: {
                                                    color: "#D4AF37"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Hero.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone}`,
                                            className: "w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5",
                                            style: {
                                                background: "rgba(255,255,255,0.06)",
                                                border: "1px solid rgba(255,255,255,0.1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 16,
                                                style: {
                                                    color: "#D4AF37"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Hero.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-wrap gap-3",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                            text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                            text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                            text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                                        }
                                    ].map(({ icon: Icon, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2 rounded-lg",
                                            style: {
                                                background: "#161616",
                                                border: "1px solid rgba(255,255,255,0.1)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 13,
                                                    style: {
                                                        color: "#D4AF37"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Hero.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "12px",
                                                        color: "#A3A3A3"
                                                    },
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Hero.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, text, true, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-14 flex gap-10",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].stats.map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "2.4rem",
                                                        fontWeight: 700,
                                                        color: "#F5F5F5",
                                                        lineHeight: 1
                                                    },
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Hero.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1",
                                                    style: {
                                                        fontFamily: "'DM Mono', monospace",
                                                        fontSize: "10px",
                                                        letterSpacing: "0.14em",
                                                        color: "rgba(142,142,147,0.6)"
                                                    },
                                                    children: label.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Hero.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/src/app/components/Hero.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Hero.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex-shrink-0",
                            initial: {
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4",
                                style: {
                                    borderColor: "rgba(212,175,55,0.3)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].image,
                                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Hero.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Hero.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Hero.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Hero.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-24 pointer-events-none",
                style: {
                    background: "linear-gradient(to bottom, transparent, #0B0B0B)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/Hero.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Hero.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/SectionLabel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionLabel",
    ()=>SectionLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionLabel({ index, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-5 mb-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "#D4AF37"
                },
                children: index
            }, void 0, false, {
                fileName: "[project]/src/app/components/SectionLabel.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-px",
                style: {
                    background: "#D4AF37"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/SectionLabel.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #F5F5F5 0%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.01em"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/components/SectionLabel.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SectionLabel.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = SectionLabel;
var _c;
__turbopack_context__.k.register(_c, "SectionLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experience",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
;
;
;
;
function Experience() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-24 px-6",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                    index: "002",
                    title: "Experience"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Experience.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "rounded-2xl p-8",
                            style: {
                                background: "#161616",
                                border: "1px solid rgba(255,255,255,0.08)"
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: false,
                                margin: "-60px"
                            },
                            transition: {
                                duration: 0.5,
                                delay: i * 0.07
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block px-3 py-1 rounded-full mb-3",
                                                style: {
                                                    background: "rgba(212,175,55,0.15)",
                                                    fontFamily: "'DM Mono', monospace",
                                                    fontSize: "10px",
                                                    letterSpacing: "0.12em",
                                                    color: "#D4AF37"
                                                },
                                                children: exp.period
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "13px",
                                                    color: "#A3A3A3",
                                                    fontWeight: 500
                                                },
                                                children: exp.company
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                lineNumber: 30,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "12px",
                                                    color: "rgba(163,163,163,0.6)",
                                                    marginTop: "2px"
                                                },
                                                children: exp.location
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Experience.tsx",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: "1.15rem",
                                                    fontWeight: 600,
                                                    color: "#F5F5F5",
                                                    marginBottom: "0.8rem"
                                                },
                                                children: exp.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "flex flex-col gap-2",
                                                children: exp.bullets.map((b, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-3 items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                                style: {
                                                                    background: "#D4AF37"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                                lineNumber: 53,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'DM Sans', sans-serif",
                                                                    fontSize: "14px",
                                                                    lineHeight: 1.7,
                                                                    color: "#A3A3A3"
                                                                },
                                                                children: b
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, j, true, {
                                                        fileName: "[project]/src/app/components/Experience.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Experience.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Experience.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Experience.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/app/components/Experience.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Experience.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Experience.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Experience.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
;
;
;
;
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-24 px-6",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                    index: "003",
                    title: "Skills"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Skills.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"].map((group, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "rounded-2xl p-7",
                            style: {
                                background: "#161616",
                                border: "1px solid rgba(255,255,255,0.08)"
                            },
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: false,
                                margin: "-50px"
                            },
                            transition: {
                                duration: 0.5,
                                delay: i * 0.08
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full",
                                            style: {
                                                background: "#D4AF37"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Skills.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.18em",
                                                color: "#D4AF37"
                                            },
                                            children: group.category.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Skills.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Skills.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: group.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] cursor-default",
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "13px",
                                                color: "#A3A3A3",
                                                background: "#161616",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                borderRadius: "8px",
                                                padding: "5px 12px"
                                            },
                                            children: skill
                                        }, skill, false, {
                                            fileName: "[project]/src/app/components/Skills.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Skills.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, group.category, true, {
                            fileName: "[project]/src/app/components/Skills.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Skills.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Skills.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Skills.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
;
const platformMeta = {
    android: {
        label: "Android",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        color: "#3DDC84"
    },
    ios: {
        label: "iOS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        color: "#F5F5F5"
    },
    web: {
        label: "Web",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        color: "#D4AF37"
    }
};
function Projects() {
    const grouped = [
        "android",
        "ios",
        "web"
    ].map((p)=>({
            platform: p,
            items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((pr)=>pr.platform.includes(p))
        })).filter((g)=>g.items.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-24 px-6",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                    index: "004",
                    title: "Projects"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Projects.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "rounded-2xl p-6 mb-12 flex flex-wrap items-center gap-6 md:gap-10",
                    style: {
                        background: "#161616",
                        border: "1px solid rgba(255,255,255,0.08)"
                    },
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: false
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        {
                            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length}`,
                            label: "Total Projects"
                        },
                        {
                            value: "3",
                            label: "Platforms"
                        },
                        {
                            value: "3+",
                            label: "Years Exp"
                        },
                        {
                            value: "10K+",
                            label: "Downloads"
                        }
                    ].map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.5rem",
                                        fontWeight: 700,
                                        color: "#D4AF37",
                                        lineHeight: 1
                                    },
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Projects.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: "10px",
                                        letterSpacing: "0.1em",
                                        color: "#A3A3A3",
                                        maxWidth: "70px"
                                    },
                                    children: label.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Projects.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-8 hidden md:block",
                                    style: {
                                        background: "rgba(255,255,255,0.08)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Projects.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/src/app/components/Projects.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Projects.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                grouped.map(({ platform, items })=>{
                    const meta = platformMeta[platform];
                    const Icon = meta.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-14 last:mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg flex items-center justify-center",
                                        style: {
                                            background: "rgba(212,175,55,0.15)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 16,
                                            style: {
                                                color: meta.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Projects.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Projects.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: "11px",
                                            letterSpacing: "0.18em",
                                            color: "#D4AF37"
                                        },
                                        children: meta.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Projects.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-px",
                                        style: {
                                            background: "rgba(255,255,255,0.08)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Projects.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Projects.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
                                children: items.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/projects/${project.slug}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer",
                                            style: {
                                                background: "#161616",
                                                border: "1px solid rgba(255,255,255,0.08)"
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: false,
                                                margin: "-40px"
                                            },
                                            transition: {
                                                duration: 0.45,
                                                delay: i * 0.06
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                                                    style: {
                                                        background: "linear-gradient(90deg, #D4AF37, #FFD700)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Projects.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2.5 py-1 rounded-full",
                                                            style: {
                                                                background: "rgba(212,175,55,0.15)",
                                                                fontFamily: "'DM Mono', monospace",
                                                                fontSize: "10px",
                                                                letterSpacing: "0.1em",
                                                                color: "#D4AF37"
                                                            },
                                                            children: project.period
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            size: 14,
                                                            style: {
                                                                color: "rgba(255,255,255,0.4)"
                                                            },
                                                            className: "group-hover:text-[#FFD700] transition-colors"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Projects.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/Projects.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "1.05rem",
                                                        fontWeight: 600,
                                                        color: "#F5F5F5",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    children: project.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Projects.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "13px",
                                                        lineHeight: 1.7,
                                                        color: "#A3A3A3",
                                                        flex: 1
                                                    },
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Projects.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1.5 mt-5",
                                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Mono', monospace",
                                                                fontSize: "10px",
                                                                letterSpacing: "0.08em",
                                                                color: "#D4AF37",
                                                                background: "rgba(212,175,55,0.15)",
                                                                padding: "3px 9px",
                                                                borderRadius: "6px"
                                                            },
                                                            children: tag
                                                        }, tag, false, {
                                                            fileName: "[project]/src/app/components/Projects.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Projects.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Projects.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, this)
                                    }, project.name, false, {
                                        fileName: "[project]/src/app/components/Projects.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Projects.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, platform, true, {
                        fileName: "[project]/src/app/components/Projects.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Projects.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Projects.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Education.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Education",
    ()=>Education
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SectionLabel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-check.js [app-client] (ecmascript) <export default as FileCheck>");
;
;
;
;
;
function Education() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "py-24 px-6",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SectionLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionLabel"], {
                    index: "005",
                    title: "Education"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Education.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].map((edu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "rounded-2xl p-7 flex gap-5",
                            style: {
                                background: "#161616",
                                border: "1px solid rgba(255,255,255,0.08)"
                            },
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: false
                            },
                            transition: {
                                duration: 0.5,
                                delay: i * 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                                    style: {
                                        background: "#D4AF37"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                        size: 20,
                                        color: "#F5F5F5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Education.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Education.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "'Playfair Display', serif",
                                                        fontSize: "1.05rem",
                                                        fontWeight: 600,
                                                        color: "#F5F5F5"
                                                    },
                                                    children: edu.degree
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs",
                                                    style: {
                                                        fontFamily: "'DM Mono', monospace",
                                                        fontSize: "9px",
                                                        letterSpacing: "0.1em",
                                                        background: edu.status === "In Progress" ? "rgba(212,175,55,0.15)" : "rgba(22,163,74,0.15)",
                                                        color: edu.status === "In Progress" ? "#D4AF37" : "#4ADE80",
                                                        border: `1px solid ${edu.status === "In Progress" ? "rgba(212,175,55,0.3)" : "rgba(74,222,128,0.3)"}`
                                                    },
                                                    children: edu.status.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "13px",
                                                color: "#A3A3A3"
                                            },
                                            children: edu.institution
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "12px",
                                                color: "rgba(163,163,163,0.6)",
                                                marginTop: "2px"
                                            },
                                            children: edu.location
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.1em",
                                                color: "#D4AF37",
                                                marginTop: "8px"
                                            },
                                            children: edu.period
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Education.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, edu.degree, true, {
                            fileName: "[project]/src/app/components/Education.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Education.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"], {
                                            size: 16,
                                            style: {
                                                color: "#D4AF37"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.18em",
                                                color: "#D4AF37"
                                            },
                                            children: "CERTIFICATIONS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Education.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-0",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certifications"].map((cert, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "flex items-start justify-between py-4 border-b",
                                            style: {
                                                borderColor: "rgba(255,255,255,0.08)"
                                            },
                                            initial: {
                                                opacity: 0
                                            },
                                            whileInView: {
                                                opacity: 1
                                            },
                                            viewport: {
                                                once: false
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: i * 0.05
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "13px",
                                                        color: "#A3A3A3",
                                                        maxWidth: "75%",
                                                        lineHeight: 1.5
                                                    },
                                                    children: cert.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Mono', monospace",
                                                        fontSize: "10px",
                                                        color: "rgba(163,163,163,0.6)",
                                                        flexShrink: 0,
                                                        marginLeft: "1rem"
                                                    },
                                                    children: cert.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, cert.name, true, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Education.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Education.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            size: 16,
                                            style: {
                                                color: "#D4AF37"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.18em",
                                                color: "#D4AF37"
                                            },
                                            children: "HONOURS & AWARDS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Education.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-0",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["awards"].map((award, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "flex items-start justify-between py-4 border-b",
                                            style: {
                                                borderColor: "rgba(255,255,255,0.08)"
                                            },
                                            initial: {
                                                opacity: 0
                                            },
                                            whileInView: {
                                                opacity: 1
                                            },
                                            viewport: {
                                                once: false
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: i * 0.05
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "13px",
                                                        color: "#A3A3A3",
                                                        maxWidth: "75%",
                                                        lineHeight: 1.5
                                                    },
                                                    children: award.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Mono', monospace",
                                                        fontSize: "10px",
                                                        color: "rgba(163,163,163,0.6)",
                                                        flexShrink: 0,
                                                        marginLeft: "1rem"
                                                    },
                                                    children: award.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Education.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, award.name, true, {
                                            fileName: "[project]/src/app/components/Education.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Education.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Education.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Education.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Education.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Education.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Education;
var _c;
__turbopack_context__.k.register(_c, "Education");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
;
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-24 px-6",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-5 mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "11px",
                                letterSpacing: "0.15em",
                                color: "#D4AF37"
                            },
                            children: "006"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-px",
                            style: {
                                background: "#D4AF37"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                fontWeight: 600,
                                background: "linear-gradient(135deg, #F5F5F5 0%, #D4AF37 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                letterSpacing: "-0.01em"
                            },
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Contact.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "rounded-2xl p-6",
                                    style: {
                                        background: "#161616",
                                        border: "1px solid rgba(255,255,255,0.08)"
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: false
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.18em",
                                                color: "#D4AF37",
                                                marginBottom: "1.2rem"
                                            },
                                            children: "GET IN TOUCH"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Contact.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                                    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                                                },
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                                    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                                                },
                                                {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                                    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                                }
                                            ].map(({ icon: Icon, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 14,
                                                            style: {
                                                                color: "#D4AF37",
                                                                marginTop: 2,
                                                                flexShrink: 0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Contact.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Sans', sans-serif",
                                                                fontSize: "13px",
                                                                color: "#A3A3A3",
                                                                lineHeight: 1.5
                                                            },
                                                            children: text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Contact.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, text, true, {
                                                    fileName: "[project]/src/app/components/Contact.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Contact.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Contact.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "rounded-2xl p-6",
                                    style: {
                                        background: "#161616",
                                        border: "1px solid rgba(255,255,255,0.08)"
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: false
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'DM Mono', monospace",
                                                fontSize: "10px",
                                                letterSpacing: "0.18em",
                                                color: "#D4AF37",
                                                marginBottom: "1.2rem"
                                            },
                                            children: "LANGUAGES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Contact.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"].map(({ lang, level })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "'DM Sans', sans-serif",
                                                                fontSize: "13px",
                                                                color: "#A3A3A3"
                                                            },
                                                            children: lang
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Contact.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2.5 py-0.5 rounded-full",
                                                            style: {
                                                                fontFamily: "'DM Mono', monospace",
                                                                fontSize: "9px",
                                                                letterSpacing: "0.12em",
                                                                color: "#D4AF37",
                                                                background: "rgba(212,175,55,0.15)",
                                                                border: "1px solid rgba(212,175,55,0.3)"
                                                            },
                                                            children: level.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Contact.tsx",
                                                            lineNumber: 75,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, lang, true, {
                                                    fileName: "[project]/src/app/components/Contact.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Contact.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Contact.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "rounded-2xl p-6",
                                style: {
                                    background: "#161616",
                                    border: "1px solid rgba(255,255,255,0.08)"
                                },
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: false
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.18em",
                                            color: "#D4AF37",
                                            marginBottom: "1.2rem"
                                        },
                                        children: "AVAILABILITY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "14px",
                                            color: "#A3A3A3",
                                            lineHeight: 1.8
                                        },
                                        children: "Open to new opportunities. Feel free to reach out via email or phone for collaboration, freelance projects, or full-time roles."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Contact.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Contact.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Contact.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 pt-8 flex items-center justify-between border-t",
                    style: {
                        borderColor: "rgba(255,255,255,0.08)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "11px",
                                letterSpacing: "0.1em",
                                color: "rgba(163,163,163,0.4)"
                            },
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name,
                                " — ",
                                new Date().getFullYear()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "11px",
                                letterSpacing: "0.1em",
                                color: "rgba(163,163,163,0.4)"
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Contact.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Contact.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Contact.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Contact.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/References.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "References",
    ()=>References
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
;
;
;
;
function References() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "references",
        className: "py-24 px-6",
        style: {
            background: "#0B0B0B"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-5 mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "11px",
                                letterSpacing: "0.15em",
                                color: "#D4AF37"
                            },
                            children: "007"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/References.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-px",
                            style: {
                                background: "#D4AF37"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/References.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                fontWeight: 600,
                                background: "linear-gradient(135deg, #F5F5F5 0%, #D4AF37 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                letterSpacing: "-0.01em"
                            },
                            children: "References"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/References.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/References.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["references"].map((ref, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "rounded-2xl p-7",
                            style: {
                                background: "#161616",
                                border: "1px solid rgba(255,255,255,0.08)"
                            },
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: false
                            },
                            transition: {
                                duration: 0.5,
                                delay: i * 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        color: "#F5F5F5",
                                        marginBottom: "0.3rem"
                                    },
                                    children: ref.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/References.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: "9px",
                                        letterSpacing: "0.12em",
                                        color: "#D4AF37",
                                        marginBottom: "1rem"
                                    },
                                    children: ref.role.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/References.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                            text: ref.email
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                            text: ref.phone
                                        }
                                    ].map(({ icon: Icon, text })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 13,
                                                    style: {
                                                        color: "#D4AF37",
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/References.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "13px",
                                                        color: "#A3A3A3"
                                                    },
                                                    children: text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/References.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, text, true, {
                                            fileName: "[project]/src/app/components/References.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/References.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, ref.name, true, {
                            fileName: "[project]/src/app/components/References.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/References.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/References.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/References.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = References;
var _c;
__turbopack_context__.k.register(_c, "References");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/App.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Experience.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Skills.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Projects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Education$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Education.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$References$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/References.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "#0B0B0B"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {}, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "profile",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "experience",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Experience"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "skills",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Skills$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skills"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "projects",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Projects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "education",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Education$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Education"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "references",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$References$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["References"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Contact"], {}, void 0, false, {
                    fileName: "[project]/src/app/App.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/App.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/App.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_1dimkex._.js.map