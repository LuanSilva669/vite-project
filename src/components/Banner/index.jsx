import React from 'react';
import './style.css'
import Slider from 'react-slick';

const bannerInfo = [
  {
    id: 1,
    image: "/pic2.png",
    title: "Draculaura",
    description: "EXIBA SUA ESSÊNCIA GÓTICA EM CADA PASSO.",
    button: "COMPRE AGORA"
  },
  {
    id: 2,
    image: "/pic3.png",
    title: "Luna Blue",
    description: "Cada passo é uma oportunidade para expressar sua autenticidade gótica",
    button: "COMPRE AGORA"
  },
  {
    id: 3,
    image: "/picc4.png",
    title: "Spectra",
    description: "Expresse sua individualidade com a elegância sombria",
    button: "COMPRE AGORA"
  },
];

function Carrossel() {
  return (
    <Slider
      dots={false}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={false}
      autoplaySpeed={3000}
    >
      {bannerInfo.map((banner) => (
        <div key={`id-${banner.id}`} className={`banner id-${banner.id}`}>
          <img className="bota" src={banner.image} />
          <div className='title'>
            
          <h1 className={banner.title === "draculaura" ? "title" : ""}>
                {banner.title}
              </h1>
            </div>
            <div className='description'>
            
          <h2 className={banner.description === "draculaura" ? "description" : ""}>
                {banner.description}
              </h2>
            </div>
            
            <div className="botao">
              <button className="buttonn" href="/Entre em contato">
                {banner.button}
              </button>
            </div>
          </div>
    
      ))}
    </Slider>
  )
}

export default Carrossel;



