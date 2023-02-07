import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

import auth  from '../../auth/auth';

//Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Login(props) {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  async function handleSubmit(e)  {
    e.preventDefault();
    auth.onAuthentication();
    auth.saveToken(email);
    navigate("/");
   
 
    
  };
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
            <Card.Title>Login</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Please Login to Evaluate The Course:</Card.Subtitle>
            <Card.Text>
             
         <Container fluid="lg">
          <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)}/> 
            <Form.Text className="text-muted" >
              Your email will pass to the next page
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
            </Row> 
        </Container>
    
        </Card.Text>
          </Card.Body>
        </Card>
        </Row> 
        </Container>
    </div>
    )


  }

  
