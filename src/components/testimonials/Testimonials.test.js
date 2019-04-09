import React from 'react';
import { shallow } from 'enzyme';

import Testimonials from './Testimonials';

describe('<Testimonials />', () => {
  it('renders without crashing', () => {
    shallow(<Testimonials />);
  });
});
