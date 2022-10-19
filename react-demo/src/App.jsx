import logo from './logo.svg';
import './App.css';
import Hithere from './Props_section/Hithere';
import data from './Props_section/Data.json';
import Static from './Props_section/Static';
import Contact from './routing/contact';
import Home from './routing/home';
import User from './routing/Users';
import PageNFound from'./routing/404';
//import Products from '../src/lifting_state/Searchlist';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>hi there</h1>
          <body>
            <h6>i didnt break it </h6>
            <nav>
          <Link to="/Home">
            Home
          </Link>
          <Link to="/User">
            <button type="button">User</button>
          </Link>
          <Link to="/Contact">
            <button type = "buttton">Contact/</button>>
          </Link>

        </nav>
          </body>
          <Routes>
            <Route path = "example" element= {<Hithere/>}/>
            <Route path = "Static" element= {<Static/>}/>
            <Route path = "Home" element= {<Home/>}/>
            <Route path = "User" element= {<User/>}/>
            <Route path = "Contact" element= {<Contact/>}/>
            <Route path = "Error Page" element= {<PageNFound/>}/>
          </Routes>
          {
            data.map (s => {return <Static name={s.name} age= {s.age} dream= {s.dream}/>})
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Router>
    </div>
  );
}

export default App;
