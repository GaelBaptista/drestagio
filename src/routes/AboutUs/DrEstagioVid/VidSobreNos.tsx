

import './sobrenosvid.css'
import Video1 from './OqueFazemos.mp4'

import  { useState, useRef } from 'react';


export function VidSobreNos () {
 
  const [clickedVideo, setClickedVideo] = useState<string | null>(null); // Definindo o tipo como string
  const [popupVisible, setPopupVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Adicionando a referência
  const handleVideoClick = (videoSrc: string) => { // Definindo o tipo como string
    setClickedVideo(videoSrc);
    setPopupVisible(true);
  };
  const handleClosePopup = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pausar o vídeo ao fechar o popup
      videoRef.current.currentTime = 0; // Reiniciar o vídeo para o início
    }
    setPopupVisible(false);
  };


  return (
    <section className=' VideoSectionAbout'>
      <div className="section-head about-section ">
          <h4><span>Nossa Empresa em Ação</span>Um Olhar Sucinto sobre quem somos</h4>
          {/* <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
            cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores

          </p> */}
        </div>


        <div className="container-video">
      <div className="video-container">
          <div className="video"><video src={Video1} onClick={() => handleVideoClick(Video1)}></video></div>
      </div>


          <div className={`popup-video ${popupVisible ? 'active' : ''}`}>
  <span onClick={handleClosePopup}>&times;</span>
  {clickedVideo && <video ref={videoRef} src={clickedVideo}  autoPlay controls></video>}
</div>
        </div>
      
    </section>
  )
}