/* eslint-disable react/jsx-key */
{/* Biblioteca instalada => npm i react-alice-carousel */}

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  fortlev from "../../assets/fortlev.png"
import  oregon from "../../assets/oregon.png"
import  artek from "../../assets/artek.png"
import  tigre from "../../assets/tigre.png"
import  tramontina from "../../assets/tramontina.png"
import  genco from "../../assets/genco.png"
import  miranda from "../../assets/miranda.png"
import  dancor from "../../assets/dancor.png"
import  ebara from "../../assets/ebara.png"
import  elizabeth from "../../assets/elizabeth.png"
import  herc from "../../assets/herc.png"
import  vedacit from "../../assets/vedacit.png"
import "./Multicarousel.css"

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [
  <img src={fortlev} onDragStart={handleDragStart} role="presentation"/>,
  <img src={oregon} onDragStart={handleDragStart} role="presentation"/>,
  <img src={artek} onDragStart={handleDragStart} role="presentation"/>,
  <img src={tigre} onDragStart={handleDragStart} role="presentation"/>,
  <img src={tramontina} onDragStart={handleDragStart} role="presentation"/>,
  <img src={genco} onDragStart={handleDragStart} role="presentation"/>,
  <img src={miranda} onDragStart={handleDragStart} role="presentation"/>,
  <img src={dancor} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ebara} onDragStart={handleDragStart} role="presentation"/>,
  <img src={elizabeth} onDragStart={handleDragStart} role="presentation"/>,
  <img src={herc} onDragStart={handleDragStart} role="presentation"/>,
  <img src={vedacit} onDragStart={handleDragStart} role="presentation"/>
];

const Gallery = () => {
  return (
    <AliceCarousel 
        mouseTracking 
        items={items} 
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={true}
        disableDotsControls
        disableButtonsControls
    />
  );
}

export default Gallery;