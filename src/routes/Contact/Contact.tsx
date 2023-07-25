
import {BsFillTelephoneFill,BsWhatsapp} from 'react-icons/bs'

import {MdEmail} from "react-icons/md"
import {HiDocumentText} from "react-icons/hi"
import'./contact.css'


function Contact() {
  return (
<>
    <section className="contact">
    <div className="containerContact">
      <div className="card" style={ {color: '#ff7417'}}>
      <div className="icon">
     <BsWhatsapp/>
            </div>

     <div className="content">
      <h2>Fale Conosco!</h2>
      <span>Tire suas dúvidas conosco  </span>
      <a href="#">Converse conosco</a>
     </div>
    </div>
  </div>


  <div className="containerContact">
      <div className="card" style={ {color: '#ff7417'}}>
      <div className="icon">
     <MdEmail/>
            </div>

     <div className="content">
      <h2>Envie um E-mail!</h2>
      <span>Envie seu e-mail para nossos agentes  </span>
      <a href="#">Enviar E-mail</a>
     </div>
    </div>
  </div>





  <div className="containerContact">
      <div className="card" style={ {color: '#ff7417'}}>
      <div className="icon">
     <HiDocumentText/>
            </div>

     <div className="content">
      <h2>Envie Seu currículo   !</h2>
      <span>Entre para nosso Banco de Dados!  </span>
      <a href="#">Enviar Currículo</a>
     </div>
    </div>
  </div>
  </section>

{/*========================================================MAPA============================================================== */}
  <section className="section-map">
        <div className="section-map--area">
            <div className="section-map--info">
                    <div className="section-map--info-item">
                        <div className="section-map--info-item-img">
                           <BsFillTelephoneFill/>
                        </div>
                        <h3>
                            <a href="#">+55 85 9247-7241</a>
                            </h3>
                    </div>
                    <div className="section-map--info-item">
                        <div className="section-map--info-item-img">
                            <img src="assets/images/localizacao.png" />
                        </div>
                        Endereço completão que irá ter algum tamanho
                    </div>
                    <div className="section-map--info-item">
                        <div className="section-map--info-item-img">
                            <img src="assets/images/telefone.png" />
                        </div>
                        Endereço completão que irá ter algum tamanho
                    </div>
                    <div className="section-map--info-item">
                        <div className="section-map--info-item-img">
                            <img src="assets/images/arroba.png" />
                        </div>
                        Endereço completão que irá ter algum tamanho
                    </div>
                    
            </div>
        </div>
    </section>
</>
  );
}

export default Contact;
