import ServicosHome from './assetsServicos/ServicosHome.png'
import './servicos.css'




export function Servicos () {
  return (
    <section className="section-a">
    <div className="containerServicos">
      <div>
        <h1>Nossos Serviços</h1>
        <p>
        A Dr. Estágio simplifica o processo de contratação de estagiários, permitindo que sua equipe de RH possa focar em outras atividades 
        estratégicas dentro da organização. Nosso programa de estágio visa primordialmente proporcionar aprendizado, assegurando que nossos 
        estagiários alcancem um desempenho profissional notável enquanto a empresa contratante colhe os benefícios da legislação de incentivo ao 
        estágio sem lidar com complicações burocráticas.
        </p>
        <a href="#" className="btnServicos">Read More</a>
      </div>
      <img src={ServicosHome} alt="" />
    </div>
  </section>
  )
}