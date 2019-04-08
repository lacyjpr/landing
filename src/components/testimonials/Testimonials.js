import React from 'react';
import './Testimonials.scss';
import onePortrait from '../../assets/one-portrait.jpg';
import twoPortrait from '../../assets/two-portrait.jpg';
import threePortrait from '../../assets/three-portrait.jpg';

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <h3>What our customers are saying...</h3>
      <div className='Testimonials__testimonial'>
        <div className='Testimonials__imageWrapper'>
          <img
            className='Testimonials__image'
            alt='Happy Face!'
            src={onePortrait}
          />
        </div>
      </div>

      <div className='Testimonials__testimonial'>
        <div className='Testimonials__imageWrapper'>
          <img
            className='Testimonials__image'
            alt='Happy Face!'
            src={twoPortrait}
          />
        </div>
      </div>

      <div className='Testimonials__testimonial'>
        <div className='Testimonials__imageWrapper'>
          <img
            className='Testimonials__image'
            alt='Happy Face!'
            src={threePortrait}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
