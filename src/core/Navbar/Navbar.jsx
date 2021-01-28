import React from 'react';
import './Navbar.scss';

const Navbar = ({isScrolling}) => {

    //Nos permite subir hasta la parte de arriba de la pantalla al clickar sobre la navbar
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };

    return (
        <div className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>Luis G. Vicente</div>
            <div className="navbar__max-width">
                <ul className="menu">
                    <li className="menu__list"><a href="About" className="menu__link">Sobre mí</a></li>
                    <li className="menu__list"><a href="Timeline" className="menu__link">Cronología</a></li>
                    <li className="menu__list"><a href="Contact" className="menu__link" >Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
