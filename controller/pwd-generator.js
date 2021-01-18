const Password = require("../models/save-password-model")
const jwt = require("jsonwebtoken")
const { PASSWORD_KEY, APP_NAME, url } = require("../config/index")

class generatePw{

    static async generatePWInfo(req, res, next) {
        try {
            let { passwordl } = req.body
            res.json( (await generatePw.generatePassword(passwordl)) )
        } catch (error) {
            next(error)
        }
    }

    static async generatePassword(value) {

    /*
    Math.floor round down the number generated by Math.random
    Multiple the random value by 10 for number, 26 for alphabet
    Add the UTF-16 code unit that works with the .fromCharCode() function to create a string
        from the sequence of value added i.e (48 for number, 97 for lowercase and 65 for uppercase)
    Instead of using the Chart Code for the symbol, got all the symbol I want 
        and did the same math to get random symbol
    */
        let pwd = ""
            while( !pwd || pwd.length < value ) {
                let symbol = "~!@#$%^&*()_+=-{}][|\"`';:,.<>/? "
                pwd += String.fromCharCode(Math.floor(Math.random()*26)+97)
                    + String.fromCharCode(Math.floor(Math.random()*26)+65)
                    +String.fromCharCode(Math.floor(Math.random()*10)+48)
                    + String.fromCharCode(Math.floor(Math.random()*26)+97)
                    + String.fromCharCode(Math.floor(Math.random()*26)+65)
                    + symbol[Math.floor(Math.random()*symbol.length)].slice(-9)
            }

            return pwd.substring(0, value)
    }

    static async saveNewPwInfo(req, res, next) {
        try {
            const user = req.user._id
            const { savePassword, siteName } = req.body

            const token = jwt.sign(
                {
                    userId: user,
                    siteName: siteName,
                    savePassword: savePassword
                }, 
                PASSWORD_KEY,
                {
                    noTimestamp: true,
                    issuer: APP_NAME
                }
            )

            await new Password(
                { 
                    userId: user,
                    siteName: siteName,
                    savePassword: token
                }
            ).save()

            res.redirect(`http://${url.BASE_URL}/password/`)

        } catch (error) {
            next(error)
        }
    }

    static async getSavePw(req, res, next) {
        try {
            const user = req.user
            let data = []
            
            const token = await Password.find({ userId: user._id })

            await token.forEach(tokenInfo => {
                let info = jwt.verify(
                    tokenInfo.savePassword,
                    PASSWORD_KEY, 
                    {
                        ignoreExpiration: true,
                        issuer: APP_NAME
                    }
                )
                data.push({info})
            })
            res.json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = generatePw