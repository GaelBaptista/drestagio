import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane } from 'react-icons/fa';


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
            <i className="far fa-envelope-open"><FaMapMarkerAlt className="icon" /></i>
              <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
            <i className="far fa-envelope-open"> <FaPhone className="icon" /></i>
              <div className="cta-text">
                <h4>Call us</h4>
                <span>9876543210 0</span>
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
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">portfolio</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Expert Team</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Latest News</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button><FaTelegramPlane /></button>
                </form>
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
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}


