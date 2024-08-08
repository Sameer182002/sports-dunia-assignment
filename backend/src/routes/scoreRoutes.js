const express = require('express');
const router = express.Router()
const scoreController = require("../controller/scoreController")

router.post('/', scoreController.uploadScore)
router.get('/', scoreController.getScoreDetails)

module.exports = router
