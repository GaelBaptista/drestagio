import ServicosHome from './assetsServicos/ServicosHome.png'
import './servicos.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselComponent from './Cardservico';


import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'
import {MdEmail} from "react-icons/md"

export function Servicos () {

  const testimonialSlides = [
    {
      quote:
        "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
      author: "Wanessa Souza",
      image: "assets/images/testimonial-01.jpg",
    },
    {
      quote:
        "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
      author: "Alexandra Moreira",
      image: "assets/images/testimonial-02.jpg",
    },
    {
      quote:
        "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
      author: "Franciele Siqueira",
      image: "assets/images/testimonial-03.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




  return (
    <main>
      {/* Home */}
      <section className="section" id="home">
        <div className="container grid">
          <div className="image">
            <img src={ServicosHome} alt="Mulher sorrindo penteando outra mulher" />
          </div>
          <div className="text">
            <h2 className="title">Nossos Serviços</h2>
            <p>A Dr. Estágio simplifica o processo de contratação de estagiários, permitindo que sua equipe de RH possa focar em outras atividades estratégicas dentro da organização. Nosso programa de estágio visa primordialmente proporcionar aprendizado, assegurando que nossos estagiários alcancem um desempenho profissional notável
               enquanto a empresa contratante colhe os benefícios da legislação de incentivo ao estágio sem lidar com complicações burocráticas.</p>
            <a className="button" target="_blank" href="https://wa.me/message/SUGMGVU6UMJOD1">Fale Conosco</a>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="divider-1"></div>



      {/* Divisor */}
      <div className="divider-2"></div>

      {/* Services */}
    <CarouselComponent/>
   
    
    
       {/* Divisor */}
       <div className="divider-1"></div>

   {/* Testimonials */}
   <section className="section" id="testimonials">
        <div className="container">
          <header>
            <h2 className="title">Oque nossos Clientes falam</h2>
          </header>
          <div className="testimonials">
            <Slider {...sliderSettings}>
              {testimonialSlides.map((testimonial, index) => (
                <div className="testimonial swiper-slide" key={index}>
                  <blockquote>
                    <p>
                      <span>&ldquo;</span> {testimonial.quote}
                    </p>
                    <cite>
                      <img src={testimonial.image} alt={`Foto de ${testimonial.author}`} />
                      {testimonial.author}
                    </cite>
                  </blockquote>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>


{/* Divisor */}
<div className="divider-2"></div>

{/* Contact */}
<section className="section" id="contact">
  <div className="container grid">
    <div className="text">
      <h2 className="title">Entre em contato com a gente!</h2>
      <p>
A Dr. Estágio pode ajudar sua empresa a reduzir custos e oferecer oportunidades de carreira para os talentos em ascensão.</p>
      <a href="https://wa.me/message/SUGMGVU6UMJOD1" target="_blank" className="button"><i className="icon-whatsapp"></i> Entrar em contato</a>
    </div>
    <div className="links">
      <ul className="grid">
        <li><i className="icon-phone"><BsFillTelephoneFill/></i> 85 99247-7241</li>
        <li><i className="icon-map-pin"><ImLocation2/></i> R. Amauri Souza, 346</li>
        <li><i className="icon-mail"><MdEmail/></i>comercial@drestagio.com.br</li>
      </ul>
    </div>
  </div>
</section>

{/* Divisor */}
<div className="divider-1"></div>
      </main>
  )
}