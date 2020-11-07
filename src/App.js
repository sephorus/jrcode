import './App.css';
import List from './components/List/List';
import { FirebaseContext } from './components/Firebase';

/* Component imports */
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <About />
    </div>
      // <FirebaseContext.Consumer>
      //   {firebase => (
      //     <List firebase={firebase}/>
      //   )}
      // </FirebaseContext.Consumer>
  );
}

export default App;
