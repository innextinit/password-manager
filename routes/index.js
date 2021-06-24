const express = require('express')
const router = express.Router()
const home = require("../controller/index.controller")

router.use("/users", require("./users-route"))
router.use("/password", require("./password-route"))
//router.use("/keys", require("../routes/openpgp-key"))
router.use("/", home.welcome)

module.exports = router