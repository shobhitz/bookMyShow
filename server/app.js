const express = require("express")
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/userRoutes")
const movieRoute = require("./routes/movieRoutes")

const dbConfig = require("./config/dbConfig")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/user", userRoute)
app.use("/api/movie", movieRoute)


const PORT = 8082
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})