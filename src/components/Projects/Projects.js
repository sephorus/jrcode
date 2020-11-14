import React from 'react';
import Title from '../Title/Title';
import img from '../../imgs/project2.png';
import project3 from '../../imgs/project3.png';
import project4 from '../../imgs/project4.png';

function Projects(props) {
    const title = 'Projects'
    const subtitle = "What I've been coding"
    const { background } = props;

    return (
        <div className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle}/>
            <div class="projects module">
                <div class="project-item">
                    <img src={img} />
                    <h1 className="headlin6">Ramos Code</h1>
                    <h1 className="body2">Web Design</h1>
                </div>
                <div class="project-item">
                    <img src={project3} />
                    <h1 className="headlin6">Bellingham Real Estate Company</h1>
                    <h1 className="body2">Web Design</h1>
                </div>
            </div>
        </div>
    )
}

export default Projects;