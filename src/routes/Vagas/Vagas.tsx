
// SectionVaga.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './vagas.css';

export function Vagas () {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="sectionVaga">
      <div style={{ width: '70%', margin: '0 auto' }}>
        <span>discover</span>
        <h1>aquatic animals</h1>
        <hr />
        <p>
          Beauty and mystery are hidden under the sea. Explore with our application to know about Aquatic Animals.
        </p>
        <a href="#">download app</a>
      </div>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div className="swiper-slide swiper-slide--one">
            <div>
              <h2>Jellyfish</h2>
              <p>Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria.</p>
              <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>Seahorse</h2>
              <p>Seahorses are mainly found in shallow tropical and temperate salt water throughout the world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves. Four species are found in Pacific waters from North America to South America.</p>
              <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>
          {/* Adicione mais slides conforme necessário */}
          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>Seahorse</h2>
              <p>Seahorses are mainly found in shallow tropical and temperate salt water throughout the world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves. Four species are found in Pacific waters from North America to South America.</p>
              <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>Seahorse</h2>
              <p>Seahorses are mainly found in shallow tropical and temperate salt water throughout the world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves. Four species are found in Pacific waters from North America to South America.</p>
              <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>Seahorse</h2>
              <p>Seahorses are mainly found in shallow tropical and temperate salt water throughout the world. They live in sheltered areas such as seagrass beds, estuaries, coral reefs, and mangroves. Four species are found in Pacific waters from North America to South America.</p>
              <a href="https://en.wikipedia.org/wiki/Seahorse" target="_blank" rel="noopener noreferrer">explore</a>
            </div>
          </div>        
          </Slider>
      </div>

      <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg" />
      <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2" />
    </section>
  );
}

