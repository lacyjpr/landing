import React from 'react';
import { shallow } from 'enzyme';

import Parting from './Parting';

describe('<Parting />', () => {
  it('renders without crashing', () => {
    shallow(<Parting />);
  });
});
