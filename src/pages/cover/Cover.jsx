import React from 'react';
import "./Cover.scss";
import coverVideo from  "../../assets/media/pexels-pcdesk.mp4";
import Navbar from "../../core/Navbar/Navbar";

const Cover = () => {
    return (
        <>
        
        <div className="cover-container">
        <Navbar/>
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <h1 className="text-main">Name Last Name</h1>
            <p className="text-secondary">Web developer (crear menú navegación)</p>
        </div>
        </>
    )
}

export default Cover
