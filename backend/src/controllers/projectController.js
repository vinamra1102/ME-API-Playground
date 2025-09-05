const Project = require("../models/Project");
const Skill = require("../models/Skill");

// GET /api/projects?skill=python
exports.list = async(req, res) => {
    const { skill } = req.query;
    let q = Project.find();

    if (skill) {
        const skillDocs = await Skill.find({ name: new RegExp(skill, "i") }).select("_id");
        q = q.where("skills").in(skillDocs.map(s => s._id));
    }

    const items = await q.populate("skills").exec();
    res.json(items);
};

exports.getOne = async(req, res) => {
    const p = await Project.findById(req.params.id).populate("skills");
    if (!p) return res.status(404).json({ message: "Project not found" });
    res.json(p);
};

// POST expects { title, description, github?, demo?, skills?: [skillIds] }
exports.create = async(req, res) => {
    const p = await Project.create(req.body);
    res.status(201).json(await p.populate("skills"));
};

exports.update = async(req, res) => {
    const p = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("skills");
    if (!p) return res.status(404).json({ message: "Project not found" });
    res.json(p);
};

exports.remove = async(req, res) => {
    const p = await Project.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ message: "Project not found" });
    res.json({ deleted: true });
};