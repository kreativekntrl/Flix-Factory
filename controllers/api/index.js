const router = require("express").Router();
const postRouter = require("./post-router");
const loginRouter = require("./login-router");

router.use("/post", postRouter);
router.use("/login", loginRouter);

module.exports = router;
