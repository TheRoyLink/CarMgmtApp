import React from 'react';
import './NavBar.css';

const NavBar = ({ onLogoClick }) => {
  return (
    <nav className="navbar">
      <button
        className="navbar-logo"
        onClick={onLogoClick}
        title="Ir al Dashboard"
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 13V11L5 6C5.3 5.4 5.9 5 6.5 5H17.5C18.1 5 18.7 5.4 19 6L21 11V13" stroke="#1e7c3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="7.5" cy="16.5" r="1.5" fill="#43ea7c" />
            <circle cx="16.5" cy="16.5" r="1.5" fill="#43ea7c" />
          </svg>
        </span>
        <span>CarMgmtApp</span>
      </button>
      <div className="navbar-actions">
        <button className="navbar-btn">Botón 1</button>
        <button className="navbar-btn">Botón 2</button>
      </div>
    </nav>
  );
};

export default NavBar;
