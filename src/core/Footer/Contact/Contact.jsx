import React from 'react';
//https://www.youtube.com/watch?v=NgWGllOjkbs&t=248s&ab_channel=RemyFamily
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_uaybf18', e.target, 'user_pm8IVqhbvbr0UI80NExWF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <>
        <div class="container">
            <div class="wrapper animated bounceInLeft">
                <div className="footer-info">
                    <h3>¡Contacta!</h3>
                    <p>Based in Your City</p>
                    
                </div>
                
                <div className="contact">

                    <form onSubmit={sendEmail}>
                        <p><input type="text" name="name" placeholder="Nombre"/> </p>

                        <p><input type="text" name="subject" placeholder="Asunto"/></p>

                        <p><input type="email" name="email" placeholder="Email"/></p>

                        <p><input type="text" name="phone" placeholder="Teléfono"/></p>

                        <p className="full"><textarea name="message" rows="5" placeholder="Mensaje"></textarea></p>

                        <p className="full"><button>Enviar</button></p>
                    </form>
                </div>
            </div>
        </div>
      </>
    )
}


export default Contact
