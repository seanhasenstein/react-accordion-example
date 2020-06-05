import React, { useContext } from 'react';
import SelectableContext from './SelectableContext';
import AccordionContext from './AccordionContext';

export function useAccordionToggle(eventKey, onClick) {
  const contextEventKey = useContext(AccordionContext);
  const onSelect = useContext(SelectableContext);

  return e => {
    let eventKeyPassed = eventKey === contextEventKey ? null : eventKey;

    onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}

const AccordionToggle = ({
  Component,
  children,
  eventKey,
  onClick,
  ...props
}) => {
  const accordionOnClick = useAccordionToggle(eventKey, onClick);

  return (
    <Component onClick={accordionOnClick} {...props}>
      {children}
    </Component>
  );
};

export default AccordionToggle;
