const env = require("dotenv")
env.config()
const express = require("express")
const app = express()
const { PORT } = process.env

app.use("/", require("./routes/index"))

app.listen(PORT, async () => {
    //start mongodb
    await require("./config/mongodb.config")()
    console.log(`::> Server listening on port ${ PORT } @ http://localhost:${ PORT }`)
})

module.exports = app