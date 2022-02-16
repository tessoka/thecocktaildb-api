import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cocktail from './components/Cocktail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cocktail" element={<Cocktail />} />
            <Route path="*" element={<div className="center">404 - Nothing to see here...</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App