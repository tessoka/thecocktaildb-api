import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Cocktail from './components/Cocktail'
import Back from './components/Back'
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
          </Routes>
        </main>
        <Back />
      </div>
    </Router>
  )
}

export default App