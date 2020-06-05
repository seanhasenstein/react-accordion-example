import React, { useContext } from 'react';
import AccordionContext from './AccordionContext';

const AccordionCollapse = React.forwardRef(
  ({ children, eventKey, ...props }, ref) => {
    const contextEventKey = useContext(AccordionContext);

    return (
      <div
        ref={ref}
        className={`collapse-content ${
          contextEventKey === eventKey ? 'show' : ''
        }`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionCollapse.displayName = 'AccordionCollapse';

export default AccordionCollapse;
