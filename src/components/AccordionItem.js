import React from 'react';

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

export default AccordionItem;
