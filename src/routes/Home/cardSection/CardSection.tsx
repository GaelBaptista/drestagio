import './cardSection.css'
import { MdGroups2, MdAttachMoney, } from 'react-icons/md'

export function CardSection () {
  return (
   
<div className="feat bg-gray pt-5 pb-5">
    <div className="containerCard">
      <div className="row">
        <div className="section-head col-sm-12">
          <h4><span>Why Choose</span> Me?</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown book.</p>
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
  </div>

   

  )

}