import './about.css'
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { BsFillHexagonFill } from 'react-icons/bs';
import { FaBeer } from 'react-icons/fa';


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
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      desc: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    },
    {
      icon: hexagonBlue,
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
    },
    {
      icon: hexagonOrange,
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: hexagonBlue,
      date: '2006 - 2008',
      title: 'Web Designer',
      subtitle: 'San Francisco, CA',
      desc: 'User Experience, Visual Design',
    },
    {
      icon: hexagonOrange,
      date: 'April 2013',
      title: 'Content Marketing for Web, Mobile and Social Media',
      subtitle: 'Online Course',
      desc: 'Strategy, Social Media',
    },
    {
      icon: hexagonBlue,
      date: 'November 2012',
      title: 'Agile Development Scrum Master',
      subtitle: 'Certification',
      desc: 'Creative Direction, User Experience, Visual Design',
    },
    {
      icon: hexagonOrange,
      date: '2002 - 2006',
      title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
      subtitle: 'Bachelor Degree',
      desc: 'Creative Direction, Visual Design',
    },
   
  ];
  return (
  
    <section className="landing-page">
    {/*================================================ ABOUT US ========================================================== */}
      <div className="contentAbout">
        <div className="containerAbout">
          <div className="infoAbout">
            <h1>Nossa Proposta</h1>
            <p>
              Somos uma empresa especializada em integração de estágio na modalidade não obrigatório dos 
              níveis de ensino médio, superior e profissionalizante. Atuando há sete anos atendemos todos
              os seguimentos do mercado a nível nacional.
            </p>
            <button>Fale Conosco</button>
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png"/>
          </div>
        </div>
        
      </div>


 
      <div className="section-head ">
          <h4><span>Gestão de </span> DH</h4>
          <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
            cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores

          </p>
        </div>

{/*====================================================== TIMELINE================================================================= */}

    <section className='landing-page-timeline'>

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


      </section>

    </section>
  )
  }
