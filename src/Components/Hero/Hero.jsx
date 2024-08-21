import React from 'react'
import './Hero.css'
import sl1 from '../Assets/slider1.jpg'
import sl2 from '../Assets/slider2.jpg'
import sl3 from '../Assets/slider3.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from 'react-bootstrap';


const Hero = () => {
  return (
    // <div id="carouselExampleDark" class="carousel carousel-dark slide">
    //   <div class="carousel-indicators">
    //     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //   </div>
    //   <div class="carousel-inner">
    //     <div class="carousel-item active" data-bs-interval="10000">
    //       <img src={sl1} class="d-block w-100" alt="..."/>
    //       <div style={{color: 'White',}} class="carousel-caption d-none d-md-block">
    //         <h5>First slide label</h5>
    //         <p>Some representative placeholder content for the first slide.</p>
    //       </div>
    //     </div>
    //     <div class="carousel-item" data-bs-interval="2000">
    //       <img src={sl2} class="d-block w-100" alt="..."/>
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div>
    //     </div>
    //     <div class="carousel-item">
    //       <img src={sl3} class="d-block w-100" alt="..."/>
    //       <div class="carousel-caption d-none d-md-block">
    //         <h5>Third slide label</h5>
    //         <p>Some representative placeholder content for the third slide.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Carousel variant="dark" interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sl1}
          alt="First slide"
        />
        <Carousel.Caption style={{ color: 'white' }}>
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sl2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sl3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
