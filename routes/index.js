const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./book");
const googleRoutes = require("./google");

// for books
router.use("/books", bookRoutes);

// for google
router.use("/google", googleRoutes);

// for no good route 
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;