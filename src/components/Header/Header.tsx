import './style.css'
import Logo from '../../assests/Logo1.png'
import { FaComments, FaClock, FaEnvelope } from 'react-icons/fa';
export function Header () {
  return (
    <div className="Header">
    <div className="logo">
      <img src={Logo} alt="Logo" className="logoimg" />
    </div>

    <div className="menu">
      <div className="info">
        <div className="info-item">
          <FaComments className="icon" style={{ color: '#FF6609', fontSize: '1.5rem' }} />
          <div className="info-content">
            <p className="info-title">Fale conosco</p>
            
            <p className="info-details">(85) 99247-7241</p> {/* Substitua pelo número desejado */}
          </div>
        </div>
        <div className="info-item">
          <FaClock className="icon" style={{ color: '#FF6609', fontSize: '1.5rem' }} />
          <div className="info-content">
            <p className="info-title">Atendimento de Seg-Sex</p>
            <p className="info-details">9:00-17:00</p>
          </div>
        </div>
        <div className="info-item">
          <FaEnvelope className="icon" style={{color: '#FF6609', fontSize: '1.5rem' }} />
          <div className="info-content">
            <p className="info-title">Mande um Email</p>
            <p className="info-details">comercial@drestagio.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}