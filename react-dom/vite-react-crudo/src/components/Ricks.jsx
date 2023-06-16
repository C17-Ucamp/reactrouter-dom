import Navbar from './Navbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Ricks = () => {
 //Estado estatico   
 const [info, setInfo] = useState([])

 //Estado dinamico
 const [tablainfo, setTablainfo] = useState([])
 const [busqueda, setBusqueda] = useState("")

 const getData = async() => {
    const url = 'https://rickandmortyapi.com/api/character'
    const resp = await axios.get(url)
    console.log(resp.data.results)
    setInfo(resp.data.results)
    setTablainfo(resp.data.results)
 }
 function boton(){
    let textoInput = document.getElementById('text').value 
    setBusqueda(textoInput)
    filtrar(textoInput)

 }

 const filtrar = (terminodebusqueda) =>{
    let resultado = tablainfo.filter((x)=>{
        if(x.name.toString().toLowerCase().includes(terminodebusqueda.toLowerCase())){
            return x;
        }
    });
    setInfo(resultado)
 }


 useEffect(()=>{
 getData();
 },[])

  return (
    <div>
         <Navbar/>
      <h1>Aqui van los Ricks&Mortys</h1>
      <div>
        <input type="text" id='text' />
        <button onClick={boton}>Enviar</button>
      </div>

      {
        info.map((x)=>
     <Card style={{ width: '18rem' }} key={x.id}>
      <Card.Img variant="top" src={x.image} />
      <Card.Body>
        <Card.Title>{x.name}</Card.Title>
        <Link to={`/info/${x.id}`}>Más detalle</Link>
      </Card.Body>
    </Card>
    )
      }

    </div>
  )
}

export default Ricks

