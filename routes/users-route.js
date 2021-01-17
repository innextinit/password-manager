const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth.middleware")
const controller = require("../controller/index.controller")

router.post(
  "/register",
  controller.newUser
)

router.post(
  "/login",
  controller.login
)

router.put(
  "/",
  auth.decodeToken,
  controller.userUpdate
)

router.put(
  "/updatepassword",
  auth.decodeToken,
  controller.updatePassword
)

router.post(
  "/requestpasswordreset",
  controller.requestPasswordReset
)

router.post(
  "/resetpassword",
  controller.resetPassword
)

router.delete(
  "/:id",
  auth.decodeToken,
  controller.delUser
)

module.exports = router