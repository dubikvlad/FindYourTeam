const Router = require("express");
const router = new Router();
const eventController = require("../controllers/eventController");

router.post("/", eventController.create);
router.get("/:id", eventController.getEvent);
router.get("/", eventController.getAll);

module.exports = router;
