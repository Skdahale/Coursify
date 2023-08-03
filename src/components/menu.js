import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

import './menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = (event) => {
    setIsOpen(!isOpen);
    event.stopPropagation();
  };

  // const handleBodyClick = () => {
  //   setIsOpen(false);
  // };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className={`open ${isOpen ? 'oppenned' : ''}`} onClick={handleMenuClick} ref={menuRef}>
        <span className="cls"></span>
        <span>
          <ul className="sub-menu ">
            <li>
              <button title="about"><button href="/" >Services / About</button></button>
            </li>
            <li>
              <button title="skills"><button href="/">Next/ top</button></button>
            </li>
            <li>
              <button title="jobs"><button href="/">conjecture / Prediction</button></button>
            </li>
            <li>
              <button href="/" title="contact">Contato / Contact</button>
            </li>
          </ul>
        </span>
        <span className="cls"></span>
      </div>
    </div>
  );
};

export default Menu;