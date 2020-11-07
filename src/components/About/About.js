import React from 'react';
import Title from '../Title/Title';

function About(props) {
    const title = "About"
    const subtitle = "A little about me"
    const { background } = props;

    return (
        <div className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle} />
            <div class="about-inner">
                
            </div>
        </div>
    )
}

export default About;