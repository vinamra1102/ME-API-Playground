require("dotenv").config();
const mongoose = require("mongoose");

const Profile = require("../src/models/Profile");
const Skill = require("../src/models/Skill");
const Project = require("../src/models/Project");

(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ connected");


        await Promise.all([
            Project.deleteMany({}),
            Skill.deleteMany({}),
            Profile.deleteMany({}),
        ]);

        const profile = await Profile.create({
            name: "Vinamra Bhonsle",
            email: "vinamrabhonsle@gmail.com",
            about: "B.Tech IT student focused on backend, cybersecurity and digital forensics.",
            links: {
                github: "https://github.com/vinamra1102",
                linkedin: "https://www.linkedin.com/in/vinamra-bhonsle-b2b569219/",

            },
            education: [{
                    institution: "Manipal University Jaipur, Jaipur (Rajasthan)",
                    degree: "B.Tech in Information Technology",
                    startYear: 2022,
                    endYear: 2026
                },
                {
                    institution: "Holy Cross Sr. Sec. School, Raipur (C.G.)",
                    degree: "CBSE – Class XII",
                    startYear: 2020,
                    endYear: 2021
                },
                {
                    institution: "Holy Cross Sr. Sec. School, Raipur (C.G.)",
                    degree: "CBSE – Class X",
                    startYear: 2018,
                    endYear: 2019
                },
            ],
            work: [{
                company: "State Forensic Science Laboratory, Raipur (C.G.)",
                role: "Digital Forensics Intern",
                startDate: "2025-06-01",
                endDate: "2025-08-31",
                description: "Hands-on with forensic workflows, chain of custody, Android uninstall forensics module, Hasher Tool (CLI/Streamlit), and SQLite forensic recovery (deleted WhatsApp/app data)."
            }],
        });


        const skillsSeed = [
            // Languages
            ["Python", 5],
            ["Java", 3],
            ["JavaScript", 4],
            ["HTML", 4],
            ["CSS", 4],
            // Frameworks / Libraries
            ["React", 4],
            ["Node.js", 4],
            ["Express", 4],
            ["Flask", 3],
            ["Spring Boot", 2],
            // Security / Standards
            ["OWASP Top 10", 3],
            ["NIST CSF", 3],
            // Tools
            ["Git", 4],
            ["Docker", 3],
            ["VS Code", 5],
            ["IntelliJ", 3],
            ["Wireshark", 3],
            ["Nmap", 3],
            ["Metasploit", 2],
            // APIs
            ["REST APIs", 5],
            ["GraphQL", 3],
            ["Google Maps API", 3],
            ["OAuth 2.0", 3],
            ["JWT Authentication", 4],
            ["Firebase APIs", 3],
            // Databases
            ["MongoDB", 5],
            ["MySQL", 3],
            ["SQLite", 4],
            ["PostgreSQL", 3],
            // Soft skills (optional to keep)
            ["Problem Solving", 4],
            ["Analytical Thinking", 4],
            ["Communication", 4],
            ["Research Ability", 4],

        ];

        const skills = await Skill.insertMany(
            skillsSeed.map(([name, level]) => ({ name, level }))
        );
        const idByName = (n) => skills.find((s) => s.name === n) ? ._id;

        // -------- Projects --------
        await Project.insertMany([{
                title: "Web Application Vulnerability Scanner",
                description: "React dashboard + Flask APIs; MongoDB to persist scans; detectors for SQLi, XSS, Command Injection, and Directory Traversal; reporting UI.",
                github: "",
                demo: "",
                skills: [
                    idByName("React"), idByName("Flask"), idByName("MongoDB"),
                    idByName("REST APIs"), idByName("Python"), idByName("JavaScript"),
                    idByName("OWASP Top 10"), idByName("Cybersecurity")
                ].filter(Boolean),
            },
            {
                title: "Menstrual Waste Disposal Management",
                description: "MERN app with geospatial bin locator and routes (Google Maps API); JWT auth with roles (citizen/collector/admin); pickups/users/feedback APIs.",
                github: "",
                demo: "",
                skills: [
                    idByName("MongoDB"), idByName("Express"), idByName("React"),
                    idByName("Node.js"), idByName("JWT Authentication"),
                    idByName("Google Maps API"), idByName("REST APIs")
                ].filter(Boolean),
            },
        ]);

        console.log("🌱 seed complete");
    } catch (e) {
        console.error("❌ seed failed:", e);
    } finally {
        await mongoose.disconnect();
        process.exit(0);
    }
})();