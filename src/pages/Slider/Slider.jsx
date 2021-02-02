import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.scss";


const Slider = () => {
    return (
        <div id="projects" className="carousel-container">
        <div className="carousel-title">
          <h2>Mis proyectos</h2>
        </div>
  
        <Carousel
          arrows
          //debería tener tantos elem como proyectos tengamos
          slidesPerPage={3}
          infinite
          animationSpeed={200}
          centered
          offset={50}
          itemWidth={400}
          slides={Slides}
          breakpoints={{
            960: {
              slidesPerPage: 1,
              arrows: false,
              itemWidth: 250,
            },
          }}
        />
      </div>
    )
}

export default Slider
