import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/signup" className="nav-link"><span><img className='home-icon' src="https://img.icons8.com/material-outlined/344/home--v2.png"/> </span>
            Main</NavLink>
            <NavLink to="/my_account" className="nav-link">My Account</NavLink>
            <NavLink to="/my_auctions" className="nav-link">My Auctions</NavLink>
            <NavLink to="/my_purchases" className="nav-link">Purchases</NavLink>

            
        </div>
    );
}

export default NavBar;