import React from 'react';
import './Advantages.scss';

const advantages = [
  {
    key: 1,
    image: "'Advantages__image-one'",
    text: "'Advantages__text-one'",
    heading: 'Responsive Architecture',
  },
  {
    key: 2,
    image: "'Advantages__image-two'",
    text: "'Advantages__text-two'",
    heading: 'New and Improved',
  },
  {
    key: 1,
    image: "'Advantages__image-three'",
    text: "'Advantages__text-three'",
    heading: 'Responsive Architecture',
  },
];

const Advantages = () => {
  return (
    <div className='Advantages'>
      <div className='Advantages__image-one' />
      <div className='Advantages__text-one'>
        <h2>Responsive Architecture</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className='Advantages__image-two' />
      <div className='Advantages__text-two'>
        <h2>New and Improved!</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className='Advantages__image-three' />
      <div className='Advantages__text-three'>
        <h2>User Friendly!</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default Advantages;
