import './App.css';
import React, { Component } from 'react';
import List from './components/List/List';
import { FirebaseContext } from './components/Firebase';

/* Component imports */
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import Current from './components/Current/Current';

// jQuery import
import $ from 'jquery';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  func = (function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */
  
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })($);

  handleScroll = (event) => {
    $(".module").each((i, el) => {
      let element = $(el);
      if (element.visible(true)) {
        element.addClass("come-in");
      }
    })
  }  

  render() {
    return (
      <div>
        <Menu />
        <Header />
        <About background="purple"/>
        <Current />
        <Experience background="white"/>
        <Projects background="purple" />
        <Contact background="white"/>
        <Footer />
    </div>
    )
  }

}


export default App;
