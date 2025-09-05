const Skill = require("../models/Skill");

exports.list = async(_req, res) => {
    const skills = await Skill.find().sort({ level: -1, name: 1 });
    res.json(skills);
};

exports.create = async(req, res) => {
    const s = await Skill.create(req.body); // { name, level }
    res.status(201).json(s);
};

exports.update = async(req, res) => {
    const s = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!s) return res.status(404).json({ message: "Skill not found" });
    res.json(s);
};

exports.remove = async(req, res) => {
    const s = await Skill.findByIdAndDelete(req.params.id);
    if (!s) return res.status(404).json({ message: "Skill not found" });
    res.json({ deleted: true });
};

exports.top = async(req, res) => {
    const limit = Number(req.query.limit || 5);
    const skills = await Skill.find().sort({ level: -1 }).limit(limit);
    res.json(skills);
};