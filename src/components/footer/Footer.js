import React from 'react';
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
      <div className='Footer__right' />
    </div>
  );
};

export default Footer;

//<li class="list-inline-item">⋅</li>
