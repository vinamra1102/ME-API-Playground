const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: String,
    github: String,
    demo: String,
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
S