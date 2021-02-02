import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurguer = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 1.7rem;
    right: 50px;
    z-index: 20;
    display: none;

    @media (max-width: 630px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? 'white' : 'white'};
        border-radius: 10px;
        margin-bottom: 0.5rem;
        transform-origin: 0px;
        transition: all .3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burguer = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <StyledBurguer open={open} onClick={() => setOpen(!open)} >
            <div/>
            <div/>
            <div/>
        </StyledBurguer>
        <RightNav open={open}/>
        </>
    )   
}

export default Burguer
