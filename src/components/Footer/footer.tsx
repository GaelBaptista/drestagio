

import { FaClock, FaPhone, FaEnvelopeOpen,  } from 'react-icons/fa';
import Abres from '../../assests/Logo ABRES.png'


import './footer.css'
import LogoFooter from '../../assests/Logo1.png'


// Configuração de rotas


export function Footer() {
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
            <i className="far fa-envelope-open"><FaClock className="icon" /></i>
              <div className="cta-text">
                <h4>Atendimentos</h4>
                <span>Seg-Sex 9:00-17:00</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
            <i className="far fa-envelope-open"> <FaPhone className="icon" /></i>
              <div className="cta-text">
                <h4>Fale Conosco</h4>
                <span>(85) 99247-7241</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta ">
            <i className="far fa-envelope-open"><FaEnvelopeOpen className="icon" /></i>
              <div className="cta-text">
                <h4>E-Mail</h4>
                <span>comercial@drestagio.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html"><img src={LogoFooter} className="img-fluid" alt="logo" /></a>
              </div>
              <div className="footer-text">
                <p>Na missão de integração e desenvolvimento, a Dr. Estágio se dedica a aprimorar e nutrir habilidades excepcionais, trazendo uma contribuição significativa para o sucesso contínuo da sua organização.</p>
              </div>
              <div className="footer-social-icon">
                <span>Empresa Associada</span>
                <img className='Abres' src={Abres} width={'200px'} height={'100px'}  alt="" />
                
               {/* <a href="#"><FaFacebookF className="facebook-bg" /></a>
                <a href="#"><FaTwitter className="twitter-bg" /></a>
                <a href="#"><FaGooglePlusG className="google-bg" /></a> */}
              </div>
            </div>
          </div>
      
         
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright &copy; 2023, Todos os direitos reservados <a href="#">Dr.Estágio</a></p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </footer>
  );
}


