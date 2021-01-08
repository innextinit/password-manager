const express = require('express')
const router = express.Router()
const generatePW = require("../controller/pwd-generator")

router.post(
    "/",
    generatePW.generatePassword
)

module.exports = router