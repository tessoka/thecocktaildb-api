import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '../svg/svg-d-texts'

const Back = () => {
  return (
    <Link to="/">
      <div className="back-bg">
        <svg className="back-arrow" viewBox="0 0 512 512"><path d={ArrowBack} /></svg>
      </div>
    </Link>
  )
}

export default Back