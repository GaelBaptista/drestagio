import './about.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaBeer} from 'react-icons/fa'
import {BsFillHexagonFill} from 'react-icons/bs'

export function About() {
  return (
  
    <section className="landing-page">
    
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


<VerticalTimeline 
className='verticalTimeline' 
lineColor='#ccc'

>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1"
    iconStyle={{ background: '#fff', color: '#FF6609',   }}
    icon={<BsFillHexagonFill/>}
    iconClassName='IconTimiline'

    
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaBeer />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

    </section>
  )
  }
