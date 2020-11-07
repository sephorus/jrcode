import React from 'react';
import Title from '../Title/Title';

function Projects(props) {
    const title = 'Projects'
    const subtitle = "What I've been coding"
    const { background } = props;

    return (
        <div className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle}/>
            <div class="about-inner">

            </div>
        </div>
    )
}

export default Projects;