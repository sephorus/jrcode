import './App.css';
import List from './components/List/List';
import { FirebaseContext } from './components/Firebase';

function App() {
  return (
      <FirebaseContext.Consumer>
        {firebase => (
          <List firebase={firebase}/>
        )}
      </FirebaseContext.Consumer>
  );
}

export default App;
