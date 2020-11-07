import './App.css';
import List from './components/List/List';
import { FirebaseContext } from './components/Firebase';

/* Component imports */
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Experience />
    </div>
      // <FirebaseContext.Consumer>
      //   {firebase => (
      //     <List firebase={firebase}/>
      //   )}
      // </FirebaseContext.Consumer>
  );
}

export default App;
