function App() {
    return (
      <div className="App">
         <Nav>
            <Container>
              <Row>
                <Col>
                  <Nav.Link href="/Home">
                    Home
                  </Nav.Link>
                </Col>
                <Col>
                  <Link to="/User">
                    <Button variant="primary" type="button">USER</Button>
                  </Link>
                </Col>
                <Col>
                  <Link className="nav-link" to="/Contact">
                    Contact
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
            <p> </p>
            <Link to="/User">
              <button type="button">User</button>
            </Link>
            <p> </p>
            <Link to="/Contact">
              <button type = "buttton" varient= "success">Contact</button>
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