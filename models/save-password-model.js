const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newPassword = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Users"
        },
        siteName: {
            type: String,
            required: true
        },
        savePassword: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Password', newPassword)