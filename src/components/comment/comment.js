import React, { useState, useEffect }  from 'react';
import auth  from '../../auth/auth';
import { useNavigate } from 'react-router-dom';

//Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';




export default function Comment(props) {
    let navigate = useNavigate();
   
    const [comment, setComment] = useState();
    const [email, setEmail] = useState();
  
  
    useEffect(() => {
      const loggedInUser = auth.getToken();
      if ( auth.isLoggedIn) setEmail(loggedInUser);
    
    
  },[]);
   
    const handleSubmit = e => {
      e.preventDefault();
      navigate('/thankyou', {
        state: {
          email: email,
          comment: comment,
         
        }
      });
     
   
      
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
      <Card.Title>Comments</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Please Leave Your Comments Below:</Card.Subtitle>
      <Card.Text>
       
   <Container fluid="lg">
    <Row>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Course Code:</Form.Label>
            <Form.Control type="text" placeholder="ie: COMP-308"  required  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Course Name:</Form.Label>
            <Form.Control type="text" placeholder="ie: Emerging Tech"  required  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Student Email:</Form.Label>
            <Form.Control type="text"  Value={email} disabled ={true} required  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Favourite Assignment:</Form.Label>
            <Form.Control type="text" placeholder="ie: Emerging Tech"  required  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Favourite Coding Language:</Form.Label>
            <Form.Control type="text"   required  />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} onChange= {(e => setComment(e.target.value))} required />
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

