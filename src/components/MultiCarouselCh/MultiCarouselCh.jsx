{/* Biblioteca instalada => npm i react-alice-carousel */}

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  ch1 from "../../assets/ch1.png"
import  ch2 from "../../assets/ch2.png"
import  ch3 from "../../assets/ch3.png"
import  ch4 from "../../assets/ch4.png"
import  ch5 from "../../assets/ch5.png"
import  ch6 from "../../assets/ch6.png"
import  ch7 from "../../assets/ch7.png"
import "./MulticarouselCh.css"

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
};

const items = [
  <img src={ch7} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ch3} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ch5} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ch2} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ch4} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ch6} onDragStart={handleDragStart} role="presentation"/>,
  <img src={ch1} onDragStart={handleDragStart} role="presentation"/>,
];

const GalleryCh = () => {
  return (
    <AliceCarousel 
        mouseTracking 
        items={items} 
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={true}
        disableButtonsControls
    />
  );
}

export default GalleryCh;