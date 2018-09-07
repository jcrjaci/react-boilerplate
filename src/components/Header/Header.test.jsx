import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  const wrapper = shallow(<Header title="List of top 100 crypto currencies" />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should an empty header', () => {
    wrapper.setProps({ title: '' });
    expect(wrapper.find('.title').text()).toBe('');
  });
});
