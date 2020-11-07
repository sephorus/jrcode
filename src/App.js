import './App.css';
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

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <About background="purple"/>
      <Experience background="white"/>
      <Projects background="purple" />
      <Contact background="white" />
      <Footer />
    </div>
      // <FirebaseContext.Consumer>
      //   {firebase => (
      //     <List firebase={firebase}/>
      //   )}
      // </FirebaseContext.Consumer>
  );
}

export default App;
