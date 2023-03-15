import React, { useState } from 'react';
import Footer from '../Footer';
import './style.css'

const navItems = [
  {
    name: "INICIO",
    href: "/Inicio"
  },
  {
    name: "SOBRE A MARCA",
    href: "#Sobre-a-marca"  
  },
  {
    name: "SOBRE A COLEÇÃO",
    href: "#Sobre-a-colecao"
  },
];

function scrollToFooter() {
  window.scrollTo({
  top: document.getElementById("rodape").offsetTop,
  behavior: "smooth"
  });
  }

function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="/logo.png"
          height="100px"
          alt="My Logo"
        />
      </div>
      <div className="navbar-menu">
        {navItems.map((navItem, index) => {
          const isActive = activeItem === navItem.name;
          return (
            <a 
              key={`nav-item-${index}`} 
              className={`navbar-item${isActive ? ' active' : ''}`} 
              href={navItem.href}
              onClick={() => handleNavItemClick(navItem.name)}
            >
              {navItem.name}
              
            </a>
          )
        })}
      </div>
      <button className="button" onClick={scrollToFooter}>
ENTRE EM CONTATO
</button>
    </nav>
  );
}

export default Navbar;
