import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

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

function App() {
  const [activeKey, setActiveKey] = useState(undefined);
  return (
    <div className="App">
      <h1>React Accordion Example</h1>
      <div className="accordion">
        <ul>
          {list.map((item, i) => (
            <AccordionItem
              key={i}
              eventKey={i}
              item={item}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
