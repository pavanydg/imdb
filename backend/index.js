const express = require('express')
const cors = require("cors")
const router = require('./routes/movie.js')
const app = express();
app.use(cors())
app.use(express.json())

app.use("/api",router)


console.log("app is listening at port 3000");
app.listen(3000)
