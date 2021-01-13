const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const { BCRYPT_SALT } = require("../config")

const newPassword = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    passphase: {
        type: String,
        require: true
    },
    savePassword: {
        type: String,
        required: true
    }
})

newPassword.pre("save", async function (next) {
    if (!this.isModified('savePassword')) return next()
  
    const hash = await bcrypt.hash(this.savePassword, BCRYPT_SALT)
    this.savePassword = hash
  
    next()
})


module.exports = mongoose.model('Password', newPassword)