

import  { useEffect, useState, ChangeEvent } from 'react';
import './Home.css';


export function Home () {

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide >= 3) {
          return 1;
        } else {
          return prevSlide + 1;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(parseInt(event.target.value));
  };
  
  return (
    <section id="home" className="banner">
      <div className="sliders">
      <input
          type="radio"
          name="radio-btn"
          id="radio1"
          value="1"
          checked={currentSlide === 1}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          value="2"
          checked={currentSlide === 2}
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          value="3"
          checked={currentSlide === 3}
          onChange={handleRadioChange}
        />

<div className="slide s1">
      <div className="slidearea">
        <div className="banner-title">
          <h2>
            Mais assertividade&nbsp;
            <span>em novas contratações!</span>
          </h2>
          <h1>Programa de <span>Estágio</span></h1>
        </div>
      </div>
    </div>
    <div className="slide s2">
      <div className="slidearea">
        <div className="banner-title">
          <h2>
          Aumente o potencial da sua empresa&nbsp;
            <span>com nosso</span>
          </h2>
          <h1>Programa de <span>Estágio</span></h1>
        </div>
      </div>
    </div>
    <div className="slide s3">
      <div className="slidearea">
        <div className="banner-title">
          <h2>
         Preparamos profissionais por meio de estágio para atuar em&nbsp; 
            <span>diversas áreas</span>
          </h2>
          <h1>do mercado  <span>de trabalho</span></h1>
        </div>
      </div>
    </div>
      </div>

      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </section>
  );
}



