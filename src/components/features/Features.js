import React from 'react';
import './Features.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Features = () => {
  return (
    <div className='Features'>
      <div className='Features__feature'>
        <FontAwesomeIcon icon={faDesktop} size='7x' />
      </div>
      <div className='Features__feature'>
        <FontAwesomeIcon icon={faLayerGroup} size='7x' />
      </div>
      <div className='Features__feature'>
        <FontAwesomeIcon icon={faCheckCircle} size='7x' />
      </div>
    </div>
  );
};

export default Features;
