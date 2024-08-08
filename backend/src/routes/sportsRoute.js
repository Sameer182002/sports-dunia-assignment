const express = require('express');
const router = express.Router();
const sportsController = require("../controller/sportsController")

router.get('/type',sportsController.getUniqueSportsTypes)

module.exports = router