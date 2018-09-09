import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Table from './Table';

configure({ adapter: new Adapter() });

describe('<Table />', () => {
  const headers = ['header1', 'header2'];
  const data = [{ id: 1, name: 'bitcoin' }, { id: 2, name: 'litecoin' }];
  const wrapper = shallow(<Table headers={headers} data={data} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass same props to TableHeader component', () => {
    const tableHeader = wrapper.find('TableHeader');

    expect(tableHeader).toHaveLength(1);
    expect(tableHeader.props().headers).toEqual(headers);
  });

  it('should pass same props to TableBody component', () => {
    const tableBody = wrapper.find('TableBody');

    expect(tableBody).toHaveLength(1);
    expect(tableBody.props().data).toEqual(data);
  });

  it('should render children', () => {
    const children = <div className="children">children</div>;
    wrapper.setProps({ children });

    expect(wrapper.find('.children')).toHaveLength(1);
  });
});
