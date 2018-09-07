import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Error from './Error';

configure({ adapter: new Adapter() });

describe('<Error />', () => {
  const wrapper = shallow(<Error msg="Oops something went wrong." />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default msg prop in case of falsy value', () => {
    wrapper.setProps({ msg: ''});
    expect(wrapper.find('.error-msg').children().text()).toBe('An error occurred');

    wrapper.setProps({ msg: undefined });
    expect(wrapper.find('.error-msg').children().text()).toBe('An error occurred');
  });
});
