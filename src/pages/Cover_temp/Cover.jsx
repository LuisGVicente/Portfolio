import React from 'react';
import "./Cover.scss";
import Typical from 'react-typical';

const Cover = ({isScrolling}) => {
    let datared = "https://player.vimeo.com/external/368782010.hd.mp4?s=088e6bfe5ceba83d5eddb7160861a276e4a26a11&profile_id=175&oauth2_token_id=57447761";
    let cassette = "https://player.vimeo.com/external/481168784.hd.mp4?s=d895c338a81434a8726143c33d496f8e7b88d05c&profile_id=175&oauth2_token_id=57447761";
    let ink = "https://player.vimeo.com/external/365128226.hd.mp4?s=cc1d27493cb4e8c4b5b12ba1aed7b59a838099f5&profile_id=175&oauth2_token_id=57447761";
    return (
        <div className="cover-container" id="cover">
            <video className="video" src={cassette} autoPlay loop muted/>
            <div className="cover-content">
                <p className="text-welcome">¡Bienvenidos! Mi nombre es</p>
                <h1 className="text-main">Luis <span className="text-main__border">García Vicente</span></h1>
                {isScrolling < 10 ? 
                <p className="text-secondary">
                <Typical
                        className="text-job"
                        loop={1}
                        wrapper="b"
                        steps={[
                            'Desarrollador Web.',
                            600,
                            'JavaScript, CSS, MongoDB, Agile...',
                            600,
                            'Gestor de Equipos.',
                            600,
                            'En español, inglés y francés.',
                            600,
                            'Desarrollador Web.',
                            1000
                        ]}
                    /></p> : <p className="text-secondary text-job">Desarrollador web.|</p>}
            </div>
        </div>
    )
}

export default Cover
