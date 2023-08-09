import './contactHome.css'

import {BsFillPersonFill} from 'react-icons/bs'


export function ContactHome() {
  return(
   
    <section className="ContactHome">
   
   
      
        <div className="infos">
          
          <h2 className="text-white" style={{color: '#fff'}}> Solicite uma visita de nossos Representantes</h2>
          <p className="para">
          Atendimento online e presencial
          </p>
            <button>
            <a href="https://wa.me/message/SUGMGVU6UMJOD1" target="_blank" rel="noopener noreferrer" className="btn btn-purple btn-effect">
              Fale Conosco
              </a>
            </button>
        </div>

        
        <div className="contact-info">
         
    <i ><BsFillPersonFill className="large-icon"/></i>
    <a href="https://wa.me/message/SUGMGVU6UMJOD1" target="_blank" rel="noopener noreferrer"><p className="phone-number">+55 (85) 99247-7241</p></a> 
  </div>
       
  
      
 
  </section>
  
  )
}