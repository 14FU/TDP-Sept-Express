import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hithere from './Props_section/Hithere';
import data from './Props_section/Data.json';
import Static from './Props_section/Static';
import Contact from './routing/contact';
import Home from './routing/home';
import User from './routing/Users';
import OMDB from './routing/omd';
import Film from './routing/filmie';
import PageNFound from'./routing/404';
import {
  Button, Col, Container, Nav, Row,
} from 'react-bootstrap';
//import Products from '../src/lifting_state/Searchlist';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Container>
            <Row>
              <Col>
                <Nav.Link href="/home">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Link to="/PageNFound">
                  <Button variant="primary" type="button">Erorr Page </Button>
                </Link>
              </Col>
              <Col>
                <Link className="nav-link" to="/User">
                  User
                </Link>
              </Col>
              <Col>
                <Link to="/Hithere">
                  Hithere
                </Link>
              </Col>
              <Col>
                <Link to="/Film">
                  Film
                </Link>
              </Col>
              <Col>
                <Link to="/filmSearch">
                  Film Search
                </Link>
              </Col>
              <Col lg={3}>
              </Col>
            </Row>
          </Container>

        </Nav>
        <br />
        <header>
          <h1>I AM A HEADER</h1>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/User" element={<User />} />
          <Route path="/Hithere" element={<Hithere />} />
          <Route path="/filmSearch" element={<OMDB />} />
          <Route path="/Static" element={<Static />} />
          <Route path="/PageNFound" element={<PageNFound />} />
          <Route path="/Film" element={<Film />} />
        </Routes>
        <footer>
          I AM A FOOTER
        </footer>
      </Router>
      {/* <Converter/> */}
      {/* <TrueFalse/> */}
    </div>
  );
}

export default App;
