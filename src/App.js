import './App.css';
import List from './components/List/List';
import { FirebaseContext } from './components/Firebase';

/* Component imports */
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div>
      <Menu />

        <div class="card">
            <h1 class="headline6">CodeU Participant</h1>
            <h2 class="caption">Google</h2>
            <h3 class="date">10.29.2020 - 8.21.2021</h3>
            <p class="desc">Google's CodeU is an invite-only virtual program designed for aspiring technologists who have an interest in building new 
                tools and connecting with a wider tech community. During this 10-week program, I collaborated with a team of peers to design and 
                implement a web application using Java, JavaScript, HTML, and CSS, leveraging various Google Cloud Platform APIs.</p>
            <div class="card-actions">
                <button class="button button-outlined">
                    <span>Learn More</span>
                </button>
            </div>
        </div>

        <div class="card">
            <h1 class="headline6">Web Designer</h1>
            <h2 class="caption">Western Washington University</h2>
            <h3 class="date">10.29.2020 - 8.21.2021</h3>
            <p class="desc">My responsibilities included building and maintaining websites for ResTek and Western Washington University's Residences, 
                contributing to an existing style guide within team-established conventions, and conducting usability tests to enhance accessibility. 
                Also worked with students and staff within the University Residences to create and update content accurately, reliably, and on-time.</p>
            <div class="card-actions">
                <button class="button button-outlined">
                    <span>Learn more</span>
                </button>
            </div>
        </div>

        <div class="card">
            <h1 class="headline6">CodeU Participant</h1>
            <h2 class="caption">Google</h2>
            <h3 class="date">10.29.2020 - 8.21.2021</h3>
            <p class="desc">Google's CodeU is an invite-only virtual program designed for aspiring technologists who have an interest in building new 
                tools and connecting with a wider tech community. During this 10-week program, I collaborated with a team of peers to design and 
                implement a web application using Java, JavaScript, HTML, and CSS, leveraging various Google Cloud Platform APIs.</p>
            <div class="card-actions">
                <button class="button button-outlined">
                    <span>Learn More</span>
                </button>
            </div>
        </div>

        <div class="card">
            <h1 class="headline6">Web Designer</h1>
            <h2 class="caption">Western Washington University</h2>
            <h3 class="date">10.29.2020 - 8.21.2021</h3>
            <p class="desc">My responsibilities included building and maintaining websites for ResTek and Western Washington University's Residences, 
                contributing to an existing style guide within team-established conventions, and conducting usability tests to enhance accessibility. 
                Also worked with students and staff within the University Residences to create and update content accurately, reliably, and on-time.</p>
            <div class="card-actions">
                <button class="button button-outlined">
                    <span>Learn more</span>
                </button>
            </div>
        </div>
    </div>
      // <FirebaseContext.Consumer>
      //   {firebase => (
      //     <List firebase={firebase}/>
      //   )}
      // </FirebaseContext.Consumer>
  );
}

export default App;
