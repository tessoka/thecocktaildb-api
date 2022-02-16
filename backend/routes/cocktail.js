const express = require("express")
const router = express.Router()
const axios = require('axios')

router.get("/", async (req, res, next) => {
// SET URL
  let apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  if (req.query.s !== "") {
    apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.s}`
    console.log("Searched string: " + req.query.s)
  }

// FETCH API
  try {
    const response = await axios.get(apiUrl)
    console.log(response.data)
    res.status(200).json(response.data)
  } catch (error) {
    console.log("ran on error")
    res.json(error)
  }
})



module.exports = router;