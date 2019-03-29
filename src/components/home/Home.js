import React from 'react';
import blueWater from '../../assets/blue-water.jpg';
import './Home.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className='home'>
      <img className='home__image' alt='Blue Water' src={blueWater} />
      <h1 className='home__text'>
        Build a landing page for your business or project and generate more
        leads!
      </h1>
      <Form className='home__form'>
        <div className='home__form-email'>
          <Form.Control
            size='lg'
            type='email'
            className='home__form-email-input'
            placeholder='Your email...'
          />
        </div>

        <div className='home__form-button'>
          <Button
            variant='primary'
            className='home__form-button-primary'
            type='submit'
            block
          >
            Sign up!
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Home;
