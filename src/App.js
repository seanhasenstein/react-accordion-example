import React from 'react';
import Accordion from './components/Accordion';
import './App.css';

const list = [
  {
    toggle: 'Toggle 1',
    content: 'This is content for toggle 1.',
  },
  {
    toggle: 'Toggle 2',
    content: 'This is content for toggle 2.',
  },
  {
    toggle: 'Toggle 3',
    content: 'This is content for toggle 3.',
  },
  {
    toggle: 'Toggle 4',
    content: 'This is content for toggle 4.',
  },
];

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
          {list.map((item, i) => (
            <li key={i}>
              <Accordion.Toggle Component={Button} eventKey={i}>
                {item.toggle}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={i}>
                {item.content}
              </Accordion.Collapse>
            </li>
          ))}
        </ul>
      </Accordion>
    </div>
  );
}

export default App;
