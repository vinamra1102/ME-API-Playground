const router = require("express").Router();
const { getProfile, upsertProfile } = require("../controllers/profileController");

router.get("/", getProfile);
router.put("/", upsertProfile);

module.exports = router;