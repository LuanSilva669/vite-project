import React from 'react';
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

function Navbar() {
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
          return (
            <a key={`nav-item-${index}`} className="navbar-item" href={navItem.href}>
              {navItem.name}
            </a>
          )
        })}
        
      </div>
      <button className="button" href="/Entre em contato">
        ENTRE EM CONTATO
      </button>
    </nav>
  );
}


export default Navbar;