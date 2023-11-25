import React from 'react';

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <h2>Toggle</h2>
      <button onClick={onDarkModeClick}></button>
    </header>
  );
};

export default Header;