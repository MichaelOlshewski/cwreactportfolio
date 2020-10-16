import React from 'react';
import NavBar from './components/NavBar'
import Main from './components/Main'
import WhoAmICard from './components/WhoAmICard'
import AboutMeCard from './components/AboutMeCard'
import { Row, Col } from 'react-bootstrap'
import './bootstrap-grid.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main>
        <Row>
          <Col col={12} sm={4} md={4} xl={4}>
            <WhoAmICard/>
          </Col>
          <Col col={12} sm={8} md={8} xl={8}>
            <AboutMeCard />
          </Col>
        </Row>
      </Main>
    </div>
  );
}

export default App;
