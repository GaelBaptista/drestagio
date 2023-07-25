import './contactHome.css'
import { FaApple, FaAndroid } from 'react-icons/fa';
export function ContactHome() {
  return(
   
    <section className="ContactHome">
   
   
      
        <div className="infos">
          
          <h2 className="text-white"> Solicite uma visita de nossos Representantes</h2>
          <p className="para">
          Atendimento online e presencial
          </p>
            <button>
            <a href="#" className="btn btn-purple btn-effect">
                <FaApple />Fale Conosco
              </a>
            </button>
        </div>

        
        <div className="contact-info">
    <i className="large-icon">Icon</i>
    <p className="phone-number">+1 (123) 456-7890</p>
  </div>
       
  
      
 
  </section>
  
  )
}