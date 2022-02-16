const express = require("express")
const app = express()
const cors = require("cors")
const port = 5000

// IMPORT ROUTES
const cocktailRoute = require("./routes/cocktail")

// MIDDLEWARES
app.use(cors())
app.use(express.json())


// ROUTE MIDDLEWARES
app.use("/api/cocktail", cocktailRoute)






app.listen(port, () => console.log("Server listening on port: " + port))