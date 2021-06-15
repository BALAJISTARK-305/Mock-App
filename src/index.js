import React from "react";
import ReactDOM from "react-dom";
import { Card, Container, Header, List } from "semantic-ui-react";
import pkg from 'semantic-ui-react/package.json'
import RESTAPI from "./components/RESTAPI";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";

import {ToastsContainer, ToastsStore} from 'react-toasts';

const App = ({ children }) => (
  
 
  <>
   
  <Header as="h1" style={{ margin: 20 ,alignItems: "center" , justifyContent: "center" , display: "flex"}} >STUDENT RECORDS</Header>
  <Container  style={{ margin: 25 , alignItems: "center" , justifyContent: "center" , display: "flex" }}>
    
    {children}
  </Container>
  
</>

);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App className="App"  >
   
    <Card.Group>
      {/* <cardview /> */}
      <RESTAPI/>
    </Card.Group>
    
  </App>,
  
  document.getElementById("root")
);
