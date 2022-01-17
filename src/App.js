import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Space from './Components/Space';
import Themes from './Components/Themes'


function App() {
  return (
    <Container fluid >
      <Row>
        <Col lg={3} style={{ paddingRight: '0px', paddingLeft: '0px' }}><Themes /></Col>
        <Col lg={9} style={{ paddingLeft: '0px' }}><Space /></Col>
      </Row>
    </Container>
  );
}

export default App;
