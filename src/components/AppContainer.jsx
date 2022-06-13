import Nav from '../pages/Nav'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import MuscleGroup from './MuscleGroup'
import FirstHero from './FirstHero'

const AppContainer = ({ itemLength }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/target/biceps',
      headers: {
        'X-RapidAPI-Key': '8f30d2cbbfmsh74cc8e8bdf318d8p152c38jsn7600942b5834',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <div className="mx-auto items-center justify-center">
      <FirstHero />
      <Nav />
      <MuscleGroup />
      
      <ItemList data={data} itemLength={itemLength} />
    </div>
  )
}

export default AppContainer
