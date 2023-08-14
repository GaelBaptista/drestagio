import './video.css'
import Video1 from './asstesVideo/video1.mp4'

export function Video () {

  
  return (
    <section>
      <div className="section-head ">
          <h4><span>Gestão de </span> DH</h4>
          <p className='gestaodh'>Promover uma gestão do desenvolvimento humano (DH) significa transformar as vivências e habilidades de
            cada trabalhador em um recurso muito valioso para o crescimento da empresa e do desenvolvimento dos colaboradores

          </p>
        </div>


        <div className="container-video">
      <div className="video-container">
          <div className="video"><video src={Video1} muted></video></div>
          <div className="video"><video src={Video1} muted></video></div>
          <div className="video"><video src={Video1} muted></video></div>
          <div className="video"><video src={Video1} muted></video></div>
          <div className="video"><video src={Video1} muted></video></div>
          <div className="video"><video src={Video1} muted></video></div>
          </div>
          <div className="popup-video">
            <span>&times;</span>
            <video src={Video1} muted autoPlay controls></video>
          </div>
        </div>
        {/* <script>
          documet.querySelectorAll('.video-container video').forEach(vid=>{
              vid.onClick =()=>{
                documet.querySelector('.popup-video').style.display='block';
                documet.querySelector('.popup-video video').src = vid.getAttribute('src')
              }
          });
           documet.querySelector('.popup-video span').onClick =()=>{
             documet.querySelector('.popup-video').style.display='block';
           }
        </script> */}
    </section>
  )
}