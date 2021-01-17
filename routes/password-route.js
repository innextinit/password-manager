const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth.middleware")
const generatePw = require("../controller/pwd-generator")

router.get("/", (req, res) => {
    res.json({message: `welcome page`})
})

router.post(
    "/",
    generatePw.generatePWInfo
)

router.post(
    "/new",
    auth.decodeToken,
    generatePw.saveNewPwInfo
)

module.exports = router