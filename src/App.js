import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import React, { useState }  from 'react';
import Comment from './components/comment/comment'; 
import Result from './components/ThankYou/thankYou'; 
import Login from './components/Login/login';
import PrivateRoute from './components/PrivateRoute'; 
import auth from './auth/auth';




function App() {

  return (
    <div className="wrapper">
      <Router> 
      <Routes>
      <Route path= "/login" element = { <Login/> }> </Route>
      <Route  exact path="/" element= { <PrivateRoute/> }> 
      <Route  exact path="/" element={  <Comment/> } />
      </Route>
      <Route  exact path="/thankyou" element= { <PrivateRoute/> }> 
      <Route exact path = "/thankyou" element = {<Result/> } > </Route>
      </Route>
     
          <Route path="*" element= { <Login/> }> </Route>
      </Routes>
      </Router>
     
    </div>
  );
}
export default App;
