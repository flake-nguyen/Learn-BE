const express = require("express");
const controller = require("../../controllers/client/home");

const router = express.Router();
router.get("/", controller.index);

module.exports = router;
