import React, { useState } from 'react';
import AccordionContext from './AccordionContext';
import SelectableContext from './SelectableContext';
import AccordionToggle from './AccordionToggle';
import AccordionCollapse from './AccordionCollapse';

const Accordion = ({ children }) => {
  const [activeKey, setActiveKey] = useState(undefined);

  return (
    <AccordionContext.Provider value={activeKey}>
      <SelectableContext.Provider value={setActiveKey}>
        <div className="item">{children}</div>
      </SelectableContext.Provider>
    </AccordionContext.Provider>
  );
};

Accordion.Toggle = AccordionToggle;
Accordion.Collapse = AccordionCollapse;

export default Accordion;
