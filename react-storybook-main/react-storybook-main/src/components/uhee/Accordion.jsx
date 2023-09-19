import React, { useState } from 'react';

import "../../assets/scss/Accordion.scss";

function Accordion({options}) {
  const [activeItem, setActiveItem] = useState(null);
  const onClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  }

  return (
    <div className="accordion">
      <ul>
        {options.map((item, index) => (
          <li
            key={index}
            onClick={() => onClick(index)}
            className={index === activeItem ? "open" : ""}
          >
            <div className="accordion_head">
              {item.title}
              <i className="icon"></i>
            </div>
            {index === activeItem && (
              <div className="accordion_body">
                {item.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
