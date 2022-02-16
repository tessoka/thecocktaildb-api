import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../utilities/ServerUrl'
import Ingredients from './Ingredients'


const Cocktail = () => {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ cocktailData, setCocktailData ] = useState({})
  let response = {}

  const getData = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/cocktail")
      response = res.data.drinks[0]
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    setCocktailData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    console.log("useEffect was triggered")
    getData()
  }, [])

  return (
    <>
      {
        isLoading ? <div>Loading...</div>
        :
        <div className="cocktail-container">
          <h2>{cocktailData.strDrink}</h2>
          <div className="card-top"> 
            {cocktailData.strInstructions}
          </div>
          <div className="card-bot">
            <div className="card-bot-left">
              <img src={cocktailData.strDrinkThumb} alt="Cocktail Pic" />
            </div>
            <div className="card-bot-right">
              <h3>Ingerdients</h3>
              <div className="ingredients-box">
                <Ingredients cocktailData={cocktailData} />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Cocktail