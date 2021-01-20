## About This Project

This a a NodeJS based Password Manager. The problem of writing this is because I want to use more secure password without getting used to pattern of choosing password.

I used [ExpressJS](), [MongooseJS](), [Bcrypt](), [JSONWebToken](), [Crypto](), [BodyParser](), [Dotenv]() and [MongoDB]().

## Set Up

Clone this project using

```
$ git clone https://github.com/innext/password.git
```
Update the [.dev.env.json]("./.dev-env.json") with the one in [config file]("./config/env"). If want to deploy to production, include [prod.env.js]() in the [config file]("./config/env).

Change [.env.dev]("./.env.dev") to [.env]() and fill in needed details.

Install the dependencies in the [package.json]("./package.json") using the command
```
$ npm install
```
Start the service with
```
$ node index.js
```

## End Points

All endpoint are in the [postman collection]("./pass.postman_collection.json") file which can be imported to postman for testing.

Here is a quick over-view of the endpoints, where
* **{{baseURL}} is [http://localhost:{{port}}]()**
* **{{userURL}} is [http://localhost:{{port}}/users]()**
* **{{passURL}} is [http://localhost:{{port}}/password]()**

Method | Router Name | Route Params | Request Body Info | Query Params Info | Path Params | Auth
---|---|---|---|---|---|--- 
GET | Welcome Page | {{baseURl}} | - | - | - | No
POST | Register | {{userURL}}/register | name, email, password | - | - | No
POST | Login | {{userUrL}}/login | email, password | - | - | No
PUT | Update Users Name | {{userURL}} | name | - | - | Yes
PUT | Update Password | {{userURL}}/updatepassword | password, newPassword | - | - | Yes
POST | Forget Password | {{userURL}}/requestpasswordreset | email | - | - | No
POST | Reset Password | {{userURL}}/resetpassword?userId={{user._id}}&resetToken={{token}} | password | userId, resetToken | - | No
DELETE | Delete Account | {{userURL}}/:id | - | - | id | Yes
GET | All Saved Password | {{passURL}} | - | - | - | Yes
POST | Generate Random Password | {{passURL}} | passwordl | - | - | No
POST | Save Site Password | {{passURL}}/new | savePassword, siteName | - | - | No
POST | Edit Saved Site Password | {{passURL}}/:updateId | savePassword, siteName | - | updateId | Yes

## Function Calls

Here I gave all functions present and what they do

* **Controller Functions**
    Name | Params | Function
    ---|---|---
    welcome | - | sends message to read [ReadME.md]("./README.md") file
    newUser | name, pasword, email | creates new user
    login | email, password | log the user in
    userUpdate | name | update users name
    updatePassword | password, newPassword | update old password with new one
    requestPasswordReset | email | generates a token for password reset
    resetPassword | userId, resetToken, password | update the users password
    delUser | loggedin user | delete the details of loggedin user

* **GeneratePw Functions**
    Name | Params | Function
    ---|---|---
    generatePWInfo | passwordl | calls the function to generate random password
    generatePassword | length | generates password of the length given
    saveNewPwInfo | savePassword, siteName | signs the details and save tokens detail
    getSavePw | loggedin user | verify sign then display all saved password and site
    editSavePw | loggedin user, updateId (from params), savePassword, siteName | update savePw document with _id: updateId

* **Authorisation Functions**
    Name | Params | Function
    ---|---|---
    getToken | authorization | gets the authorization from the header
    decodeToken | authorization | verify authorisation gotten from getToken function
    authJSON | user | returns generated token to user with other information like role
    genToken | user | signs users detail to generate a token

* **PasswordMiddleware Function**
    Name | Params | Function
    ---|---|---
    hashPassword | password | hashes a password
    compareHash | password, userPW | compares the password claim by user with the password, userPW save to the db

## Questioning

Create an issue, would be more than happy to attend to it, but please give detailed explaination of the problem. Would love if suggestions can be made to the possible solution too. This would go a long way in fix fast.

**You think there is a bettter and more secure way to get this done? Please use the pull request, am very open to learning.**