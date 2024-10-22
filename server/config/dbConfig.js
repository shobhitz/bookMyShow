// connect to our DB 
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL)
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("DB Connected");
})