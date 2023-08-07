import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillIeSquare } from 'react-icons/ai';

export function Navbar() {
  const [click, setClick] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container containerNav">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* Quadrado branco */}
              <div className="logo-square"></div>
              <div className="logo-text">Dr.Estágio</div>
              {/* Ícones de redes sociais */}
              <div className="social-icons">
                <a href="https://www.facebook.com/">
                  <AiFillFacebook style={{ color: '#ff7417' }} className="social-icon" />
                </a>
                {/* Resto dos ícones de redes sociais */}
                <a href="https://www.facebook.com/">
                  <AiFillLinkedin style={{ color: '#ff7417' }} className="social-icon" />
                </a>
                <a href="https://www.facebook.com/">
                  <AiFillInstagram style={{ color: '#ff7417' }} className="social-icon" />
                </a>
               
                <a href="https://www.facebook.com/">
                  <FaWhatsapp style={{ color: '#ff7417' }} className="social-icon" />
                </a>
              </div>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Início
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contatos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/vagas"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Vagas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Sobre Nós
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="nav-links projectlink" onClick={toggleDropdown}>
                  Projetos <IoIosArrowDown />
                </div>
                {showDropdown && (
                  <ul className={click ? "dropdown-menu active" : "dropdown-menu"}>
                    <li>
                      <NavLink
                        to="/projects/programa-estagio"
                        className="dropdown-link"
                        onClick={closeMobileMenu}
                      >
                        Programa de Estágio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/eventos"
                        className="dropdown-link"
                        onClick={closeMobileMenu}
                      >
                        ESG no Estágio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/mais"
                        className="dropdown-link"
                        onClick={closeMobileMenu}
                      >
                        Mais
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
