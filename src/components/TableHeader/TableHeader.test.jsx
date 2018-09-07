import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import TableHeader from './TableHeader';

configure({ adapter: new Adapter() });

describe('<TableHeader />', () => {
  const headers = ['header1', 'header2'];
  const wrapper = shallow(<TableHeader headers={headers} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty table header', () => {
    wrapper.setProps({ headers: [] });
    const tableHeader = wrapper.find('.table-header').children();
    expect(tableHeader).toHaveLength(0);
  });

  it('should render 4 headers', () => {
    wrapper.setProps({ headers: [...headers, 'header3', 'header4'] });
    const tableHeader = wrapper.find('.table-header').children();
    expect(tableHeader).toHaveLength(4);
    expect(tableHeader.at(0).key()).toBe('header1');
    expect(tableHeader.at(1).key()).toBe('header2');
    expect(tableHeader.at(2).key()).toBe('header3');
    expect(tableHeader.at(3).key()).toBe('header4');
  });
});
