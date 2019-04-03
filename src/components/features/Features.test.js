import React from 'react';
import { shallow } from 'enzyme';

import Features from './Features';

describe('<Features />', () => {
  it('renders without crashing', () => {
    shallow(<Features />);
  });
});
