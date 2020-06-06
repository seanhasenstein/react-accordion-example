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
      <button className="toggle-content" onClick={handleClick}>
        {item.toggle}
      </button>
      <div
        className={`collapse-content ${activeKey === eventKey ? 'show' : ''}`}
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
