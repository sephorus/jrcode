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

    return (
        <div className={`about ${background === 'purple' ? 'about-bg-secondary' : 'about-bg-main'}`}>
            <Title title={title} subtitle={subtitle}/>
            <div class="about-inner">

                <Card 
                    title={cardInfo.title} 
                    subtitle={cardInfo.subtitle}
                    caption={cardInfo.caption}
                    desc={cardInfo.desc}
                />

                <Card 
                    title={cardInfo.title} 
                    subtitle={cardInfo.subtitle}
                    caption={cardInfo.caption}
                    desc={cardInfo.desc}
                />

                <Card 
                    title={cardInfo.title} 
                    subtitle={cardInfo.subtitle}
                    caption={cardInfo.caption}
                    desc={cardInfo.desc}
                />

            </div>
        </div>
    )
}

export default Experience;