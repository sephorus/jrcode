import React, { Component } from 'react';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const width = window.screen.width;
        if (width <= 1000) {
            const { prevScrollpos } = this.state;
            const currentScrollpos = window.pageYOffset;
            const visible = prevScrollpos > currentScrollpos;

            this.setState(() => ({
                prevScrollpos: currentScrollpos, 
                visible
            }))
        }
    }

    onClose = () => {
        console.log(window.screen.width);
        if (window.screen.width <= 1000) {
            const el = document.getElementById('nav-right');
            console.log(el);
        } 
    }

    onToggle = () => {

        if (window.screen.width <= 1000) {
            const toggledElement = document.getElementById("navbar-toggled")
        const display = toggledElement.style.display
        if (display === "" || display === "none") {
            toggledElement.style.display = "flex"
        } else if (display === "flex") {
            toggledElement.style.display = "none"
        }

        this.setState(prevState => ({
            toggled: !prevState.toggled
        }))
        }
        
    }

    render() {
        return (
            <nav id="navbar">
                <div class="nav-left">
                    <a href="#" class="logo">jrportfolio</a>
                    <i class="material-icons md-24" id="navbar-toggle" onClick={() => this.onToggle()}>menu</i>
                </div>
                <div id="nav-right" class="nav-right" id="navbar-toggled">
                    {
                        this.state.toggled && (
                            <div className="close">
                                <i class="material-icons md-24" id="navbar-toggle" onClick={() => this.onToggle()}>close</i>
                            </div>
                        )
                    }
                    <a href="#" onClick={() => this.onToggle()}>Home</a>
                    <a href="#about" onClick={() => this.onToggle()}>About</a>
                    <a href="#experience" onClick={() => this.onToggle()}>Experience</a>
                    <a href="#contact" onClick={() => this.onToggle()}>Contact</a>
                </div>
            </nav>
        )
    }

}

export default Menu;