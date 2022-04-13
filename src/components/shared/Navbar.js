import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {

  function isActive(navData) {
    return naveData.isActive ? "current-page" : ""
  };

  return (
    <div className="navbar">
      <NavLink to='/' className={(navData) => navData.isActive ? "navbar__link current-page" : "navbar__link"}>Home</NavLink>
      <NavLink to='/about' className={(navData) => navData.isActive ? "navbar__link current-page" : "navbar__link"}>About me</NavLink>
    </div>
  )
}

export default Navbar;
