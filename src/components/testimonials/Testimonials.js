import React from 'react';
import './Testimonials.scss';
import onePortrait from '../../assets/one-portrait.jpg';
import twoPortrait from '../../assets/two-portrait.jpg';
import threePortrait from '../../assets/three-portrait.jpg';

const testimonies = [
  {
    key: 1,
    name: 'Mary M.',
    quote: "'I love working with this!'",
    image: onePortrait,
  },
  {
    key: 2,
    name: 'Charlie C.',
    quote: "'This is so useful & fun to use!'",
    image: twoPortrait,
  },
  {
    key: 3,
    name: 'Elaine E.',
    quote: "'My landing page looks fantastic!'",
    image: threePortrait,
  },
];

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <h3>What users are saying...</h3>
      <div className='Testimonials__wrapper'>
        {testimonies.map(testimony => (
          <div className='Testimonials__testimonial' key={testimony.key}>
            <div className='Testimonials__imageWrapper'>
              <img
                className='Testimonials__image'
                alt='Happy Face!'
                src={testimony.image}
              />
            </div>
            <h5>{testimony.name}</h5>
            <p>{testimony.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
