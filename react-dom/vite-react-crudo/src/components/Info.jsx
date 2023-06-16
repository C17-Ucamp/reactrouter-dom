import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Info = () => {
    const {id} = useParams()
    const [personaje, setPersonaje] = useState({})

    const getPersonaje = async() =>{
        let url = `https://rickandmortyapi.com/api/character/${id}` 
        const {data} = await axios.get(url)
        console.log(data)
        setPersonaje(data)
    }

    useEffect(()=>{
        getPersonaje()
    },[]);

  return (
    <div>

      <img src={personaje.image} alt="" />
      <h1>{personaje.name}</h1>
      <h1>{personaje.status}</h1>
      <h1>{personaje.species}</h1>

    </div>
  )
}

export default Info
