// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillMegaphoneFill,  BsFillHeartPulseFill, BsBuildingFillGear, BsPersonFillGear } from 'react-icons/bs'; // Importe os ícones que você está usando
import{HiDocumentText} from 'react-icons/hi'

type CardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <i className="icon">{icon}</i>
      <h3 className="title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CarouselComponent = () => {
  const cardData = [
    {
      icon: <BsFillMegaphoneFill />,
      title: 'Divulgação de vagas',
      description: 'Colaboramos e auxiliamos na divulgação das vagas ofertadas pelas empresas conveniadas e realizamos  o envio de currículos para o recrutamento e seleção de novos  estagiários.',
    },
    {
      icon: <HiDocumentText />,
      title: 'Gestão de Contratos',
      description: 'Cuidamos dos aspectos burocráticos da contratação de estagiários, incluindo Termos de Compromisso, Desligamento e Aditivos, com assinatura eletrônica para eficiência.',
    },
    {
      icon: <BsFillHeartPulseFill />,
      title: 'Seguro de Vida',
      description: 'O Seguro de Vida é obrigatório por lei no Estágio e com a Dr. Estágio seus estagiários estarão  protegidos e assegurados em caso de acidentes ocorridos no ambiente de trabalho.',
    },
    {
      icon: <BsBuildingFillGear />,
      title: 'Suporte a Empresa',
      description: 'Nossa equipe de especialistas em RH, psicologia e consultoria administra-financeira está sempre à disposição para assistência abrangente em todas as áreas do programa de estágio.',
    },
    {
      icon: <BsPersonFillGear />,
      title: 'Suporte ao Estagiário',
      description: 'Disponibilizamos um canal exclusivo no qual os seus estagiários têm a possibilidade de receber atendimento, esclarecer dúvidas e formalizar a assinatura dos termos de estágio.',
    },
  ];

  const slickSettings = {
    dots: true, // Mostrar bolinhas (indicadores)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Quando a largura da tela for 1024px ou menos
        settings: {
          slidesToShow: 2, // Exibir 2 slides por vez
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Quando a largura da tela for 768px ou menos
        settings: {
          slidesToShow: 1, // Exibir apenas 1 slide por vez
          slidesToScroll: 1,
        },
      },
    ],

    // Outras opções de personalização aqui
  };

  return (
    <section className="section sectionServicos" id="services">
      <div className="container">
        <header>
          <h2 className="title">Nossos serviços incluem</h2>
          <p className="subtitle">Operante desde 2015 e com marca registrada no INPI, a <strong>Dr. Estágio </strong> estende sua atuação por todo o território nacional, atualmente prestando serviços nos estados do Ceará e Rio Grande do Norte.</p>
        </header>
        <Slider {...slickSettings}>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default CarouselComponent;
