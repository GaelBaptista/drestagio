import ServicosHome from './assetsServicos/ServicosHome.png'
import './servicos.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillHeartPulseFill, BsFillMegaphoneFill } from 'react-icons/bs';
import {HiDocumentText} from 'react-icons/hi'

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
            <a className="button" target="_blank" href="https://api.whatsapp.com/send?phone=+5517992143072&text=Vamos agendar um horário!">Fale Conosco</a>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="divider-1"></div>



      {/* Divisor */}
      <div className="divider-2"></div>

      {/* Services */}
      <section className="section sectionServicos" id="services">
        <div className="container grid">
          <header>
            <h2 className="title">Nossos serviços incluem</h2>
            <p className="subtitle">Operante desde 2015 e com marca registrada no INPI, a  <strong>Dr. Estágio </strong> estende sua atuação por todo o território nacional, atualmente prestando serviços nos estados do Ceará e Rio Grande do Norte.</p>
          </header>
          <div className="cards grid">
            <div className="card">
              <i className="icon-woman-hair"><BsFillMegaphoneFill/></i>
              <h3 className="title">Divulgação de vagas</h3>
              <p>Auxiliamos na divulgação das vagas ofertadas pelas empresas conveniadas e faz o envio de currículos para o recrutamento e seleção de novos estagiários.</p>
            </div>
            <div className="card">
              <i className="icon-trim"><HiDocumentText/></i>
              <h3 className="title">Gestão de Contratos</h3>
              <p>Nós cuidamos de todos os detalhes ao contratar estagiários, incluindo documentos como Termos de Compromisso, Desligamento e Aditivos. Usamos assinaturas eletrônicas para agilizar e garantir precisão, entregando os documentos no prazo.</p>
            </div>
            <div className="card">
              <i className="icon-cosmetic"><BsFillHeartPulseFill/></i>
              <h3 className="title">Seguro de Vida</h3>
              <p>O Seguro de vida é uma obrigatoriedade imposta pela lei do Estágio e com a Dr. Estágio seus estagiários estarão devidamente protegidos e assegurados em caso de acidentes ocorridos no ambiente de trabalho.</p>
            </div>
            
          </div>
        </div>
      </section>

    
      {/* Rest of the sections... */}
       {/* Divisor */}
       <div className="divider-1"></div>

   {/* Testimonials */}
   <section className="section" id="testimonials">
        <div className="container">
          <header>
            <h2 className="title">Depoimentos de quem já passou por aqui</h2>
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
      <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
      <a href="https://api.whatsapp.com/send?phone=+5517992143072&text=Vamos agendar um horário!" target="_blank" className="button"><i className="icon-whatsapp"></i> Entrar em contato</a>
    </div>
    <div className="links">
      <ul className="grid">
        <li><i className="icon-phone"></i> 11 99845-6754</li>
        <li><i className="icon-map-pin"></i> R. Amauri Souza, 346</li>
        <li><i className="icon-mail"></i> contato@beautysalon.com</li>
      </ul>
    </div>
  </div>
</section>

{/* Divisor */}
<div className="divider-1"></div>
      
    </main>
  )
}