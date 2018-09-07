import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Loading from './Loading';

configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  const wrapper = shallow(<Loading />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    wrapper.setProps({ className: 'someClass' });
    expect(wrapper.find('.loading').hasClass('someClass')).toBeTruthy();
  });
});
