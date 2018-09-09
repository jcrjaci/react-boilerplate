import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetchCoins from './coin';
import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../../constants/coin';
import { numberIsZeroOrGreater } from '../../utils/utils';

jest.mock('../../utils/utils');
jest.mock('whatwg-fetch');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
numberIsZeroOrGreater.mockReturnValue(true); // by default return true

describe('coin action', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('dispatch FETCH_COINS_SUCCESS when fetch coin data with success', async () => {
    const response = {
      data: { 0: { id: 1, name: 'Bitcoin' } },
      metadata: { num_cryptocurrencies: 1925 },
    };

    const endpoint = 'https://api.coinmarketcap.com/v2/ticker/?start=0&&limit=10';
    fetchMock
      .getOnce(endpoint, { body: { ...response }, headers: { 'content-type': 'application/json' } });

    const expectedActions = [
      { type: FETCH_COINS_REQUEST },
      { type: FETCH_COINS_SUCCESS, payload: { ...response } },
    ];
    const store = mockStore({ data: [] });
    await store.dispatch(fetchCoins(0, 10));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch FETCH_COINS_FAILURE because invalid response', async () => {
    const endpoint = 'https://api.coinmarketcap.com/v2/ticker/?start=0&&limit=10';
    fetchMock
      .getOnce(endpoint, { headers: { 'content-type': 'application/json' } });

    const expectedActions = [
      { type: FETCH_COINS_REQUEST },
      { type: FETCH_COINS_FAILURE, error: 'request_failed' },
    ];
    const store = mockStore({ data: [] });
    await store.dispatch(fetchCoins(0, 10));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch FETCH_COINS_FAILURE invalid start parameter', async () => {
    numberIsZeroOrGreater.mockReturnValue(false);

    const expectedActions = [
      { type: FETCH_COINS_REQUEST },
      { type: FETCH_COINS_FAILURE, error: 'invalid_number' },
    ];

    const store = mockStore({ data: [] });
    await store.dispatch(fetchCoins(undefined, 10));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatch FETCH_COINS_FAILURE invalid limit parameter', async () => {
    numberIsZeroOrGreater.mockReturnValueOnce(true); // mock start call
    numberIsZeroOrGreater.mockReturnValueOnce(false); // mock limit call

    const expectedActions = [
      { type: FETCH_COINS_REQUEST },
      { type: FETCH_COINS_FAILURE, error: 'invalid_number' },
    ];
    const store = mockStore({ data: [] });
    await store.dispatch(fetchCoins(0, undefined));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
