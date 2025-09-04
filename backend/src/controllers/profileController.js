const Profile = require("../models/Profile");

exports.getProfile = async(req, res) => {
    const p = await Profile.findOne();
    if (!p) return res.status(404).json({ message: "No profile yet" });
    res.json(p);
};

exports.upsertProfile = async(req, res) => {
    const payload = req.body;
    const p = await Profile.findOneAndUpdate({}, payload, { upsert: true, new: true, setDefaultsOnInsert: true });
    res.json(p);
};