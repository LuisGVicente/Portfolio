import React from "react";
import Contact from "../../shared/Contact/Contact";
import "./Footer.scss";

const Footer = () => {

  return (
    <footer id="#contact" className="footer">
      
      <Contact/>

      <div className="footer-sns">
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/luisgvicente/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/LuisGVicente" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;