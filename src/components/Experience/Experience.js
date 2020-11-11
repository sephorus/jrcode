import React from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';

function Experience(props) {
    const title = "Experience"
    const subtitle = "Where I've been coding"
    const { background } = props;

    const cardInfo = {
        title: 'Web Designer',
        subtitle: 'Western Washington University',
        caption: 'April 2019 - September 2019',
        desc: `Responsible for maintaining and developing the Western 
                Washington University's Office of Sustainability (OS) 
                website along with other projects within the office. Other
                 duties may include helping the Media Coordinator with outreach
                  planning and assisting other OS employees in a technical manner.`
    }

    const cardInfo2 = {
        title: 'CodeU Participant',
        subtitle: 'Google',
        caption: 'February 2019 - April 2019',
        desc: `Google's CodeU is an invite-only virtual program designed for aspiring 
        technologists who have an interest in building new tools and connecting with a 
        wider tech community. During this 10-week program, I collaborated with a team of 
        peers to design and implement a web application using Java, JavaScript, HTML, and 
        CSS, leveraging various Google Cloud Platform APIs.`
    }

    const cardInfo3 = {
        title: 'Web Designer',
        subtitle: 'Western Washington University',
        caption: 'March 2018 - September 2018',
        desc: `My responsibilities included building and maintaining websites for ResTek and
         Western Washington University's Residences, contributing to an existing style guide
          within team-established conventions, and conducting usability tests to enhance 
          accessibility. Also worked with students and staff within the University Residences to 
          create and update content accurately, reliably, and on-time.`
    }

    return (
        <div id="experience" className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle}/>
            <div class="about-inner">

                <Card 
                    title={cardInfo.title} 
                    subtitle={cardInfo.subtitle}
                    caption={cardInfo.caption}
                    desc={cardInfo.desc}
                />

                <Card 
                    title={cardInfo2.title} 
                    subtitle={cardInfo2.subtitle}
                    caption={cardInfo2.caption}
                    desc={cardInfo2.desc}
                />

                <Card 
                    title={cardInfo3.title} 
                    subtitle={cardInfo3.subtitle}
                    caption={cardInfo3.caption}
                    desc={cardInfo3.desc}
                />

            </div>
        </div>
    )
}

export default Experience;