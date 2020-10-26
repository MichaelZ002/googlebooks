const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// for books
router.use("/books", bookRoutes);

// for google
router.use("/google", googleRoutes);


module.exports = router;