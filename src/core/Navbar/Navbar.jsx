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
            <div className="navbar-logo" onClick={toTheTop}><span>Luis </span>G. Vicente</div>
            <div className="navbar__max-width">
            <Burguer/>
            </div>
            
        </div>
    )
}

export default Navbar
