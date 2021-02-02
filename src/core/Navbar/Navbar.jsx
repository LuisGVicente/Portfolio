import React from 'react';
import Burguer from './Burguer';
import './Navbar.scss';

const Navbar = ({isScrolling, page}) => {

    //Nos permite subir hasta la parte de arriba de la pantalla al clickar sobre la navbar
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };

    return (
        // <div className={`navbar  ${page === "timeline" ? "navbar navbar__timeline" : isScrolling > 20 ? "scrolling" : null}`}>
        <div className={`navbar  ${isScrolling > 20 ? "scrolling" : page === "timeline" ? "navbar navbar__timeline" : null}`}>
            <div className="navbar-logo" ><span>Luis</span><a href="/" className="menu__link__home">G. Vicente</a><i className="fas fa-arrow-up" onClick={toTheTop}></i></div>
            
            <div className="navbar__max-width">
            <Burguer/>
            </div>
            
        </div>
    )
}

export default Navbar
