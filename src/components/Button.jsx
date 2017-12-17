import React from 'react';

import '../styles/Button.css';

function Button ({ className, children, onClick, style }) {
  return (
    <button onClick={onClick} style={style} className={`cool-button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
