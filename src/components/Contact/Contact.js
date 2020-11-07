import React from 'react';
import Title from '../Title/Title';

function Contact(props) {
    const title = 'Contact'
    const subtitle = "How to contact me"
    const { background } = props;

    return (
        <div className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle}/>
            <div class="about-inner">

            </div>
        </div>
    )
}

export default Contact;