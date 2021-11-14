import React from 'react';
import "./About.scss";
import myGif from "../../assets/img/My-img8bit-com-Effect.gif"

const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-desc">
                <h3>Sobre mí</h3>
                <p>
                    Siempre me gustaron las Nuevas Tecnologías pero me formé en <b>Ciencias Sociales y de la Comunicación</b>, aprendí <b>idiomas</b> y he sido <b>Manager</b> de Tesorería de una <b>multinacional española en Madrid y Sydney</b>.<br></br>
                    <br></br> Como a muchos, la pandemía me permitió tener tiempo para parar y pensar qué me gustaría hacer con mi vida los próximos años. Este portfolio es la respuesta. Ahora soy desarrollador web <b>¡and I like it!</b><br></br> 
                    <br></br>Actualmente trabajo en un equipo hispano-francés multidisciplinar en <b>Agile</b> para la empresa de energía más grande de Francia. <br></br>
                    <br></br> Ya que estás aquí, échale un vistazo a mis proyectos, conoce mi experiencia gracias a una línea cronológica o ponte en contacto conmigo si puedo ayudarte en algo.
                </p>

            </div>
            <div className="about-img">
                <img src={myGif} alt="about-gif"/>
            </div>
        </div>
    )
}

export default About
