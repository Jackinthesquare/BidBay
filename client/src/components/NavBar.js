import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/home" className="nav-link">Main</NavLink>
            <NavLink to="/home" className="nav-link">My Account</NavLink>
            <NavLink to="/home" className="nav-link">My Auctions</NavLink>
            <NavLink to="/home" className="nav-link">Purchases</NavLink>
        </div>
    );
}

export default NavBar;