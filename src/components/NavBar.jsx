import React from 'react';
import './NavBar.css';


const NavBar = ({ onLogoClick }) => {
  return (
    <nav className="navbar">
      <button className="navbar-logo" onClick={onLogoClick} title="Ir al Dashboard">
        CarMgmtApp
      </button>
      <ul className="navbar-links">
        <li>Inicio</li>
        <li>Autos</li>
        <li>Perfil</li>
      </ul>
    </nav>
  );
};

export default NavBar;
