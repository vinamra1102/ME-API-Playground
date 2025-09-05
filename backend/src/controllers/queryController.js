const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Profile = require("../models/Profile");

// GET /api/search?q=python
exports.search = async(req, res) => {
    const q = (req.query.q || "").trim();
    const re = new RegExp(q, "i"); // case-insensitive

    const projects = await Project.find({ $or: [{ title: re }, { description: re }] })
        .select("title");
    const skills = await Skill.find({ name: re }).select("name level");

    // We only have one profile doc; return matching slices
    const profile = await Profile.findOne({
        $or: [
            { name: re }, { email: re }, { about: re },
            { "education.institution": re }, { "education.degree": re },
            { "work.company": re }, { "work.role": re }, { "work.description": re }
        ]
    }, { name: 1, email: 1, education: 1, work: 1 });

    res.json({ projects, skills, profile });
};