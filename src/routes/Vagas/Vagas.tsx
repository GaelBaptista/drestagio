 import "./vagas.css"
 import vaga from './assetsvagas/vaga2.png'

 export function Vagas () {
return(
  <section className="sectionvagas" id="sectionvagas">
{/* <!-- effect-1 --> */}
<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:`url(${vaga}) `}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">VAGA ITAPIPOCA</h2>
    <a href="#" className="crd-text">Inscrever-se</a>
  </div>

</div>

{/* <!-- effect-2 --> */}

<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:`url(${vaga}) `}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">VAGA ITAPIPOCA</h2>
    <a href="#" className="crd-text">Inscrever-se</a>
  </div>

</div>
{/* <!-- effect-3 --> */}
<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:`url(${vaga}) `}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">VAGA ITAPIPOCA</h2>
    <a href="#" className="crd-text">Inscrever-se</a>
  </div>

</div>

{/* <!-- effect-4 --> */}
<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:`url(${vaga}) `}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">VAGA ITAPIPOCA</h2>
    <a href="#" className="crd-text">Inscrever-se</a>
  </div>

</div>




  </section>
)
 }

