const env = require("dotenv")
env.config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { PORT } = process.env

// for parsing application/json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/", require("./routes/index"))

app.listen(PORT, async () => {
    //start mongodb
    await require("./config/mongodb.config")()
    console.log(`::> Server listening on port ${ PORT } @ http://localhost:${ PORT }`)
})

module.exports = app
