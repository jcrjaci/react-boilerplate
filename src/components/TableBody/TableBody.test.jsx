import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import TableBody from './TableBody';

configure({ adapter: new Adapter() });

describe('<TableBody />', () => {
  const data = [
    { id: 1, name: 'bitcoin', symbol: 'BTC' },
    { id: 2, name: 'litecoin', symbol: 'LTC' },
  ];
  const wrapper = shallow(<TableBody data={data} />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render empty table body', () => {
    wrapper.setProps({ data: [] });

    const tableLine = wrapper.find('.table-line');
    expect(tableLine).toHaveLength(0);
  });

  it('should render 3 table line inside table body', () => {
    const newData = [
      ...data,
      { id: 3, name: 'Ethereum', symbol: 'ETH' },
    ];
    wrapper.setProps({ data: [...newData] });
    const tableLine = wrapper.find('.table-line');

    expect(tableLine).toHaveLength(3);

    expect(tableLine.at(0).key()).toBe('1');
    expect(tableLine.at(0).find('.name').text()).toBe('bitcoin');
    expect(tableLine.at(0).find('.symbol').text()).toBe('BTC');
    expect(tableLine.at(0).find('.rank').text()).toBe('');
    expect(tableLine.at(0).find('.price').text()).toBe('');

    expect(tableLine.at(1).find('.name').text()).toBe('litecoin');
    expect(tableLine.at(1).find('.symbol').text()).toBe('LTC');
    expect(tableLine.at(1).find('.rank').text()).toBe('');
    expect(tableLine.at(1).find('.price').text()).toBe('');

    expect(tableLine.at(2).find('.name').text()).toBe('Ethereum');
    expect(tableLine.at(2).find('.symbol').text()).toBe('ETH');
    expect(tableLine.at(2).find('.rank').text()).toBe('');
    expect(tableLine.at(2).find('.price').text()).toBe('');
  });
});
