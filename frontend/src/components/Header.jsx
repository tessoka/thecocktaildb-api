import React, { useState, useEffect } from 'react'
import { RocketLogo } from '../svg/svg-d-texts'


const Header = () => {

  return (
    <header>
      <div className="logo-box">
        <svg className="rocket-logo" viewBox="0 0 512 512"><path d={RocketLogo} /></svg>
        <p className="small-the">The</p>
        <p>RocketLab</p>
      </div>
    </header>
  )
}

export default Header