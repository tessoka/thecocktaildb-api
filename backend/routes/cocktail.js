const express = require("express")
const router = express.Router()
const axios = require('axios')

router.get("/", async (req, res, next) => {
  console.log(req.query)
  try {
    const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    res.status(200).json(response.data)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})



module.exports = router;