import React from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ eventKey, item, activeKey, setActiveKey }) => {
  const handleClick = () => {
    setActiveKey(eventKey);
    if (eventKey === activeKey) {
      setActiveKey(undefined);
    }
  };

  return (
    <li className="item">
      <button
        className="accordion-header"
        onClick={handleClick}
        aria-expanded={activeKey === eventKey}
        aria-controls={`accordion-panel-${eventKey}`}
        id={`accordion-item-${eventKey}`}
      >
        {item.toggle}
      </button>
      <div
        id={`accordion-panel-${eventKey}`}
        className={`accordion-panel ${activeKey === eventKey ? 'show' : ''}`}
        aria-labelledby={`accordion-item-${eventKey}`}
        role="region"
        hidden={activeKey !== eventKey}
      >
        {item.content}
      </div>
    </li>
  );
};

AccordionItem.propTypes = {
  eventKey: PropTypes.number.isRequired,
  item: PropTypes.shape({
    toggle: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  activeKey: PropTypes.number,
  setActiveKey: PropTypes.func.isRequired,
};

export default AccordionItem;
