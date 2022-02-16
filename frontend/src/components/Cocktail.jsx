import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../utilities/ServerUrl'


const Cocktail = () => {

  const [ isLoading, setIsLoading ] = useState(true)

  const getData = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/cocktail")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log("useEffect was triggered")
    getData()
  }, [])

  return (
    <div>Cocktail</div>
  )
}

export default Cocktail