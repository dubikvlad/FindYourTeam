const Router = require("express");
const router = new Router();
const hobbyController = require("../controllers/hobbyController");
const checkRole = require('../middleware/checkRoleMiddleware')

router.post("/", checkRole('ADMIN'), hobbyController.create);
router.get("/", hobbyController.getAll);
router.get("/:id", hobbyController.getOne);

module.exports = router;
