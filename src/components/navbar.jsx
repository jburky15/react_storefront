import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='container'>
        <div className='title'>Shop Name and Logo</div>
        <div className='navbar'>
        <div className='links'>
            <Link to="/">Store</Link>
            <Link to="/cart" className='cart'><ShoppingCart size="24" /></Link>
        </div>
    </div>
    </div>
  )
}
