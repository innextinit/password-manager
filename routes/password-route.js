const { json } = require('express')
const express = require('express')
const router = express.Router()
const generatePw = require("../controller/pwd-generator")

router.get("/", (req, res) => {
    res.json({message: `welcome page`})
})

router.post(
    "/",
    generatePw.generatePassword
)

router.post(
    "/new",
    generatePw.saveNewPw
)

module.exports = router