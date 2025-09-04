const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema({
    github: String,
    linkedin: String,
    portfolio: String,
}, { _id: false });

const educationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    startYear: Number,
    endYear: Number,
}, { _id: false });

const workSchema = new mongoose.Schema({
    company: String,
    role: String,
    startDate: String, // ISO date strings keep this simple
    endDate: String,
    description: String,
}, { _id: false });

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    about: String,
    links: linksSchema,
    education: [educationSchema],
    work: [workSchema],
}, { timestamps: true });

module.exports = mongoose.model("Profile", profileSchema);