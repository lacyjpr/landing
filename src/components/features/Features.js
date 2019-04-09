import React from 'react';
import './Features.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const features = [
  {
    key: 1,
    icon: faDesktop,
    feat: "It's Responsive",
  },
  {
    key: 2,
    icon: faLayerGroup,
    feat: "It's Built With Bootstrap",
  },
  {
    key: 3,
    icon: faCheckCircle,
    feat: 'It Looks Great!',
  },
];

const Features = () => {
  return (
    <div className='Features'>
      <div className='Features__feature'>
        <FontAwesomeIcon icon={faDesktop} size='7x' color='dodgerblue' />
        <h3>It's Responsive</h3>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='Features__feature'>
        <FontAwesomeIcon icon={faLayerGroup} size='7x' color='dodgerblue' />
        <h3>It's built with Bootstrap</h3>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='Features__feature'>
        <FontAwesomeIcon icon={faCheckCircle} size='7x' color='dodgerblue' />
        <h3>It looks great!</h3>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Features;
