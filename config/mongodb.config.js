const mongoose = require('mongoose');
const { MONGODB_URI } = require("./index");

const options = {
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true,
     useFindAndModify: false
};

module.exports = async () => {
     try {
          await mongoose.connect(MONGODB_URI, options)
          console.log(`:::> Connected to MongoDB database ${ MONGODB_URI }`)
     } catch (error) {
          console.log("<::: Couldn't connect to database ", error)
     }
};