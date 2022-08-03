import React from 'react';
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>Custodian Site</a>
        <ul>
                <li><a href='/home'>Home</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/Packages'>Packages</a></li>
                <li><a href='/cart'>Cart</a></li>
        </ul>
    </nav>
  )
}

export default Nav