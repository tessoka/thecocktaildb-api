import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to The Cocktails experiment</h2>
      <p>This is an exercise of developing a simple website application using Node.js and Express on the server side, and React on the frontend side. The application displays information about cocktails from the free API, theCocktailDb.</p>
      <p>Click on GET COCKTAIL button or on the search icon. You can also come back to this home page by clicking on the back icon in the right bottom corner.</p>
      <Link to="/cocktail">
          <button className="btn">Get a cocktail</button>
      </Link>
    </div>
  )
}

export default Home