import  { useState } from 'react';
import './Article.css';
import imgCard1 from '../../../assests/rh.png'
import imgCard2 from '../../../assests/cartilha.png'
import imgCard3 from '../../../assests/leidoestagio.png'


export function ArticleSection() {
  const [cards] = useState([
    {
      num: "01",
      title: "Legislação para o Rh em 2023",
      description: "Mudanças que impactam sua rotina",
      date: "",
      image: imgCard1,
      link: "https://drive.google.com/file/d/1Ds69kWLec-JvKxU07EUGd4asecGd5Zw-/view?usp=sharing",
    },
    {
      num: "02",
      title: "Cartilha Lei do Estágio",
      description: "Aqui está nossa cartilha sobre a lei do estágio",
       date: "",
      image: imgCard2,
      link: "https://drive.google.com/file/d/1JPa4rP3r8VrCW0fGktWVhwpuT1MmUskI/view?usp=sharing",
    },
    {
      num: "03",
      title: "Lei do Estágio",
      description: "O estágio visa ao aprendizado de competências próprias da atividade profissional…",
     date: "",
      image: imgCard3,
      link: "https://drive.google.com/file/d/18AduD6DCocTHdtGK2Wj2kA2trWmp70uQ/view?usp=sharing",
    },
    
  ]);

  return (
  
    
    <div className="article-section">
    <div className="section-head ">
          <h4> <span> Saiba mais sobre </span> Estágio</h4>
    </div>

    <div className="cards-wrapper">
      {cards.map((card) => (
        <a key={card.num} className="cardArticle" href={card.link}  target="_blank" rel="noopener noreferrer" style={{ background: `url(${card.image})` }}>
          <div className='inforArticle'>
            <h1 >{card.title}</h1>
            <p>{card.description}</p>
            <div className="date">{card.date}</div>
            <div className="tags">
              <div className="tag">Saiba Mais</div>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
    
  );
}




