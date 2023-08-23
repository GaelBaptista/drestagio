import  { useState } from "react";
import {  NavLink } from "react-router-dom";
import "./style.css";
import {  FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram,AiFillYoutube } from 'react-icons/ai';
import {RiWhatsappFill} from 'react-icons/ri'

export function Navbar() {
  const [click, setClick] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container containerNav">
            {/* icones menu */}
            <div  className="navbar-logo" onClick={closeMobileMenu}>
              {/* Quadrado branco */}
              <div className="logo-square"></div>
              <div className="logo-text">Dr.Estágio</div>
              {/* Ícones de redes sociais */}
              <div className="social-icons">
                <a href="https://www.facebook.com/DrEstagios" target="_blank" rel="noopener noreferrer" >
                  <AiFillFacebook style={{ color: '#ff7417' }} className="social-icon" />
                </a>
                {/* Resto dos ícones de redes sociais */}
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin style={{ color: '#ff7417'}} className="social-icon " />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram style={{ color: '#ff7417' }} className="social-icon" />
                </a>
               
                <a href="https://wa.me/message/SUGMGVU6UMJOD1" target="_blank" rel="noopener noreferrer">
                  <RiWhatsappFill style={{ color: '#ff7417' }} className="social-icon" />
                </a>
                <a href="https://youtube.com/@drestagio" target="_blank" rel="noopener noreferrer">
                  <AiFillYoutube style={{ color: '#ff7417' }} className="social-icon" />
                </a>
              </div>
            </div>



            {/* menu */}
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
                <NavLink
                  
                  to="/mais"

                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Empresas Conveniadas
                </NavLink>
              </li>



              <li className="nav-item">
          <div className="nav-dropdown">
            <div className="nav-links subDrop-link  " onClick={toggleSubmenu}>
              Sobre Estágio <IoIosArrowDown className="aroow-drop" />
            </div>
            {submenuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/programa-estagio" className="nav-links">
                   Programa de Estágio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/varejo" className="nav-links">
                  Estágio para Varejo
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/farmacia" className="nav-links ">
                    Estágio para Farmácia
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </li>
             
             
              <li className="nav-item">
                <div className="nav-links subDrop-link" onClick={toggleDropdown}>
                  Mais <IoIosArrowDown />
                </div>
                {showDropdown && (
                  <ul className={click ? "dropdown-menu active" : "dropdown-menu"}>
                    <li>
                      <NavLink
                        to="/projects/contact"

                        className="nav-links"
                        onClick={closeMobileMenu}
                      >
                       Contatos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/vagas"

                        className="nav-links"
                        onClick={closeMobileMenu}
                      >
                     Vagas Estágio
                      </NavLink>
                    </li>
                  
                    <li>
                      <NavLink
                        to="/projects/servicos"
                        className="nav-links"
                        onClick={closeMobileMenu}
                      >
                      Nossos Serviços
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/projects/eventos"
                        className="nav-links"
                        onClick={closeMobileMenu}
                      >
                        ESG no Estágio
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
