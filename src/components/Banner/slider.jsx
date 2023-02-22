import React from 'react';
import Slider from 'react-slick';
import './style.css';

function Banner() {
  const bannerInfo = [
    {
      id: 1,
      image: "/pic2.png",
      title: "Draculaura",
      description: "EXIBA SUA ESSÊNCIA GÓTICA EM CADA PASSO.",
      button: "COMPRE AGORA"
    },
    {
      id: 1,
      image: "/pic3.png",
      title: "Draculaura",
      description: "EXIBA SUA ESSÊNCIA GÓTICA EM CADA PASSO.",
      button: "COMPRE AGORA"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000
    
  };

  return (
    <Slider {...settings}>
      {bannerInfo.map((banner) => (
        <div key={banner.id} className="banner">
          <img class="bota" src={banner.image} alt={banner.title} title={banner.title} />
          <div class="content">
            <h2 className='draculaura'>{banner.title}</h2>
            <h5 className='text'>{banner.description}</h5>
            <button className="buttonn" href="/Entre em contato">{banner.button}</button>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
