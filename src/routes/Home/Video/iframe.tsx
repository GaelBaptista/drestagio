import './video.css'

interface YoutubeEmbedProps {
  videoId: string;
  title: string;
  videoLink: string; // Adiciona uma propriedade para o link do vídeo
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title, videoLink }) => {
  return (
    <div className='Iframe' >
      <iframe
        className="video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    <div className="info_iframe">
  <h2>{title}</h2>
  <a href={videoLink} target="_blank" rel="noopener noreferrer">
    <button>Assistir</button>
  </a>
</div>

    </div>
  );
};

