import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import NotFound from './NotFound';

configure({ adapter: new Adapter() });

describe('<NotFound />', () => {
  const wrapper = shallow(<NotFound />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
