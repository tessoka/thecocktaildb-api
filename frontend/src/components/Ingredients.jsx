import React, { useState, useEffect } from 'react'

const Ingredients = ({cocktailData}) => {

  const [ ingredients, setIngredients ] = useState([])
  const [ measurements, setMeasurements ] = useState([])

  // GROUP ingredients & measurements to the appropirate format for easy iteration
  const groupIngredients = (cocktailData) => {
    ingredients.length = 0
    measurements.length = 0

    for (const key in cocktailData) {
      if (key.includes("strIngredient") && cocktailData[key] !== null && cocktailData[key] !== "") ingredients.push(cocktailData[key])
      if (key.includes("strMeasure") && cocktailData[key] !== null && cocktailData[key] !== "") measurements.push(cocktailData[key])
    }
    setIngredients([...ingredients])
    setMeasurements([...measurements])
  }

  useEffect(() => {
    groupIngredients(cocktailData)
  }, [cocktailData])

  return (
    <>
      <ul>
        {ingredients.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <ul>
        {measurements.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  )
}

export default Ingredients