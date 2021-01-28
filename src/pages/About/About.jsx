import React from 'react';
import "./About.scss";
import myPhoto from "../../assets/img/2016small.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                    provident inventore quod voluptates sequi. Quis, necessitatibus omnis
                    iusto perferendis dolores voluptate et dolorum inventore autem nemo,
                    quos eveniet magni nesciunt.
                </p>
            </div>
            <div className="about-img">
                <img
                    src={myPhoto}
                    alt="about"
                />
            </div>
        </div>
    )
}

export default About
