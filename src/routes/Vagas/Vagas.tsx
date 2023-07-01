 import "./vagas.css"
 import vaga1 from './assetsvagas/vaga1.png'

 export function Vagas () {
return(
  <section className="sectionvagas" id="sectionvagas">
{/* <!-- effect-1 --> */}
<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:' url("https://images.unsplash.com/photo-1541881702266-f2dd28ed4415?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=340")'}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">Lumière</h2>
    <p className="crd-text">And then that begins...</p>
  </div>

</div>

{/* <!-- effect-2 --> */}
<div className="crd crd--effect-2">

  <div className="crd-img" style={{backgroundImage:` url(${vaga1})`}}
   ></div>

  <div className="crd-info">
    {/* <!-- Nubes means 'clouds' (German) --> */}
    <h2 className="crd-heading">Wolken</h2>
    <p className="crd-text">And then that begins...</p>
  </div>

</div>

{/* <!-- effect-3 --> */}
<div className="crd crd--effect-3">

  <div className="crd-img" style={{backgroundImage:' url("https://images.unsplash.com/photo-1447405866403-2dc651878fd6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=340")'}}></div>

  <div className="crd-info">
    {/* <!-- الأشجار means 'trees' (Arabic) --> */}
    <h2 className="crd-heading">الأشجار<span>الأشجار</span></h2>
    {/* <!-- ...ثم يبدأ ذلك means 'and then that begins...' (Arabic)--> */}
    <p className="crd-text">...ثم يبدأ ذلك</p>
  </div>

</div>

{/* <!-- effect-4 --> */}
<div className="crd crd--effect-2">

  <div className="crd-img" style={{backgroundImage:' url("https://images.unsplash.com/photo-1447405866403-2dc651878fd6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=340")'}}></div>

  <div className="crd-info">
    {/* <!-- Nubes means 'clouds' (German) --> */}
    <h2 className="crd-heading">Wolken</h2>
    <p className="crd-text">And then that begins...</p>
  </div>

</div>
<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:' url("https://images.unsplash.com/photo-1541881702266-f2dd28ed4415?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=340")'}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">Lumière</h2>
    <p className="crd-text">And then that begins...</p>
  </div>

</div>
<div className="crd crd--effect-1">

  <div className="crd-img"   style={{backgroundImage:' url("https://images.unsplash.com/photo-1541881702266-f2dd28ed4415?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=340")'}}></div>

  <div className="crd-info">
    {/* <!-- lumière means 'light' (French) --> */}
    <h2 className="crd-heading">Lumière</h2>
    <p className="crd-text">And then that begins...</p>
  </div>

</div>

<a href="https://abubakersaeed.netlify.app/designs/d14-image-hover-effects" className="abs-site-link" rel="nofollow noreferrer" target="_blank">abs/designs/d14-image-hover-effects</a>

  </section>
)
 }

