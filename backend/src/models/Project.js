const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    description: String,
    github: String,
    demo: String,
    // store skill ObjectIds; we'll populate when reading
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }]
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);