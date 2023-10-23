import React from 'react'
import Lemon from '../assets/logopicture.svg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'

function navBar() {
  return (
    <nav className='navbar'>
      <div className='navlogo'>
      <img src={Lemon} alt='Lemon Logo' className='lemonlogo'/>
      </div>
      <div className='leftSide'>
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/about">About</Link>
      </div>
      <div className='rightSide'>
        <Link to="/reservation">Reservation</Link>
        <Link to="/login">Login</Link>
        <button>
         <ReorderIcon />
        </button>

      </div>
    </nav>
  )
}

export default navBar