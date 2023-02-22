import React from 'react';
import './style.css'
import Slider from 'react-slick';

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
  autoplay: true,
  autoplaySpeed: 5000
  };


  return (
    <Slider {...settings}>
      {bannerInfo.map((banner) => (


<div className="banner" >
      
      <img class="bota" src="/pic2.png" alt="Bates-in-Black" title="Bates-in-Black"/>
      <div class="content">
    <div className="container1">
       <title className='draculaura'>
          Draculaura
      </title>
    
    </div>
      
      
<div className='container2'>
      <h1 className='text'>
          EXIBA SUA ESSÊNCIA GÓTICA EM CADA PASSO.
      </h1>
</div>
       <div className='botao'>
         <button className="buttonn"  href="/Entre em contato">
                COMPRE AGORA
         </button> 
        </div>
</div>
  </div>

          ))}
          </Slider>
        );
      }


export default Banner;









