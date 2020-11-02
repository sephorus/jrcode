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
        console.log("Scrolled!");
        const { prevScrollpos } = this.state;
        const currentScrollpos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollpos;

        this.setState(() => ({
            prevScrollpos: currentScrollpos, 
            visible
        }))
    }

    // onToggle = () => {
    //     const toggleElement = document.getElementById("navbar-toggled");
    //     const el = document.getElementById("navbar-toggle");
    //     const display = toggleElement.style.display
    //     if (display === "" || display === "none") {
    //         toggleElement.style.display = "flex"
    //         el.innerHTML = "close"
    //     } else if (display === "flex") {
    //         toggleElement.style.display = "none"
    //         el.innerHTML = "menu"
    //     }

    onToggle = () => {

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

    render() {
        return (
            <nav id="navbar" className={!this.state.visible ? 'navbar-hidden': ""}>
                <div class="nav-left">
                    <a href="#" class="logo">jrportfolio</a>
                    {
                        this.state.toggled && <i class="material-icons md-24" id="navbar-toggle" onClick={() => this.onToggle()}>close</i>
                    }
                    {
                        !this.state.toggled && <i class="material-icons md-24" id="navbar-toggle" onClick={() => this.onToggle()}>menu</i>
                    }
                </div>
                <div class="nav-right" id="navbar-toggled">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        )
    }

}

export default Menu;