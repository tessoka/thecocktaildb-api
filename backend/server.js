const express = require("express")
const app = express()
const cors = require("cors")


// CHECK if server
app.use("/", (req, res, next) => {
  console.log("up and running")
  next()
})


// IMPORT ROUTES
const cocktailRoute = require("./routes/cocktail")

// MIDDLEWARES
app.use(cors())
app.use(express.json())


// ROUTE MIDDLEWARES
app.use("/api/cocktail", cocktailRoute)






app.listen(5000)