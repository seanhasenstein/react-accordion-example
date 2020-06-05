import React from 'react';
import { useUncontrolled } from 'uncontrollable';
import AccordionContext from './AccordionContext';
import SelectableContext from './SelectableContext';
import AccordionToggle from './AccordionToggle';
import AccordionCollapse from './AccordionCollapse';

const Accordion = props => {
  let {
    Component = 'div',
    activeKey,
    children,
    onSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect',
  });

  return (
    <AccordionContext.Provider value={activeKey}>
      <SelectableContext.Provider value={onSelect}>
        <Component className="item" {...controlledProps}>
          {children}
        </Component>
      </SelectableContext.Provider>
    </AccordionContext.Provider>
  );
};

Accordion.Toggle = AccordionToggle;
Accordion.Collapse = AccordionCollapse;

export default Accordion;
