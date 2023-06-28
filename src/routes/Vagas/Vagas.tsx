 import "./vagas.css"
 import vaga1 from './assetsvagas/vaga1.png'

 export function Vagas () {
 return(
    <section className="hero-section">
      <div className="card-grid">
      <a className="card" href="#">
        <div className="card__background"style={{backgroundImage:`url(${vaga1})` }}></div>
        <div className="card__content">
          <p className="card__category">Vaga de Estágio</p>
         
        </div>
      </a>
      <a className="card" href="#">
        <div className="card__background" style={{backgroundImage:`url(${vaga1})` }}></div>
        <div className="card__content">
          <p className="card__category">Category</p>
          <h3 className="card__heading">Example Card Heading</h3>
        </div>
      </a>
      <a className="card" href="#">
        <div className="card__background" style={{backgroundImage:`url(${vaga1})` }}></div>
        <div className="card__content">
          <p className="card__category">Category</p>
          <h3 className="card__heading">Example Card Heading</h3>
        </div>
      </a>
      <a className="card" href="#">
        <div className="card__background" style={{backgroundImage:`url(${vaga1})` }}></div>
        <div className="card__content">
          <p className="card__category">Category</p>
          <h3 className="card__heading">Example Card Heading</h3>
        </div>
      </a>
      </div>
    </section>
    

 
    
   )
 } 

