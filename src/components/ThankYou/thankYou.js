import React, { useState, useEffect }  from 'react';
import { useLocation } from 'react-router-dom';

//Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

export default function Result (){
    const loc = useLocation();

    let email = loc.state.email;
    let comment = loc.state.comment;

    return(
<div>

<Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">Matthew Mikhaiel - COMP 308 Lab 01</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    </Container>
  </Navbar>

  <Container>
    <Row style={{padding:'20px',justifyContent:'center'}}>

<Card style={{ width: '18rem' }} > 
    <Card.Body>
      <Card.Title>Thank You<br></br> {email}!</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"> <br></br>Your Comments: <br></br>{comment} </Card.Subtitle>
    </Card.Body>
  </Card>
  </Row> 
  </Container>

        </div>
    );
}
    



