import Nav from '../pages/Nav'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import FirstHero from './FirstHero'
import SettingsMenu from './SettingsMenu'

const AppContainer = ({ itemLength }) => {
  const [data, setData] = useState([])
  const [muscle, setMuscle] = useState('')
  const [body, setBody] = useState('')
  const [equipment, setEquipmant] = useState('')

  const exerciseAPI = process.env.REACT_APP_RAPIDAPI

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': exerciseAPI,
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
  }, [exerciseAPI])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
      headers: {
        'X-RapidAPI-Key': exerciseAPI,
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
  }, [equipment, exerciseAPI])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
      //  url: `https://exercisedb.p.rapidapi.com/exercises/equipment/barbell`,
      headers: {
        'X-RapidAPI-Key': exerciseAPI,
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
  }, [muscle, exerciseAPI])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${body}`,
      //  url: `https://exercisedb.p.rapidapi.com/exercises/equipment/barbell`,
      headers: {
        'X-RapidAPI-Key': exerciseAPI,
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
  }, [body, exerciseAPI])

  
  return (
    <div className="mx-auto items-center justify-center">
      <FirstHero />
      <Nav />
      <SettingsMenu
        setBody={setBody}
        setMuscle={setMuscle}
        setEquipmant={setEquipmant}
      />

      {!data ? (
        <ItemList data={data} itemLength={itemLength} />
      ) : (
        <div className="grid h-48 place-items-center">
          <h2>You have reached maximum quota for ExerciseDB API</h2>
        </div>
      )}
    </div>
  )
}

export default AppContainer
