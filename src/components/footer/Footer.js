import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitterSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer__left'>
        <ul className='Footer__left-list'>
          <li className='Footer__left-item'>About</li>
          <li className='Footer__left-item'>⋅</li>
          <li className='Footer__left-item'>Contact</li>
          <li className='Footer__left-item'>⋅</li>
          <li className='Footer__left-item'>Terms of Use</li>
          <li className='Footer__left-item'>⋅</li>
          <li className='Footer__left-item'>Privacy Policy</li>
        </ul>
      </div>
      <div className='Footer__right'>
        <ul className='Footer__right-list'>
          <li className='Footer__right-item'>
            <FontAwesomeIcon icon={faFacebook} size='2x' color='dodgerblue' />
          </li>
          <li className='Footer__right-item'>
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size='2x'
              color='dodgerblue'
            />
          </li>
          <li className='Footer__right-item'>
            <FontAwesomeIcon icon={faInstagram} size='2x' color='dodgerblue' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

//<li class="list-inline-item">⋅</li>
