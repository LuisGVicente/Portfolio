import React from 'react';
import Burguer from './Burguer';
import './Navbar.scss';

const Navbar = ({isScrolling}) => {

    //Nos permite subir hasta la parte de arriba de la pantalla al clickar sobre la navbar
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };

    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}><span>Luis </span>G. Vicente</div>
            <div className="navbar__max-width">
            <Burguer/>
            </div>
            
        </div>
    )
}

export default Navbar
