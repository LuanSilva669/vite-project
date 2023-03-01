import React from 'react';
import './style.css'

const navItems = [
  {
    name: "INICIO",
    href: "/Inicio"
  },
  {
    name: "SOBRE A MARCA",
    href: "/sobre a marca"
  },
  {
    name: "SOBRE A COLEÇÃO",
    href: "/sobre a colecao"
  },
  // {
  //   name: "SOBRE O LUAN",
  //   href: "/luan"
  // },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="/logo.webp"
          height="150px"
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
        {/* <a className="navbar-item" href="/Inicio" >
          INICIO
        </a>
        <a className="navbar-item" href="/sobre a marca">
          SOBRE A MARCA
        </a>
        <a className="navbar-item" >
          SOBRE A COLEÇÃO
        </a> */}
      </div>
      <button className="button" href="/Entre em contato">
        ENTRE EM CONTATO
      </button>
    </nav>
  );
}


export default Navbar;