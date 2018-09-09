import reducer from './coin';
import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from '../../constants/coin';

describe('coin reducer', () => {
  const initialState = {
    data: [], loading: false, error: false, total: 0,
  };

  it('should return the initial state', () => {
    const newState = reducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_COINS_REQUEST with empty initial state', () => {
    const action = { type: FETCH_COINS_REQUEST };
    const newState = reducer(undefined, action);

    expect(newState).toEqual({ ...initialState, loading: true });
  });

  it('should handle FETCH_COINS_REQUEST with data in initial state', () => {
    const action = { type: FETCH_COINS_REQUEST };
    const state = { ...initialState, total: 10, data: [1, 2, 3] };
    const newState = reducer({ ...state }, action);

    expect(newState).toEqual({ ...state, loading: true });
  });

  it('should handle FETCH_COINS_FAILURE with empty initial state', () => {
    const action = { type: FETCH_COINS_FAILURE };
    const newState = reducer(undefined, action);

    expect(newState).toEqual({
      ...initialState, data: [], error: true, errorType: undefined, loading: false,
    });
  });

  it('should handle FETCH_COINS_FAILURE (passing the error type) with empty initial state', () => {
    const action = { type: FETCH_COINS_FAILURE, payload: {}, error: 'defaultError' };
    const newState = reducer(undefined, action);

    expect(newState).toEqual({
      ...initialState, error: true, errorType: 'defaultError', data: [], loading: false,
    });
  });

  it('should handle FETCH_COINS_FAILURE with data in initial state', () => {
    const action = { type: FETCH_COINS_FAILURE };
    const state = {
      ...initialState, total: 10, data: [1, 2, 3], loading: true,
    };
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state, data: [], error: true, errorType: undefined, loading: false,
    });
  });

  it('should handle FETCH_COINS_FAILURE (passing the error type) with data in initial state', () => {
    const action = { type: FETCH_COINS_FAILURE, payload: {}, error: 'defaultError' };
    const state = {
      ...initialState, loading: true, total: 10, data: [1, 2, 3],
    };
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state, error: true, errorType: 'defaultError', data: [], loading: false,
    });
  });

  it('should handle FETCH_COINS_SUCCESS with empty initial state', () => {
    const payload = {
      data: { 0: { id: 1, name: 'Bitcoin' } },
      metadata: { num_cryptocurrencies: 1925 },
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(undefined, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [{ id: 1, name: 'Bitcoin' }],
      loading: false,
      total: 1925,
    });
  });

  it('should handle FETCH_COINS_SUCCESS (empty payload) with empty initial state', () => {
    const payload = {};
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(undefined, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [],
      loading: false,
      total: 0,
    });
  });

  it('should handle FETCH_COINS_SUCCESS (empty data) with empty initial state', () => {
    const payload = {
      data: undefined,
      metadata: { num_cryptocurrencies: 1925 },
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(undefined, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [],
      loading: false,
      total: 1925,
    });
  });

  it('should handle FETCH_COINS_SUCCESS (empty metadata) with empty initial state', () => {
    const payload = {
      data: { 0: { id: 1, name: 'Bitcoin' }, 1: { id: 2, name: 'Litecoin' } },
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(undefined, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [{ id: 1, name: 'Bitcoin' }, { id: 2, name: 'Litecoin' }],
      loading: false,
      total: 0,
    });
  });

  it('should handle FETCH_COINS_SUCCESS with initial state', () => {
    const payload = {
      data: { 0: { id: 1, name: 'Bitcoin' }, 1: { id: 2, name: 'Litecoin' } },
      metadata: { num_cryptocurrencies: 1925 },
    };
    const state = {
      ...initialState, loading: true, total: 10, data: [{ id: 1, name: 'Bitcoin' }],
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [{ id: 1, name: 'Bitcoin' }, { id: 2, name: 'Litecoin' }],
      loading: false,
      total: 1925,
    });
  });

  it('should handle FETCH_COINS_SUCCESS (with empty payload) with initial state', () => {
    const payload = {};
    const state = {
      ...initialState, loading: true, total: 10, data: [{ id: 1, name: 'Bitcoin' }],
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [],
      loading: false,
      total: 10,
    });
  });

  it('should handle FETCH_COINS_SUCCESS (with empty data) and with initial state', () => {
    const payload = {
      data: undefined,
      metadata: { num_cryptocurrencies: 1925 },
    };
    const state = {
      ...initialState, loading: true, total: 10, data: [{ id: 1, name: 'Bitcoin' }],
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [],
      loading: false,
      total: 1925,
    });
  });

  it('should handle FETCH_COINS_SUCCESS (with empty metadata) and with initial state', () => {
    const payload = {
      data: { 0: { id: 1, name: 'Bitcoin' }, 1: { id: 2, name: 'Litecoin' } },
    };
    const state = {
      ...initialState, loading: true, total: 10, data: [{ id: 1, name: 'Bitcoin' }],
    };
    const action = { type: FETCH_COINS_SUCCESS, payload: { ...payload } };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...initialState,
      error: false,
      errorType: '',
      data: [{ id: 1, name: 'Bitcoin' }, { id: 2, name: 'Litecoin' }],
      loading: false,
      total: 10,
    });
  });
});
