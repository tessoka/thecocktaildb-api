import React from 'react'
import { Link } from 'react-router-dom'
import { SearchLogo, RocketLogo } from '../svg/svg-d-texts'


const Header = () => {
  return (
    <header>
      <div className="logo-box">
        <svg className="rocket-logo" viewBox="0 0 512 512"><path d={RocketLogo} /></svg>
        <p className="small-the">The</p>
        <p>RocketLab</p>
      </div>
      <div className="header-mid">
        <Link to="/cocktail">
          <button className="btn">Get Cocktail</button>
        </Link>
      </div>
      <div className="search-box">
        <div className="icon-bg-search">
          <svg className="search-logo" viewBox="0 0 512 512"><path d={SearchLogo} /></svg>
        </div>
      </div>
    </header>
  )
}

export default Header