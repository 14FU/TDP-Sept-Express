import logo from './logo.svg';
import './App.css';
import Hithere from './Props_section/Hithere';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>hi there</h1>
          <body>
            <h6>i didnt break it </h6>
          </body>
          <h2><Hithere/></h2>
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
    </div>
  );
}

export default App;
