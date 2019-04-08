import React from 'react';
import './Testimonials.scss';
import onePortrait from '../../assets/one-portrait.jpg';
import twoPortrait from '../../assets/two-portrait.jpg';
import threePortrait from '../../assets/three-portrait.jpg';

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <h3>What users are saying...</h3>
      <div className='Testimonials__wrapper'>
        <div className='Testimonials__testimonial'>
          <div className='Testimonials__imageWrapper'>
            <img
              className='Testimonials__image'
              alt='Happy Face!'
              src={onePortrait}
            />
          </div>
          <h5>Mary M.</h5>
          <p>"I love working with this!"</p>
        </div>

        <div className='Testimonials__testimonial'>
          <div className='Testimonials__imageWrapper'>
            <img
              className='Testimonials__image'
              alt='Happy Face!'
              src={twoPortrait}
            />
          </div>
          <h5>Charlie C.</h5>
          <p>"This is so useful & fun to use!"</p>
        </div>

        <div className='Testimonials__testimonial'>
          <div className='Testimonials__imageWrapper'>
            <img
              className='Testimonials__image'
              alt='Happy Face!'
              src={threePortrait}
            />
          </div>
          <h5>Elaine E.</h5>
          <p>"My landing page looks fantastic!"</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
