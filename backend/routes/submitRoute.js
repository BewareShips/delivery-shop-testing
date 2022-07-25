const express = require("express");
const router = express.Router();
const {
  createSubmit
} = require("../controller/submitController");

router.post("/", createSubmit);


module.exports = router;
