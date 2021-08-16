const User = require("./models/user-model")
const passAuth = require("./middleware/password.middleware")

let adminName = "admin",
    userName = "user",
    password = "Password&123",
    email = "admin@testmail.com",
    userEmail = "user@testmail.com"
    role = "admin"

async function adminUser(name, password, email, role) {
    try {
        const checkUser = await User.findOne({email: email})
        if (checkUser) {
            console.log(`User dey before`)
            console.log(`Here is the login details for user, email: ${email}, password: ${password}`)
            return
        }
        let unhashPassword = password
        password = passAuth.hashPassword(password)
        await new user({
            name,
            password,
            email,
            role
        }).save()
        console.log(`Here is the login details for ${role}, email: ${email}, password: ${unhashPassword}`)
    }  catch (error) {
        throw error
    }
}

async function normalUser(name, password, email) {
    try {
        const checkUser = await User.findOne({email: email})
        if (checkUser) {
            console.log(`User dey before`)
            console.log(`Here is the login details for user, email: ${email}, password: ${password}`)
            return
        }
        let unhashPassword = password
        password = passAuth.hashPassword(password)
        await new user({
            name,
            password,
            email
        }).save()
         console.log(`Here is the login details for user, email: ${email}, password: ${unhashPassword}`)
    } catch (error) {
      throw error  
    }
}

adminUser(adminName, password, email, role)
normalUser(userName, password, userEmail)