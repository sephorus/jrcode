import React, { Component } from 'react';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            backgroundColor: "transparent",
            toggled: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        var height = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var width = window.screen.width;
        
        console.log(height)

        if (window.screen.width < 1000 && height > 250) {
            this.setState({
                backgroundColor: "#354498"
            })
        }

        if (height > 600) {
            this.setState({
                backgroundColor: "#354498"
            })
        } else {
            this.setState({
                backgroundColor: "transparent"
            })
        }

    }

    onToggle = () => {

        if (window.screen.width <= 1000) {
            const toggledElement = document.getElementById("navbar").children[1];
            console.log(toggledElement);
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
            <div id="navbar" class="show" style={{backgroundColor: this.state.backgroundColor}}>
                <div class="nav-left">
                    <a href="#" class="logo">jrportfolio</a>
                    <i class="material-icons md-24" id="navbar-toggle" onClick={() => this.onToggle()}>menu</i>
                </div>
                <div class="nav-right" id="navbar-toggled nav-right">
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
            </div>
        )
    }

}

export default Menu;