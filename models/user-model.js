const mongoose = require("mongoose")
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

module.exports = mongoose.model('Users', userSchema)