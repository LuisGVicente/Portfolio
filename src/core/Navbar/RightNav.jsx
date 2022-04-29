import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
list-styled: none;
display: flex;
flex-row: row nowrap;

li {
    list-style: none;
    display: inline-block;
    padding: 30px 0;
}

@media (max-width: 630px) {
    flex-flow: column nowrap;
    background: linear-gradient(to bottom, black 40%, rgb(38, 38, 38) 70%, transparent 100%);;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 2.5rem;
    transition: transform 0 ease-in-out
}
`;

const RightNav = ({open}) => {

    const location = useLocation();
    const history = useHistory();

    const combo = () => {
        history.push('/#contact');
        window.scrollTo(0,5500)
    }

    const scrolling = () => {location.pathname !== "/timeline" ?  window.scrollTo(0,4000) : combo()}



    return (
    <Ul open={open}>
        <li><a href="/#about" className="menu__link">Sobre mí</a></li>
        <li><a href="/#projects" className="menu__link">Proyectos</a></li>
        <li><a href="/timeline" className="menu__link">Experiencia</a></li>
        <li><a href="/#contact" className="menu__link" onClick={() => scrolling()}>Contacto</a></li>
    </Ul>
    )
}

export default RightNav
