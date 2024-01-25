// TechnologyLogo.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logoStyle = {
  textAlign: 'center',
  margin: '10px',
  maxWidth: '100px', // Adjust the maximum width as needed
};

const TechnologyLogo = ({ icon, name }) => (
  <div style={logoStyle}>
    <FontAwesomeIcon icon={icon} size="3x" />
    <div style={{ marginTop: '5px' }}>{name}</div>
  </div>
);

export default TechnologyLogo;
