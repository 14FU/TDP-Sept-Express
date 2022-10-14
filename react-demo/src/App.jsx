import logo from './logo.svg';
import './App.css';
import Hithere from './Props_section/Hithere';
import data from './Props_section/Data.json';
import Static from './Props_section/Static';

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
    </div>
  );
}

export default App;
