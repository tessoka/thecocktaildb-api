import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../utilities/ServerUrl'
import Ingredients from './Ingredients'
import Back from './Back'
import { SearchLogo } from '../svg/svg-d-texts'


const Cocktail = () => {

  // ----- SEARCH OPTION CODE -----
  const [ isSearchOpen, setIsSearchOpen] = useState(false)
  const [ searchText, setSearchText ] = useState("")
  
  const handleClickSearchIcon = () => {
    setSearchText("")
    setIsSearchOpen(!isSearchOpen)
  }

  console.log(searchText)


  // ----- COCKTAIL DISPLAY CODE -----
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
      <div className="search-box">
        <div className="icon-bg-search" onClick={handleClickSearchIcon}>
          <svg className="search-logo" viewBox="0 0 512 512"><path d={SearchLogo} /></svg>
        </div>
      </div>

      {
      isSearchOpen &&
      <input className="search-input" type="text" placeholder="Looking for a cocktail?" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      }

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
          <button className="btn" onClick={getData}>New Cocktail</button>
        </div>
      }



      <Back />
    </>
  )
}

export default Cocktail