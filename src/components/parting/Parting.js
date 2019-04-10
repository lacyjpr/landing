import React from 'react';
import blueWater from '../../assets/blue-water.jpg';
import './Parting.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Parting = () => {
  return (
    <div className='Parting'>
      <img className='Parting__image' alt='Blue Water' src={blueWater} />
      <h1 className='Parting__text'>Ready to get started? Sign up now!</h1>
      <Form className='Parting__form'>
        <div className='Parting__form-email'>
          <Form.Control
            size='lg'
            type='email'
            className='Parting__form-email-input'
            placeholder='Your email...'
          />
        </div>

        <div className='Parting__form-button'>
          <Button
            variant='primary'
            className='Parting__form-button-primary'
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

export default Parting;
