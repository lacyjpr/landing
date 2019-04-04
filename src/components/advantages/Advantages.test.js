import React from 'react';
import { shallow } from 'enzyme';

import Advantages from './Advantages';

describe('<Advantages />', () => {
  it('renders without crashing', () => {
    shallow(<Advantages />);
  });
});
