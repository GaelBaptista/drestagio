
import {HiDocumentText} from 'react-icons/hi'
import {FaCube} from 'react-icons/fa'
import {BsPersonBadgeFill} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { MdPermContactCalendar } from 'react-icons/md'



import  { useEffect, useState, ChangeEvent } from 'react';
import './Home.css';
import { CardSection } from './cardSection/CardSection'

import { ContactHome } from './ContactHome/ContactHome'
import { ArticleSection } from './ArtigoSection/Article'
import { Link } from 'react-router-dom'
import { Video } from './Video/video'


export function Home () {

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide >= 3) {
          return 1;
        } else {
          return prevSlide + 1;
        }
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(parseInt(event.target.value));
  };
  
  return (
    <>
    <section id="home" className="banner">
      <div className="sliders">
      <input
          type="radio"
          name="radio-btn"
          id="radio1"
          value="1"
          checked={currentSlide === 1}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          value="2"
          checked={currentSlide === 2}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          value="3"
          checked={currentSlide === 3}
          onChange={handleRadioChange}
        />

<div className="slide s1">
      <div className="slidearea">
        <div className="banner-title">
          <h2>
            Mais Assertividade&nbsp;
            <span>em novas contratações!</span>
          </h2>
          <h1>Programa de  <span> Estágio</span></h1>
        </div>
      </div>
    </div>
    <div className="slide s2">
      <div className="slidearea">
        <div className="banner-title">
          <h2 >
          Aumente o potencial da sua empresa&nbsp;
            <span>com nosso</span>
          </h2>
          <h1>Programa de  <span> Estágio</span></h1>
        </div>
      </div>
    </div>
    <div className="slide s3">
      <div className="slidearea">
        <div className="banner-title">
          <h2 className='h2Mobile'>
          Capacitamos profissionais por meio de estágio para atuar em&nbsp; 
            <span>diferentes setores do</span>
          </h2>
          <h1 className='h1Mobile'>mercado  <span> de trabalho</span></h1>
        </div>
      </div>
    </div>
      </div>

      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </section>

    <section className='sectionCardSlider'>
    
    <div className="quadrado-container">
        <div className="quadrado">
          <Link to='/projects/vagas'>
            <div className="icone"><HiDocumentText/></div>
            <div>Estágio Oportunidade </div>
            </Link>
        </div>
        <div className="quadrado">
            <Link to='/projects/contact'>
            <div className="icone"><MdPermContactCalendar/></div>
            <div>Nossos <br/>Contatos</div>
            </Link>
        </div>
        <div className="quadrado">
          <Link to='/projects/servicos'>
            <div className="icone"><FaCube/></div>
            <div>Novas Habilidades </div>
            </Link>
        </div>
        <div className="quadrado">
        <Link to='/projects/eventos'>

            <div className="icone"><BsPersonBadgeFill/></div>
            <div>Profissionais Qualificados</div>
            </Link>

        </div>
        <div className="quadrado-quinto">
          <a href="https://wa.me/message/SUGMGVU6UMJOD1"  target="_blank" rel="noopener noreferrer">
            <div className="icone-quinto"><IoLogoWhatsapp/></div>
            <div className="whatsapp-texto">WhatsApp</div>
            <div className="numero-grande">(85) 99247-7241</div>
            </a>
        </div>
    </div>
    </section>
  
  <CardSection/>
   
    <ContactHome/>
    <ArticleSection/>

    <Video/>

    </>
  );
}
