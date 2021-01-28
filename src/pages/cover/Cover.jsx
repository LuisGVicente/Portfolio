import React from 'react';
import "./Cover.scss";
import coverVideo from  "../../assets/media/pexels-pcdesk.mp4";

const Cover = () => {
    return (
        <div className="cover-container" id="cover">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <div className="cover-content">
                <p className="text-welcome">¡Bienvenidos! Mi nombre es</p>
                <h1 className="text-main">Luis García Vicente</h1>
                <p className="text-secondary">y soy <span className="text-job">Desarrollador Web</span></p>
            </div>
        </div>
    )
}

export default Cover
