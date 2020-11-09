import React from 'react';

function Header() {
    return (
        <header>
            <div class="header background-tint">
                <h1 class="headline1">Joel Ramos</h1>
                <p class="headline5">Aspiring Front-End Developer</p>
                <div class="media-bar">

                    <a href="https://github.com/sephorus" target="_blank" class="button button-contained button-padding">
                        <i class="material-icons md-24">code</i>
                        <span>Github</span>
                    </a>

                    <a href="https://www.linkedin.com/in/joel-ramos-948345141/" target="_blank" class="button button-contained button-padding">
                        <i class="material-icons md-24">work_outline</i>
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;