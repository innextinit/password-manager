const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")
// const { BCRYPT_SALT } = require("../config")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('users', userSchema)

/*
userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next()

  const hash = await bcrypt.hash(this.password, BCRYPT_SALT)
  this.password = hash

  next()
})
*/