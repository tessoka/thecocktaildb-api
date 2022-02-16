import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../utilities/ServerUrl'
import Ingredients from './Ingredients'
import Back from './Back'
import Spinner from './Spinner'
import Servermsg from './Servermsg'
import { SearchLogo } from '../svg/svg-d-texts'


const Cocktail = () => {

  // ----- SEARCH OPTION CODE -----
  const [ isSearchOpen, setIsSearchOpen] = useState(false)
  const [ searchText, setSearchText ] = useState("")
  
  const handleClickSearchToggle = () => {
    setSearchText("")
    setIsSearchOpen(!isSearchOpen)
  }

  const handleClickSearchGo = () => {
    getData(searchText)
  }


  // ----- COCKTAIL DISPLAY CODE -----
  const [ isLoading, setIsLoading ] = useState(true)
  const [ cocktailData, setCocktailData ] = useState({})
  const [ msgServer, setMsgServer ] = useState(false)

  let response = {}

  const getData = async (inputText) => {
    try {
      const res = await axios.get(backendUrl + `/api/cocktail?s=${inputText}`)
      if (res.data.drinks !== null) {
        response = res.data.drinks[0]
        setCocktailData(response)
        setMsgServer(true)
      } else {
        setMsgServer(false)
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const handleClickNewCocktail = () => {
    getData("")
  }

  useEffect(() => {
    getData("")
  }, [])




  return (
    <>

      <div className="search-box">
      {searchText !== "" && <button className="btn-search" onClick={handleClickSearchGo}>Go</button>}
        <div className="icon-bg-search" onClick={handleClickSearchToggle}>
          <svg className="search-logo" viewBox="0 0 512 512"><path d={SearchLogo} /></svg>
        </div>
      </div>

      {
      isSearchOpen &&
      <input className="search-input" type="text" placeholder="Looking for a cocktail?" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      }

      {
        isLoading ? <Spinner />
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
          <button className="btn" onClick={handleClickNewCocktail}>New Cocktail</button>
        </div>
      }
      <Back />

      {!msgServer && <Servermsg /> }
    </>
  )
}

export default Cocktail