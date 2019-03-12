import React from 'react';
import Button from 'react-bootstrap/Button';

import './Header.scss';

const Header = () => {
  return (
    <nav className='nav'>
      <div className='nav__title'>Start Bootstrap</div>
      <Button variant='primary' className='nav__button'>
        Sign In
      </Button>
    </nav>
  );
};

export default Header;
