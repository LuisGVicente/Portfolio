import React from 'react';
import './Navbar.scss';

const Navbar = ({isScrolling}) => {

    //Nos permite subir hasta la parte de arriba de la pantalla al clickar sobre la navbar
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };

    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>Your name</div>
        </div>
    )
}

export default Navbar
