import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Home } from './Home';
import { numberIsPositive } from '../../utils/utils';

configure({ adapter: new Adapter() });

jest.mock('../../utils/utils');
jest.mock('../../actions/coin/coin');

describe('<Home />', () => {
  const props = {
    fetchCoinsData: jest.fn(),
    loading: false,
    match: { params: {} },
    history: { push: jest.fn() },
    error: false,
    total: 0,
    data: [],
  };

  const wrapper = shallow(<Home {...props} />);
  const instance = wrapper.instance();
  const fetchCoinsSpy = jest.spyOn(instance, 'fetchCoins');
  const fetchCoinsDatapy = jest.spyOn(instance.props, 'fetchCoinsData');
  const pushHistorySpy = jest.spyOn(instance.props.history, 'push');

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match initial state', () => {
    expect(wrapper.state()).toEqual({ currentPage: 1 });
  });

  it('should call fetchCoins in componentDidMount', () => {
    instance.componentDidMount();

    expect(fetchCoinsSpy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsSpy).toHaveBeenCalledWith(undefined);

    expect(pushHistorySpy).toHaveBeenCalledTimes(1);
    expect(pushHistorySpy).toHaveBeenCalledWith('/coins/1');

    expect(fetchCoinsDatapy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsDatapy).toHaveBeenCalledWith(0, 10);
  });

  it('should call fetchCoins in componentDidMount and should not push /coins/1 to history', () => {
    numberIsPositive.mockReturnValueOnce(true);
    instance.componentDidMount();

    expect(fetchCoinsSpy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsSpy).toHaveBeenCalledWith(undefined);

    expect(pushHistorySpy).toHaveBeenCalledTimes(0);

    expect(fetchCoinsDatapy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsDatapy).toHaveBeenCalledWith(0, 10);
  });

  it('should call fetchCoinsData with start:0 and perPage:10 when received invalid argument', () => {
    numberIsPositive.mockReturnValueOnce(false);

    instance.fetchCoins();
    expect(fetchCoinsDatapy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsDatapy).toHaveBeenCalledWith(0, 10);
  });

  it('should call fetchCoinsData with start:0 and perPage:10 when received invalid argument', () => {
    numberIsPositive.mockReturnValueOnce(true);

    instance.fetchCoins(1);
    expect(fetchCoinsDatapy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsDatapy).toHaveBeenCalledWith(0, 10);
  });

  it('should call fetchCoinsData with start:10 and perPage:20 when received page=2 as argument', () => {
    numberIsPositive.mockReturnValueOnce(true);

    instance.fetchCoins(2);
    expect(fetchCoinsDatapy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsDatapy).toHaveBeenCalledWith(10, 10);
  });

  it('should not call fetchCoinsData because current page dont changed', () => {
    numberIsPositive.mockReturnValueOnce(false);
    wrapper.setProps({ match: { params: { } } });

    expect(fetchCoinsSpy).toHaveBeenCalledTimes(0);
  });

  it('should call fetchCoinsData current page changed', () => {
    numberIsPositive.mockReturnValueOnce(true);
    wrapper.setProps({ match: { params: { page: '10' } } });

    expect(fetchCoinsSpy).toHaveBeenCalledTimes(1);
    expect(fetchCoinsSpy).toHaveBeenCalledWith(10);
    expect(wrapper.state()).toEqual({ currentPage: 10 });
  });

  it('should match state after call setCurrentPage', () => {
    instance.setCurrentPage(2);
    expect(wrapper.state()).toEqual({ currentPage: 2 });
  });

  it('should render Loading component', () => {
    wrapper.setProps({ loading: true });
    const loading = wrapper.find('Loading');

    expect(loading).toHaveLength(1);
  });

  it('should render error component', () => {
    wrapper.setProps({ error: true });
    const error = wrapper.find('Error');

    expect(error).toHaveLength(1);

    expect(error.get(0).props.msg).toBe('Oops something went wrong.');
  });

  it('should render Table component', () => {
    const data = [{ id: 1, name: 'Bitcoin' }, { id: 2, name: 'Litecoin' }];

    wrapper.setProps({
      data, loading: false, error: false, total: 100,
    });
    const { currentPage } = wrapper.state();
    const { total } = instance.props;
    const totalPages = Math.round(total / instance.perPage);
    const table = wrapper.find('Table');
    const pagination = wrapper.find('Pagination');

    expect(table).toHaveLength(1);
    expect(pagination).toHaveLength(1);

    expect(table.get(0).props.data).toBe(data);
    expect(table.get(0).props.headers).toBe(instance.headers);

    expect(pagination.get(0).props.currentPage).toBe(currentPage);
    expect(pagination.get(0).props.totalPages).toBe(totalPages);
  });
});
