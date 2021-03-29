import React from 'react';
import "./About.scss";
import myGif from "../../assets/img/My-img8bit-com-Effect.gif"

const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-desc">
                <h3>Sobre mí</h3>
                <p>
                    La vida corre en círculos. Siempre me gustaron las Nuevas Tecnologías pero no me decidí a dedicarme a ellas profesionalmente. <br></br> Me formé en Ciencias Sociales y de la Comunicación, aprendí idiomas y he sido Manager de Tesorería de una multinacional española en Sydney.<br></br> Como a muchos, la pandemía me permitió tener tiempo para parar y pensar qué me gustaría hacer con mi vida los próximos 20 años. Este portfolio es la respuesta. Ahora soy desarrollador web ¡and I like it!<br></br> 
                    Ya que estás aquí, échale un vistazo a mis proyectos, conoce mi experiencia gracias a una línea cronológica o ponte en contacto conmigo si puedo ayudarte en algo.
                </p>

            </div>
            <div className="about-img">
                <img src={myGif} alt="about-gif"/>
            </div>
        </div>
    )
}

export default About
