import React from 'react';
import './Advantages.scss';

const advantages = [
  {
    key: 1,
    image: 'Advantages__image-one',
    text: 'Advantages__text-one',
    heading: 'Responsive Architecture',
  },
  {
    key: 2,
    image: 'Advantages__image-two',
    text: 'Advantages__text-two',
    heading: 'New and Improved',
  },
  {
    key: 3,
    image: 'Advantages__image-three',
    text: 'Advantages__text-three',
    heading: 'User Friendly',
  },
];

const Advantages = () => {
  return (
    <div className='Advantages'>
      {advantages.map(advantage => (
        <React.Fragment key={advantage.key}>
          <div className={advantage.image} />
          <div className={advantage.text}>
            <h2>{advantage.heading}</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Advantages;
