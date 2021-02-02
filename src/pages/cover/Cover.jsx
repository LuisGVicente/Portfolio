import React from 'react';
import "./Cover.scss";
import coverVideo from  "../../assets/media/pexels-pcdesk.mp4";
import Typical from 'react-typical';

const Cover = ({isScrolling}) => {


    return (
        <div className="cover-container" id="cover">
            <video className="video" src={coverVideo} autoPlay loop muted/>
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
