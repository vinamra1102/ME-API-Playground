const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, index: true },
    level: { type: Number, min: 1, max: 5, default: 3 }
}, { timestamps: true });

module.exports = mongoose.model("Skill", skillSchema);