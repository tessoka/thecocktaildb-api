import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SearchLogo, RocketLogo } from '../svg/svg-d-texts'


const Header = () => {

  const [ isSearchOpen, setIsSearchOpen] = useState(false)
  const [ searchText, setSearchText ] = useState("")
  
  const handleClickSearchIcon = () => {
    setSearchText("")
    setIsSearchOpen(!isSearchOpen)
  }

  console.log(searchText)


  return (
    <header>
      <div className="logo-box">
        <svg className="rocket-logo" viewBox="0 0 512 512"><path d={RocketLogo} /></svg>
        <p className="small-the">The</p>
        <p>RocketLab</p>
      </div>
      <div className="header-mid">
        <Link to="/cocktail">
          <button className="btn">
            {searchText === "" ?
            "Get a Cocktail"
            :
            "Search"
            }
          </button>
        </Link>
      </div>
      <div className="search-box">
        <div className="icon-bg-search" onClick={handleClickSearchIcon}>
          <svg className="search-logo" viewBox="0 0 512 512"><path d={SearchLogo} /></svg>
        </div>
      </div>
     
      {
      isSearchOpen &&
      <input className="search-input" type="text" placeholder="Looking for a cocktail?" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      }
    </header>
  )
}

export default Header