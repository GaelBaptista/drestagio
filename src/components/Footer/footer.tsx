import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';


import {BsWhatsapp} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
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
                <h4>Atendimento</h4>
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
            <div className="single-cta">
            <i className="far fa-envelope-open"><FaEnvelopeOpen className="icon" /></i>
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>mail@info.com</span>
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
                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a>
              </div>
              <div className="footer-text">
                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                
               <a href="#"><FaFacebookF className="facebook-bg" /></a>
                <a href="#"><FaTwitter className="twitter-bg" /></a>
                <a href="#"><FaGooglePlusG className="google-bg" /></a>
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
              <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </footer>
  );
}


