import React from 'react';
import styled from 'styled-components';

const RightNav = ({open}) => {

    const Ul = styled.ul`
        list-styled: none;
        display: flex;
        flex-row: row nowrap;

        li {
            list-style: none;
            display: inline-block;
            padding: 30px 0;
        }

        @media (max-width: 600px) {
            flex-flow: column nowrap;
            background-color: black;
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

    return (
    <Ul open={open}>
        <li><a href="About" className="menu__link">Sobre mí</a></li>
        <li><a href="Timeline" className="menu__link">Experiencia</a></li>
        <li><a href="Contact" className="menu__link" >Contacto</a></li>
    </Ul>
    )
}

export default RightNav
