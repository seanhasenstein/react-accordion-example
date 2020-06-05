import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

const AccordionCollapse = ({ children, eventKey, ...props }) => {
  const contextEventKey = useContext(AccordionContext);
  return (
    <div
      className={`collapse-content ${
        contextEventKey === eventKey ? 'show' : ''
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AccordionCollapse;
