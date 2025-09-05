const router = require("express").Router();
const { search } = require("../controllers/queryController");

router.get("/search", search);

module.exports = router;