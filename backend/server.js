const express = require("express")
const app = express()
const cors = require("cors")


// MIDDLEWARES
app.use(cors())
app.use(express.json())

app.use("/", (req, res, next) => {
  console.log("up and running")
  next()
})


app.listen(5000)