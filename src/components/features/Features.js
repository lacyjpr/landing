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
      <FontAwesomeIcon icon={faDesktop} />
      <FontAwesomeIcon icon={faLayerGroup} />
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
  );
};

export default Features;
