import React from 'react';
import Title from '../Title/Title';
import img from '../../imgs/profile.jpg'
import resume from '../../imgs/final_resume.pdf';

function About(props) {
    const title = "About"
    const subtitle = "A little about me"
    const { background } = props;

    return (
        <div id="about" className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle} />
            <div className="about-section">
                  <img src={img} className="profile-pic"/>
                  <div class="about-info">
                      <h1 className="headline3">Joel Ramos</h1>
                      <h2 className="headline5">Aspiring Front-End Engineer</h2>
                      <p className="body1">
                          My name is Joel Ramos and I am a current fourth-year student at
                          Western Washington University studying Computer Science. I am a
                          self-motivated individual that loves to build websites and
                          web applications. When I'm not coding I'm exploring new foods, 
                          binging Netflix shows or playing soccer.
                      </p>
                      <div className="card-buttons">
                          <a href="#contact" className="button button-contained">Contact</a>
                          <a href={resume} className="button button-outlined" download>Resume</a>
                      </div>
                  </div>
               </div>
        </div>
    )
}

export default About;