import './cardSection.css'
import { MdGroups2, MdAttachMoney, } from 'react-icons/md'

export function CardSection () {
  return (
   <section className='cardHome'>

    <div className="containerCard">
      <div className="rowCard">
        <div className="section-head ">
          <h4><span>Programa de </span> Estágio</h4>
          <p>O estágio é um ato educativo, onde serão ofertados aos candidatos oportunidades para estagiar nas empresas 
            e colocar em prática os conhecimentos teóricos adquiridos no decorrer do curso a qual estuda.  </p>
        </div>
        <div className='cardrow'>

        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Gestão de DH</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Treinar novos Talentos</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Estimular o conhecimento</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Desenvolver profissionais</p>
            </div>
            </div>
        </div>
        
        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdAttachMoney/></i></span>
            <h3>Mais Econômia</h3>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Sem vínculo empregatício</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Redução de encargos</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Sem burocracia</p>
            </div>
            </div>
        </div>

        <div >
          <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"><MdGroups2/></i></span>
            <h3>Gestão de RH</h3>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Contratação Assertiva</p>
            </div>
            <div className='list'>
            <span className='bolinha2'></span>
            <p>Estimular o conhecimento</p>
            </div>
            <div className='list'>
            <span className='bolinha1'></span>
            <p>Desenvolver profissionais</p>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
 

  </section>

  )

}