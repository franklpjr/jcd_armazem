{/* Biblioteca instalada => npm install react-bootstrap bootstrap */}

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import churrasqueiras from "../../assets/churrasqueiras.jpg"
import tijolo2 from "../../assets/tijolo2.jpg"
import caixas from "../../assets/caixas.jpg"


function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={churrasqueiras}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tijolo2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tijolos direto da fábrica</h3>
          <p>Material 100% paletizado e a pronta entrega</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={caixas}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Linha FORTLEV de tanques e caixas</h3>
          <p>
            É muito mais proteção e conforto para sua família.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;