import React from 'react';
import "./Cover.scss";
import coverVideo from  "../../assets/media/pexels-pcdesk.mp4";
import Typical from 'react-typical';

const Cover = () => {


    return (
        <div className="cover-container" id="cover">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <div className="cover-content">
                <p className="text-welcome">¡Bienvenidos! Mi nombre es</p>
                <h1 className="text-main">Luis García Vicente</h1>
                <p className="text-secondary">
                <Typical
                        className="text-job"
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Desarrollador Web.',
                            1000,
                            'JavaScript, CSS, MongoDB, Agile...',
                            1000,
                            'Gestor de Equipos.',
                            1000,
                            'En español, inglés y francés.',
                            1000
                        ]}
                    /></p>
            </div>
        </div>
    )
}

export default Cover
