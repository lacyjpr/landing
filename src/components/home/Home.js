import React from 'react';
import blueWater from '../../assets/blue-water.jpg';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <img className='home__image' alt='Blue Water' src={blueWater} />
      <h2 className='home__text'>
        Build a landing page for your business or project and generate more
        leads!
      </h2>
    </div>
  );
};

export default Home;
