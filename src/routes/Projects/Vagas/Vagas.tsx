
// SectionVaga.jsx

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './vagas.css';

export function Vagas () {
  const sliderSettingsVagas = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="sectionVaga">
      <div >
        <span>Descubra</span>
        <h1>Vagas de Estágio</h1>
        <hr />
        <p>
        Somos uma agência de integração empresa-escola especializada em estágios não obrigatórios. 
        Em parceria com instituições de ensino, desenvolvemos um programa de estágio para atender às necessidades de 
        empresas em busca de novos talentos, proporcionando oportunidades valiosas para jovens ingressarem no 
        mercado de trabalho ou se recolocarem profissionalmente.
        </p>
        <a href="https://drestagio.gupy.io/"  target="_blank" rel="noopener noreferrer">Achar Vagas</a>
      </div>

      <div className="slider-container" style={{ width: '40%', margin: '0 auto' }}>
        <Slider {...sliderSettingsVagas}>
          <div className="swiper-slide swiper-slide--one">
          
          </div>
          <div className="swiper-slide swiper-slide--two">
            
          </div>
          {/* Adicione mais slides conforme necessário */}
          <div className="swiper-slide swiper-slide--three">
            
          </div>
          <div className="swiper-slide swiper-slide--four">
            
          </div>
          <div className="swiper-slide swiper-slide--five">
          
          </div>        
          </Slider>
      </div>

      {/* <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2" /> */}
    </section>
  );
}

