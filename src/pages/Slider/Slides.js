import React from "react";
import "./Slider.scss";
import notapps from '../../assets/img/notapps.PNG';

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
    href: "",
  },
  {
    src:
      notapps,
    alt: "Proyecto 2: Notapps",
    desc: "Proyecto 2: Notapps",
    href: "https://notapps.herokuapp.com/",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
    href: "",
  },
];

const slides = slidesInfo.map((slide) => (
  
    <div className="slide-container">
      <a href={slide.href} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
      </a>
    </div>
));

export default slides;
