import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/ricks'}>API de Ricks</Link>
        </nav>
    </div>
  )
}

export default Navbar
