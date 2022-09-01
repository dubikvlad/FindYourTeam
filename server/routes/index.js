const Router = require("express");
const router = new Router();

const eventRouter = require("./eventRouter");
const userRouter = require("./userRouter");
const hobbiesRouter = require("./hobbiesRouter");

router.use("/event", eventRouter);
router.use("/user", userRouter);
router.use("/hobby", hobbiesRouter);

module.exports = router;
