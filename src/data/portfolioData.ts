import { PortfolioData } from "@/types";

// Helper function to format date from YYYY-MM to "Mon YYYY"
export function formatDate(dateStr: string): string {
    const [year, month] = dateStr.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Helper function to calculate duration between two dates
export function calculateDuration(startDate: string, endDate: string | null): string {
    const [startYear, startMonth] = startDate.split('-').map(Number);
    const now = new Date();
    const [endYear, endMonth] = endDate
        ? endDate.split('-').map(Number)
        : [now.getFullYear(), now.getMonth() + 1];

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years === 0 && months === 0) {
        return 'Less than a month';
    }

    const yearsStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    if (yearsStr && monthsStr) {
        return `${yearsStr} ${monthsStr}`;
    }
    return yearsStr || monthsStr;
}

// Helper function to get formatted date range
export function getDateRange(startDate: string, endDate: string | null): string {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} – ${end}`;
}

// Helper function to calculate total experience duration
export function calculateTotalExperience(experience: { startDate: string; endDate: string | null }[]): string {
    let totalMonths = 0;

    experience.forEach((exp) => {
        const [startYear, startMonth] = exp.startDate.split('-').map(Number);
        const now = new Date();
        const [endYear, endMonth] = exp.endDate
            ? exp.endDate.split('-').map(Number)
            : [now.getFullYear(), now.getMonth() + 1];

        const years = endYear - startYear;
        const months = endMonth - startMonth;
        totalMonths += years * 12 + months;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
        return `${months} months`;
    } else if (months === 0) {
        return `${years} year${years > 1 ? 's' : ''}`;
    }
    return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
}

// Helper function to get total experience in full years (for badges, etc.)
export function getTotalExperienceYears(experience: { startDate: string; endDate: string | null }[]): number {
    let totalMonths = 0;

    experience.forEach((exp) => {
        const [startYear, startMonth] = exp.startDate.split('-').map(Number);
        const now = new Date();
        const [endYear, endMonth] = exp.endDate
            ? exp.endDate.split('-').map(Number)
            : [now.getFullYear(), now.getMonth() + 1];

        const years = endYear - startYear;
        const months = endMonth - startMonth;
        totalMonths += years * 12 + months;
    });

    return Math.floor(totalMonths / 12);
}

export const DATA: PortfolioData = {
    name: "Ajay Singh Rajput",
    role: "Software Engineer | PHP Laravel Developer",
    bio: "delivering scalable, secure, and high-performance web applications. Strong background in backend architecture, RESTful API development, database optimization, and system integration. Skilled at translating business requirements into robust technical solutions and contributing across the full software development lifecycle.",
    profileImg: "/my-profile.jpeg",
    skills: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "REST APIs",
        "MySQL",
        "AWS S3",
        "JavaScript",
        "React.js",
        "jQuery",
        "Git",
    ],
    languages: [
        { name: "English", level: "Fluent" },
        { name: "Hindi", level: "Native" }
    ],
    experience: [
        {
            role: "Software Engineer",
            company: "Tekzee Technologies Pvt. Ltd.",
            startDate: "2022-01",
            endDate: null,
            desc: "Designing and implementing scalable, secure Laravel backends, RESTful APIs, and real-time integrations for FMCG, e-grocery, and field-force platforms using PHP, Laravel, MySQL, JavaScript, jQuery, AWS S3, FCM, and Google Maps.",
        },
        {
            role: "PHP Developer",
            company: "Techsysd IT Solutions",
            startDate: "2021-07",
            endDate: "2022-01",
            desc: "Delivered production Laravel and CodeIgniter modules, integrated third-party APIs, and optimized MySQL queries for better performance on client projects.",
        },
    ],
    education: [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Lokmanya Tilak Science & Commerce College (Makhanlal Chaturvedi University, Bhopal)",
            year: "2017 Jul – 2020 Oct",
            location: "Ujjain, M.P., India",
        },
    ],
    projects: [
        {
            id: 1,
            title: "Prataap Snacks Limited (PSL) – Yellow Diamond",
            category: "FMCG SFA & Distribution Platform",
            tech: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "AWS S3", "Google Maps", "FCM", "React.js WebView"],
            fullDesc:
                "Led backend development for PSL’s enterprise FMCG sales and distribution platform. Architected and maintained scalable Laravel services and RESTful APIs for SFA and Distributor apps, implemented OAuth/JWT auth and real-time FCM notifications, integrated Google Maps for route and location tracking, and built React.js WebView modules embedded inside the mobile app for a native-like experience.",
            img: "/PSL-SFA.png",
            link: "https://play.google.com/store/apps/details?id=com.sfa.psl&hl=en",
        },
        {
            id: 2,
            title: "Vyapaar Vistaar (VV)",
            category: "Supply Chain & Distribution",
            tech: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "AWS S3", "Google Maps", "FCM", "React.js WebView"],
            fullDesc:
                "Built and maintained Laravel REST APIs powering web and mobile apps for order booking, inventory, and reporting. Integrated React.js WebView flows inside the mobile app for real-time order booking and dashboards, enforced dial-based call workflows tied to order placement, and implemented backend logic for the complete order lifecycle and offline-friendly synchronization.",
            img: "/VV-SFA.png",
            link: "https://play.google.com/store/apps/details?id=com.vvapps.dms&hl=en_IN",
        },
        {
            id: 3,
            title: "Ondoor – Online Grocery Shopping Platform",
            category: "E‑commerce & Logistics",
            tech: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "jQuery", "AWS S3"],
            fullDesc:
                "Refactored and enhanced core modules for the Ondoor e‑grocery web application. Implemented a Delivery Logistics module to streamline order fulfilment and driver assignment, built an admin dashboard for managing products, categories, and real-time order tracking, and optimized database queries to significantly improve performance.",
            img: "/Ondoor.png",
            link: "",
        },
        {
            id: 4,
            title: "Field Front App – Field Force Management",
            category: "Field Force & Attendance",
            tech: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS S3", "Geo-tracking"],
            fullDesc:
                "Conceptualized and engineered a field force management ecosystem to centralize remote workforce operations. Designed precise attendance and geo-tracking, real-time performance analytics dashboards, and an end-to-end task lifecycle system with automated task distribution and status-based triggers for field agents.",
            img: "/FieldFront.png",
            link: "",
        },
        {
            id: 5,
            title: "Purehug – Baby Diaper Brand",
            category: "Baby Care & SFA",
            tech: ["PHP", "Laravel", "MySQL", "JavaScript", "React.js WebView"],
            fullDesc:
                "Every Purehug diaper is thoughtfully crafted – gentle on delicate skin, leak-proof, and light as a cloud – ensuring babies stay happy and comfortable while playing or sleeping. Contributed to the digital ecosystem behind the brand by powering billing, order management, and performance tracking modules, and integrating React.js WebView experiences inside the Purehug mobile app.",
            img: "/Purehug-SFA.png",
            link: "",
        },
    ],
    socialLinks: [
        {
            platform: 'linkedin',
            url: 'https://linkedin.com/in/ajay-singh-rajput-338706213/',
            label: 'LinkedIn'
        },
        {
            platform: 'github',
            url: 'https://github.com/ajayrajput12091999',
            label: 'GitHub'
        },
        {
            platform: 'gmail',
            url: 'mailto:ajaysingh2017rajput@gmail.com',
            label: 'Gmail'
        }
    ]

};