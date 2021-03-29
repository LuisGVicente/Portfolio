import React from "react";
import "./Slider.scss";
import notapps from '../../assets/img/notapps.PNG';
import portfolio from '../../assets/img/portfolio.png';
import pd from '../../assets/img/pd.png';

const slidesInfo = [
  {
    src:
      notapps,
    alt: "Proyecto 1: Notapps",
    desc: "Proyecto 1: Notapps",
    href: "https://notapps.herokuapp.com/",
  },
  {
    src: portfolio,
    alt: "Proyecto 2: Portfolio",
    desc: "Proyecto 2: Portfolio",
    href: "",
  },
  {
    src:
      pd,
    alt: "Proyecto 3: PresenteDigital",
    desc: "Proyecto 3: PresenteDigital",
    href: "https://presentedigital.es",
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
