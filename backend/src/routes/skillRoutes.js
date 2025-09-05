const router = require("express").Router();
const c = require("../controllers/skillController");

router.get("/", c.list);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/:id", c.remove);
router.get("/top", c.top);

module.exports = router;