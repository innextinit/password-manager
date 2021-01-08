const express = require('express')
const router = express.Router()

router.use("/users", require("./users-route"))
router.use("/password", require("./password-route"))

module.exports = router