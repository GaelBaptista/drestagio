import  { useState } from 'react';
import './Article.css';
import imgCard from '../../../assests/Articleimg1.png'

export function ArticleSection() {
  const [cards] = useState([
    {
      num: "01",
      title: "Legislação para o Rh em 2023",
      description: "Mudanças que impactam sua rotina",
      // date: "6 Oct 2017",
      image: imgCard,
      link: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      num: "02",
      title: "Basic types of HTML tags",
      description: "Learn about some of the most common HTML tags…",
      date: "9 Oct 2017",
      image: "https://example.com/path/to/image2.jpg",
      link: "https://openai.com/blog/chatgpt",
    },
    {
      num: "03",
      title: "Links, images and about file paths",
      description: "Learn how to use links and images along with file paths…",
      date: "14 Oct 2017",
      image: "https://example.com/path/to/image3.jpg",
      link: "https://www.canva.com/",
    },
  ]);

  return (
  
    
    <div className="article-section">
    <div className="section-head ">
          <h4> <span> Nossos </span> Artigos</h4>
    </div>

    <div className="cards-wrapper">
      {cards.map((card) => (
        <a key={card.num} className="cardArticle" href={card.link}  target="_blank" rel="noopener noreferrer" style={{ background: `url(${card.image})` }}>
          <div>
            <h1>{card.title}</h1>
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




