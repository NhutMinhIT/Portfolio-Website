import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {


    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dju3zrc', 'template_nbcml1e', form.current, 'iHhu5oM7-VKS__OlM')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur1"
                        style={{ background: '#ABF1FF94' }}
                    >
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name...' />
                    <input type="email" name='user_email' className='user' placeholder='Email...' />
                    <textarea name="message" className='user' placeholder='Message' />
                    <input type="submit" value='Send' className='button' />
                    <span>{done && "Thank You Very Much!!"}</span>
                    <div className="blur c-blur1"
                        style={{ background: 'var(--purple)' }}>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;