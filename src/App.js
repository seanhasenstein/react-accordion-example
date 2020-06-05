import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

const Button = ({ children, ...props }) => {
  return (
    <button className="toggle-content" {...props}>
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <h1>React Accordion Example</h1>
      <Accordion>
        <ul>
          <li>
            <Accordion.Toggle Component={Button} eventKey="0">
              Click Me 1!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              Hello I'm the body 1!
            </Accordion.Collapse>
          </li>
          <li>
            <Accordion.Toggle Component={Button} eventKey="1">
              Click Me 2!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              Hello I'm the body 2!
            </Accordion.Collapse>
          </li>
        </ul>
      </Accordion>
    </div>
  );
}

export default App;
