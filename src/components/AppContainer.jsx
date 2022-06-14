import Nav from '../pages/Nav'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import FirstHero from './FirstHero'
import SettingsMenu from './SettingsMenu'
import SocialList from './SocialList'

const AppContainer = ({ itemLength }) => {
  const [data, setData] = useState([])
  const [muscle, setMuscle] = useState('')
  const [body, setBody] = useState('')
  const [equipment, setEquipmant] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
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

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
      //  url: `https://exercisedb.p.rapidapi.com/exercises/equipment/barbell`,
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
  }, [equipment])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
      //  url: `https://exercisedb.p.rapidapi.com/exercises/equipment/barbell`,
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
  }, [muscle])

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${body}`,
      //  url: `https://exercisedb.p.rapidapi.com/exercises/equipment/barbell`,
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
  }, [body])

  return (
    <div className="mx-auto items-center justify-center">
      <FirstHero />
      <Nav />
      <SocialList />
      <SettingsMenu
        setBody={setBody}
        setMuscle={setMuscle}
        setEquipmant={setEquipmant}
      />
      <ItemList data={data} itemLength={itemLength} />
    </div>
  )
}

export default AppContainer
