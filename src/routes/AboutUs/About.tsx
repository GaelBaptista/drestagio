import './about.css'
import React, { useEffect, useState }  from 'react';
import ImgAbout from '../../assests/AboutusIMG.png'
import TimelineBG from '../../assests/TimelineBG (1).png'


// Timeline
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


// icones
import { BsFillHexagonFill } from 'react-icons/bs';

import {MdGroups2, MdEmail} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'




const hexagonOrange = {
  icon: <BsFillHexagonFill icon={BsFillHexagonFill} />,
  iconStyle: { background: '#fff', color: '#FF6609' },
};
const hexagonBlue = {
  icon: <BsFillHexagonFill icon={BsFillHexagonFill} />,
  
  iconStyle: { background: '#fff', color: '#120052' },
 
};


 


export function About() {


  const timeline = [
    {
      icon: hexagonOrange,
      date: '',
      title: 'Contratação mais assertiva',
      subtitle: '',
      desc: 'Contrate inicialmente na modalidade de estágio e tenha oportunidade de observar o desempenho do estagiário antes de uma contratação definitiva.',
    },
    {
      icon: hexagonBlue,
      date: '',
      title: 'Profissionais em treinamento',
      subtitle: '',
      desc: 'O curso na área de atuação é um diferencial para o desenvolvimento profissional ',
    },
    {
      icon: hexagonOrange,
      date: '',
      title: 'Plano de carreira',
      subtitle: '',
      desc: 'O fator motivacional de uma contratação efetiva, faz com que o estagiário tenha uma visão de plano de carreira dentro da empresa',
    },
    {
      icon: hexagonBlue,
      date: '',
      title: 'Redução de turnover',
      subtitle: '',
      desc: 'Visando o crescimento dentro da organização por meio de um plano de carreira é possível reduzir a rotatividade entre os colaboradores CLT.',
    },
   
   
  ];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Ao montar o componente, atualize o estado para 85 após um pequeno atraso (opcional)
    setTimeout(() => {
      setProgress(85);
    }, 500); // Ajuste o valor do atraso conforme necessário
  }, [])

  const [Assert, setAssert] = useState(0);

  useEffect(() => {
    // Ao montar o componente, atualize o estado para 85 após um pequeno atraso (opcional)
    setTimeout(() => {
      setAssert(100);
    }, 500); // Ajuste o valor do atraso conforme necessário
  }, [])
  


  return (
  
    <section className="landing-page">
    {/*================================================ ABOUT US ========================================================== */}
    <div className="contentAbout">
      <div className="containerAbout">
        <div className="infoImageContainer">
          <div className="infoAbout">
            <h1>Nossa Proposta</h1>
            <p>
              Somos uma empresa especializada em integração de estágio na modalidade não obrigatória dos 
              níveis de ensino médio, superior e profissionalizante. Atuando há sete anos atendemos todos
              os seguimentos do mercado a nível nacional.
            </p>
            {/* <button>Fale Conosco</button> */}
          </div>

          {/* Barra de Progresso */}
          <div className="assertiveness">
            <h2>Assertividade</h2>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${progress}%` }}>
                <span>{`${progress}%`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={ImgAbout} alt="Imagem sobre o assunto" />
        </div>
      </div>
    </div>

{/* =======================================================GESTAO DE DH TITULO ================================================================ */}
 
      <div className="section-head ">
          <h4><span>Gestão de </span> DH</h4>
          <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
            cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores

          </p>
        </div>

{/*====================================================== TIMELINE================================================================= */}

    <div className='landing-page-timeline'>

        <VerticalTimeline lineColor='#ccc' >
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: '#FF6609', color: '#fff' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid #FF6609' }
              : undefined;
              

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              dateClassName="dateTimeline"
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>


      </div>



      <div className="card-sectionAbout">
      <div className="cardAbout orange-cardAbout">
        <div className="iconAbout">
          <MdGroups2 />
        </div>
        <h2 className="titleAbout" style={{color:'#fff'}}>Alguma dúvida?</h2>
        <p className="textAbout">Fale com nossa equipe:</p>
        <button className="contact-btnAbout-orange">
          <AiOutlineArrowRight /> Fale Conosco
        </button>
      </div>
      <div className="cardAbout blue-cardAbout">
        <div className="iconAbout">
          <MdEmail/>
        </div>
        <h2 className="titleAbout" style={{color:'#fff'}}>Mande um E-mail</h2>
        <p className="textAbout">Escreva para nossa equipe</p>
        <button className="contact-btnAbout-blue">
          <AiOutlineArrowRight /> Fale Conosco
        </button>
      </div>
    </div>


    
     
        
    <div className="contentAbout">
      <div className="containerAbout">
        <div className="infoImageContainer">
          <div className="infoAbout">
            <h1>Acompanhamento de Estágio </h1>
            <p>
           Temos equipes de suporte para a sua empresa e para seus estagiários 
            </p>
            {/* <button>Fale Conosco</button> */}
          </div>

          {/* Barra de Progresso */}
          <div className="assertiveness">
            <h5>Suporte a empresa pelos nosso canais de comunicações</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Assert}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Assert}%` }}>
                <span>{`${Assert}%`}</span>
              </div>
            </div>



          </div>

          {/* Asssertiv 2 */}

          <div className="assertiveness">
      
          <h5>Suporte ao estagiário Online</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Assert}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Assert}%` }}>
                <span>{`${Assert}%`}</span>
              </div>
            </div>
          </div>
{/* ASSERT 3 */}
          <div className="assertiveness">
          <h5>Envio de relatórios mensais de frequências dos estagiários</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Assert}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Assert}%` }}>
                <span>{`${Assert}%`}</span>
              </div>
            </div>



          </div>


          {/* ASSERT 3 */}
          <div className="assertiveness">
          
            <h5>Visitas presenciais na unidade</h5>
            <div className="progressContainer">
              <div className="progressBar">
                <div
                  className="progressBarFill"
                  style={{ width: `${Assert}%` }}
                />
              </div>
              <div className="progressBox" style={{ left: `${Assert}%` }}>
                <span>{`${Assert}%`}</span>
              </div>
            </div>



          </div>
        </div>

        <div className="image">
          <img src={TimelineBG} alt="Imagem sobre o assunto" />
        </div>
      </div>
    </div>

     
      

    </section>
  )
  }
