import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faLayerGroup,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div>
      <h1>Features Component</h1>
      <FontAwesomeIcon icon={faDesktop} size='7x' />
      <FontAwesomeIcon icon={faLayerGroup} size='7x' />
      <FontAwesomeIcon icon={faCheckCircle} size='7x' />
    </div>
  );
};

export default Features;
