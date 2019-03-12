import React from 'react';
import blueWater from '../../assets/blue-water.jpg';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <img className='home__image' alt='Blue Water' src={blueWater} />
    </div>
  );
};

export default Home;
