import React from 'react';
import Title from '../Title/Title';
import { TextField } from '@material-ui/core';

function Contact(props) {
    const title = 'Contact'
    const subtitle = "How to contact me"
    const { background } = props;

    return (
        <div>
            <div id="contact"  className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
                <Title title={title} subtitle={subtitle}/>
                <div className="contact-section">
                    <div className="contact-item module">
                        <span class="material-icons">map</span>
                        <h1 className="headline6">Location</h1>
                        <p className="body1">Bellingham, USA</p>
                    </div>
                    <div className="contact-item module">
                        <span class="material-icons">phone</span>
                        <h1 className="headline6">Phone</h1>
                        <p className="body1">(425) 586-0951</p>
                    </div>
                    <div className="contact-item module">
                        <span class="material-icons">email</span>
                        <h1 className="headline6">Email</h1>
                        <p className="body1">ramos.joeled@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;