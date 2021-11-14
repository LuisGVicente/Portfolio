import React from "react";
import "./Slider.scss";
import notapps from '../../assets/img/notapps.PNG';
import portfolio from '../../assets/img/portfolio.png';
import pd from '../../assets/img/pd.png';
import visteme from '../../assets/img/vistemeyveras.jpg';
import iker from '../../assets/img/ikerlopez.jpg';

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
  {
    src:
    visteme,
    alt: "Proyecto 4: Vísteme y verás",
    desc: "Proyecto 4: Vísteme y verás",
    href: "https://vistemeyveras.es/",
  },
  {
    src:
    iker,
    alt: "Proyecto 5: Iker López Arquitecto",
    desc: "Proyecto 5: Iker López Arquitecto",
    href: "https://ikerlopez.com/",
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
